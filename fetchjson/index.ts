import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Fetch JSON data from the URL via HTTP GET request that returns a Promise

axios.get(url).then(response => {
  const todo = response.data;
    console.log(todo.id, todo.title);
});

/* Basic HTTP GET Example
// Fetch JSON data from the URL via HTTP GET request that returns a Promise
axios.get(url).then(response => {
  console.log(response.data);
});
*/