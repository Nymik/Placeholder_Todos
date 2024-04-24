const divTodos = document.querySelector('.todos');
const getTodoButton = document.getElementById('getTodos');
const createNewTodoButton = document.getElementById('addTodo');
const getPostTitle = document.getElementById('inputToDoTitle');

function createSpanTodo(todoTitle) {
  var spanTodo = document.createElement('span');
  spanTodo.textContent = todoTitle;
  // Add classes to the span element text-slate-100 font-bold text-2xl p-3 m-7 rounded border-4 bg-cyan-400 border-cyan-600
  spanTodo.classList.add(
    'text-slate-100',
    'font-bold',
    'text-2xl',
    'p-3',
    'm-7',
    'rounded',
    'border-4',
    'bg-cyan-400',
    'border-cyan-600'
  );

  divTodos.appendChild(spanTodo);
}

function createNewTodo(e) {
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/todos/?_Limit=5', {
    method: 'POST',
    body: JSON.stringify({
      title: getPostTitle.value,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
}

function getTodo(e) {
  fetch('https://jsonplaceholder.typicode.com/todos/?_limit=8')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => {
        createSpanTodo(todo.title);
      });
    });
}

getTodoButton.addEventListener('click', (e) => {
  e.preventDefault();
  getTodo();

  /*   getTodo().then((todos) => {

    createTodoElement(todos);
  }); */
});

/*   createTodoElement(getTodo()); */
createNewTodoButton.addEventListener('click', createNewTodo);
