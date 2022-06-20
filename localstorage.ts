const store = {
  preId: "xi-",
  timeSignL: "|-door-|",
  status: {
    SUCCESS: 0,
    FAILURE: 1,
    OVERFLOW: 2,
    TIMEOUT: 3,
  },
  storage: localStorage || window.localStorage,
  getKey: function (key: string) {
    return this.preId + key;
  },
  set: function (
    key: string,
    value: string | number,
    time: Date & number,
    cb: (status: number, key: string, value: string | number) => void
  ) {
    let _status = this.state.SUCCESS,
      _key = this.getKey(key),
      _time;

    try {
      _time = time
        ? new Date(time).getTime() || time.getTime()
        : new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    } catch (e) {
      _time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    }

    try {
      this.storage.setItem(_key, _time + this.timeSign + value);
    } catch (e) {
      _status = this.status.OVERFLOW;
    }
    cb && cb.call(this, _status, _key, value);
  },
  get: function (
    key: string,
    cb?: (status: number, value: string | number | null) => void
  ) {
    let status = this.status.SUCCESS,
      _key = this.getKey(key),
      value = null,
      timeSignLen = this.timeSign.length,
      that = this,
      index,
      time,
      result;
    try {
      value = this.storage.getItem(_key);
    } catch (e) {
      result = {
        status: this.status.FAILURE,
        value: null,
      };
      cb && cb.call(this, result.status, result.value);
      return result;
    }

    if (value) {
      index = value.indexOf(that.timeSign);
      time = +value.slice(0, index);
      if (time > new Date().getTime() || time === 0) {
        value = value.slice(index + timeSignLen);
      } else {
        value = null;
        status = that.status.TIMEOUT;
      }
    } else {
      status = that.status.FAILURE;
    }
    result = {
      status: status,
      value: value,
    };
    cb && cb.call(this, result.status, result.value);
    return result;
  },
};

export default store;
