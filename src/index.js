document.addEventListener('DOMContentLoaded', () => {
  let taskForm = document.querySelector('#create_task_form')
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
  const task = taskForm.value;
  if (!task){
    alert("Please fill out the task")
    return
  }
})

function buildToDo(todo){
  let li = document.createElement('li')
  let edit = document.createElement('button')
  let button = document.createElement('button')
  
  
  button.addEventListener('click', handleDelete)
  // edit.addEventListener('click', editHandle)
  
  li.textContent = `${todo}`
  li.style.fontWeight = 'bold'
  li.style.background = '#B2B2B2'
  li.style.borderRadius = '5px '
  li.style.padding = '10px'
  li.style.margin = '10px'
  // edit.setAttribute = ('readonly', 'readonly')
  // edit.textContent = 'EDIT'
  edit.style.color = '#DC5F00'
  edit.style.paddingLeft = '150px'
  button.textContent = 'DELETE'
  button.style.color = 'crimson'
  button.style.paddingLeft = '10px'
  button.style.cursor = 'pointer'

  li.appendChild(edit)
  li.appendChild(button)

  
  console.log(li)
  console.log(button)
 
  
  document.querySelector('#tasks').appendChild(li)
  // document.querySelector('#create_task_form').appendChild(priority)

  
}

function handleDelete(e){
  e.target.parentNode.remove()
}
// function editHandle (e){
  
//   if (e.target.parentNode.toLowerCase() === "edit"){
//     e.target.parentNode.removeAttribute('readonly')
//     e.target.parentNode.focus();
//     e.target.parentNode.innerHTML = 'Save'
//   }else{

//     e.target.parentNode.setAttributte('readonly', 'readonly');
//     e.target.parentNode.innerHTML = 'Edit'
//   }
  
// }