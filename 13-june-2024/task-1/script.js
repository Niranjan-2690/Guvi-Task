const div = document.createElement('div')
div.setAttribute("class", "container")
document.body.appendChild(div)

const input = document.createElement("input")
input.setAttribute("class", "input")
div.append(input)

const buttondiv = document.createElement('div')
buttondiv.setAttribute("class", "input-element")
const btn = document.createElement("button")
buttondiv.innerText= "0"
buttondiv.innerText= "1"
buttondiv.innerText= "2"
div.append(buttondiv)