const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search imput');

//funkcija to generate templeate za ADD... to bomo injectali v eventListnerja
const generateTemplate = todo => {
    const html =`
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
//kaj noter napiše - trim se string da obreže presledke
    const todo = addForm.add.value.trim();
    if(todo){
        generateTemplate(todo);
    };
  addForm.reset();
});

//trash can
ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

//funkcija za search
const filterToDos = (term) => {
console.log(term);
};

//search event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterToDos(term);
});