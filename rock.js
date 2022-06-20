console.log(process.argv);

const playerAction = process.argv[process.argv.length - 1];

console.log(playerAction);

const random = Math.floor(Math.random() * 3);
const actions = ["rock", "scissor", "paper"];

const computerAction = actions[random];
console.log(computerAction);

if (computerAction === playerAction) {
  console.log("平局");
} else if (
  (computerAction === "rock" && playerAction === "scissor") ||
  (computerAction === "scissor" && playerAction === "paper") ||
  (computerAction === "paper" && playerAction === "rock")
) {
  console.log("你输了");
} else {
  console.log("你赢了");
}
