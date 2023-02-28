const array = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep']

function sheepAndWolf (args) {
  const lastElement = args.length - 1
  for (let i = args.length - 1; i >= 0; i--) {
    /* if (args[lastElement] === 'wolf') {
      console.log("Pls go away and stop eating my sheep")
    } 
    else  */if (args[i] === 'wolf') {
      console.log(`Oi! Sheep ${i}! You are about to be eaten by a wolf!`)
    }
  }
}

sheepAndWolf(array)