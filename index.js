const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const inputButton = document.querySelector('#input-button')

function addTask(){
  if (inputBox.value === ''){
    alert("You must write something!")
  }else{
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)

    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

// ADD TASK

inputButton.addEventListener('click',()=>{
  addTask()
})
inputBox.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    addTask()
  }
})

// Mark tasks complete
listContainer.addEventListener('click',(event)=>{
  if (event.target.tagName === 'LI'){
    event.target.classList.toggle('checked')
    saveData()
  }else if (event.target.tagName === 'SPAN'){
    event.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData(){
  localStorage.setItem('data',listContainer.innerHTML)
}

function showTasks(){
  listContainer.innerHTML =localStorage.getItem('data')
}
showTasks()