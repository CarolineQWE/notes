function game(playerAction) {
  if (!playerAction) {
    console.log("请输入！");
    return 0;
  }
  const random = Math.floor(Math.random() * 3);
  const actions = ["rock", "scissor", "paper"];

  const computerAction = actions[random];
  console.log(computerAction);

  if (computerAction === playerAction) {
    console.log("平局");
    return 0;
  } else if (
    (playerAction === "rock" && computerAction === "scissor") ||
    (playerAction === "scissor" && computerAction === "paper") ||
    (playerAction === "paper" && computerAction === "rock")
  ) {
    console.log("你赢了");
    return 1;
  } else {
    console.log("你输了");
    return 0;
  }
}

module.exports = game;
