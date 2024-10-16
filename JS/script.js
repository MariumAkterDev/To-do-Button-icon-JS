// <=======================================< DOM >=================================================>
// =========================> number count DOM
let doneTask            = 0
let completedTask       = document.querySelector ('.completedTask')
let totalTask           = 0
let listedTask          = document.querySelector ('.listedTask')
// =========================> html DOM
let userInput           = document.querySelector(".userInput")
let addBtn              = document.querySelector(".addBtn")
let motherList          = document.querySelector(".motherList")
let turn                = true // for edit button function
// <-----------------------------------< DOM Part Ends >------------------------------------------>
// ................................................ Function.......................................
userInput.addEventListener('click' , ()=>{
    userInput.style     = 'border: 1px solid var(--purple) '
})
//  ....................................................... Enter key function
let enterKeyFun = (item) =>{
    if (item.key == 'Enter'){
        btnClickFun()
    }
}
//  ..................................................... button click function
let btnClickFun = () => {
    if(userInput.value == ''){
        userInput.style     = 'border: 1px solid orangered '
        userInput.blur()
    }else{
        // ================================> element create 
    let list                = document.createElement('div')
    let listBox             = document.createElement('div')
    let check               = document.createElement('div')
    let checkbox            = document.createElement('input')
    let listTaskInp         = document.createElement('input')
    let editBtn             = document.createElement('i')
    let deleteBtn           = document.createElement('i')
    // ====================================> showing path 
    motherList              .appendChild(list)
    list                    .appendChild(listBox)
    listBox                 .appendChild(check)
    check                   .appendChild(checkbox)
    listBox                 .appendChild(listTaskInp)
    listBox                 .appendChild(editBtn)
    listBox                 .appendChild(deleteBtn)
    // =====================================> adding class
    list                    .classList.add('list')
    listBox                 .classList.add('listBox')
    check                   .classList.add('check')
    checkbox                .classList.add('checkbox')
    listTaskInp             .classList.add('listTaskInp')
    editBtn                 .classList.add('fa-solid' , 'fa-pen-to-square')
    deleteBtn               .classList.add('fa-solid' , 'fa-trash-can')
    // ======================================> set attributes
    checkbox.type           = 'checkbox'
    listTaskInp             .setAttribute('readonly' , 'readonly')
    // ..................................................... Data transfer function 
    listTaskInp.value       = userInput.value 
    userInput.value         = ""
    totalTask++
    listedTask.innerHTML    = totalTask
    // ........................................................ edit button function 
    editBtn.addEventListener('click', () => {
        if (turn == true){
            listTaskInp.style   = 'background: transparent'
            listTaskInp.removeAttribute('readonly' , 'readonly')
            editBtn.classList.remove('fa-solid' , 'fa-pen-to-square')
            editBtn.classList.add('fa-regular' , 'fa-bookmark')
            turn                = false
        }else{
            listTaskInp.style   = 'background: var(--secondaryBackground);'
            listTaskInp.setAttribute('readonly' , 'readonly')
            editBtn.classList.add('fa-solid' , 'fa-pen-to-square')
            editBtn.classList.remove('fa-regular' , 'fa-bookmark')
            turn                = true
        }
    })
    // ............................................................ check box function 
    checkbox.addEventListener('click' , ()=>{
        if (checkbox.checked){
            doneTask++
            completedTask.innerHTML     = doneTask
            listTaskInp.style           = 'text-decoration: line-through;'
            editBtn.style               = 'display: none'
            confetti()
        }else{
            doneTask--
            completedTask.innerHTML     = doneTask
            listTaskInp.style           = 'text-decoration: none;'
            editBtn.style               = 'display: block'
        }
    })
    // ........................................................... Delete button function 
    deleteBtn.addEventListener('click' , () => {
        list.remove()

        if (doneTask > 0) {
            doneTask--
            completedTask.innerHTML     = doneTask
        }
        if (totalTask > 0){
            totalTask--
            listedTask.innerHTML        = totalTask
        }
    })
    // ------------------------------X--------------------------------------------->

    } // --------------------------------> else ending point
} // ------------------> if ending point





















