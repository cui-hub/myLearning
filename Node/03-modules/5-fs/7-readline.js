const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question('你如何看待当今大学？',(answer) => {
  // TODO
  console.log(`你的意见:${answer}`)
})