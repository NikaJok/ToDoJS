const addForm = document.querySelector(`.form`);
const addUl= document.querySelector(`#ulList`);

addForm.addEventListener('submit', e => {
    const valueInput = addForm.todo.value;
    generateTodoHtml(valueInput);
    addForm.reset();
    e.preventDefault();
})


const generateTodoHtml = (inputLi) =>{
    const li = `<li class="collection-item"><div>${inputLi}<a href="#!" class="secondary-content"><i class="material-icons box">delete</i></a></div></li>`;
    if(inputLi != ''){
        addUl.innerHTML += li;
    } else{
        alert('You not write your todo!');
    }
}

addUl.addEventListener('click', e =>{
    if(e.target.classList.contains('box') === true){
      e.target.parentNode.parentElement.parentElement.remove();
   }
})
    //const delLi = document.querySelectorAll(`.secondary-content`);
    // delLi.forEach( (index,delLi) => {
    //     const deleteLi = index;
    //     deleteLi.addEventListener('click', e =>{
    //        e.target.parentNode.parentElement.parentElement.remove();
    //        console.log('click');
    //     })
    // })
    // console.log(delLi);