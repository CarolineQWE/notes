const game = require("./game.js");

const playGame = () => {
  let count = 0;

  process.stdin.on("data", (e) => {
    const playerAction = e.toString().trim();
    const res = game(playerAction);
    count += res;
    console.log(count, "count");

    if (count === 3) {
      console.log("你太厉害了我不玩了！");
      process.exit();
    }
  });
};

module.exports = playGame;
