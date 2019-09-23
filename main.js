const addForm = document.querySelector(`.form`);
const addUl= document.querySelector(`#ulList`);
const addSearch = document.getElementById(`search`);



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


addSearch.addEventListener('keyup', e => {
    const valueInput = addSearch.value;

    liSearch(valueInput);
    
});

const liSearch = (value) => {
    console.log(value);
    const arrayList = Array.from(addUl.children);
    let filterItems = arrayList.filter(item => !item.textContent.includes(value))
    .forEach(e => e.classList.add('filtered'))
    filterItems = arrayList.filter(item => item.textContent.includes(value))
    .forEach(e => e.classList.remove('filtered'))
}
