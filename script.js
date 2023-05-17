let user = prompt("Enter s for Snake, w for Water, or g for Game")
let cpuInput = Math.floor(Math.random() * 3);
let cpu = ['s','w','g'][cpuInput]


const match = (cpu, user) =>{
  if(cpu === user){
    return "Tie"
  }
  else if(cpu === "s" && user === "w"){
    return "cpu"
  }
  else if(cpu === "s" && user === "g" ){
    return "user"
  }
  else if(cpu === "g" && user === "w"){
    return "user"
  }
  else if(cpu === "g" && user === "s"){
    return "cpu"
  }
  else if(cpu === "w" && user === "s"){
    return "user"
  }
  else if(cpu === "w" && user === "g"){
    return "cpu"
  }
}
let result = match(cpu, user)
document.write(`User: ${user} <br> Cpu: ${cpu}<br> The winner is:  ${result.toUpperCase()}`)
