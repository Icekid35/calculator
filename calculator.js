const activescreen = document.querySelector(".activescreen")
const inactivescreen = document.querySelector(".inactivescreen")
const buttons = document.querySelectorAll(".button")
const digits = []

function update() {
  activescreen.innerText = digits.join('') || 0
  inactivescreen.innerText = eval(digits.join('')) || 0
}

function toNormal() {
  activescreen.classList.add('activescreen')
  activescreen.classList.remove('inactivescreen')
  inactivescreen.classList.remove('activescreen')
  inactivescreen.classList.add('inactivescreen')
}

function showresult() {
  activescreen.classList.remove('activescreen')
  activescreen.classList.add('inactivescreen')
  inactivescreen.classList.add('activescreen')
  inactivescreen.classList.remove('inactivescreen')
  digits[0] = eval(digits.join('')) || ''
  digits.length = 1
}

function clearresult() {
  digits.length = 0
  activescreen.innerText = 0
  inactivescreen.innerText = 0
}

function removeDigits() {
  digits.pop()
  update()
}
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (activescreen.classList.contains("inactivescreen")) toNormal()
    if (e.target.innerText == "=") return showresult()
    if (e.target.innerText == "del") return removeDigits()
    if (e.target.innerText == "C") return clearresult()
    digits.push(e.target.innerText)
    update()
  })
})