const fs = require( "fs" )

const text = fs.readFileSync("data.txt",{encoding:"utf8"})

const line = text.split("\n")

const data = [[]]

let flag = false

for(let x of line){
  const tokens = [x.slice(0,2).trim(),x.slice(2).trim()]
  if(parseInt(tokens[0]).toString()==tokens[0]){
    data[0].push(tokens[1])
  }else if(data[0].length>0){
    data.unshift([])
  }
  
}
data.shift()
console.log(JSON.stringify(data))

