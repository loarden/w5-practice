const buttonElement = document.querySelector('.click-button')
const bodyElement = document.querySelector('body')

buttonElement.innerHTML = 'klikkelj rám!'

let darkTheme = false

buttonElement.addEventListener('click', function () {
  console.log('clicked')

  darkTheme = !darkTheme
  
  if (darkTheme === true){
    buttonElement.innerHTML = 'Dark Theme on'
    bodyElement.classList.add('dark')
  }
  else {
    buttonElement.innerHTML = 'Dark Theme off'
    bodyElement.classList.remove('dark')
  }

})
