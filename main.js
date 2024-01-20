console.log("JavaScript Practice, DOM");
console.log("");


const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type ='text']")
const ul = document.querySelector(".todo-list")

console.log(todoForm);
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml =
        `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    console.log(newTodoText);
    console.log(newLi);
    ul.append(newLi);
    todoInput.value = "";
})

ul.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        // console.log("You Want to remove some thing");
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

})


const input=[2, 7, 11, 4, -2];
const output = [11, 4, -2, 2, 7];
let n = input.length;
// let arr = Array(n).fill(0);
let arr = [];
function rotateArray(input){
    for(let i = 0; i < n; i++){
        arr[i] = input[(n+2+i)%n];
    }
}
rotateArray(input);

console.log(arr);

