console.log('helo')

const cinemaData = [
  {
    name: 'comedy',
    chairs: 20
  },
  {
    name: 'drama',
    chairs: 10
  },
  {
    name: 'action',
    chairs: 25
  },
  {
    name: 'porn',
    chairs: 50
  }
]

const chairComponent = (nth) => {
  return `
    <div class='chair'>
      ${nth}
    </div>`
}

const roomComponent = (roomName, chairCount) => {

  let roomHtml = ''
  
  for (let i = 1; i <= chairCount; i++) {
    roomHtml += chairComponent(i)
  }

  return `
    <div class='room ${roomName}'>
      ${roomHtml}
    </div>
  `
}

const cinemaComponent = (rooms) => {
  let cinemaHTML = ''

  for (let i = 0; i < rooms.length; i++) {
    cinemaHTML += roomComponent(rooms[i].name, rooms[i].chairs)
  }

  return `
    <div class='cinema'>
      ${cinemaHTML}
    </div>
  `
}

cinemaComponent(cinemaData)

const rootElement = document.querySelector('#root')

rootElement.insertAdjacentHTML('beforeend', cinemaComponent(cinemaData))


/* for (let i = 0;i < 5; i++) {
  rootElement.insertAdjacentHTML('beforeend', chairComponent(i+1)) */


