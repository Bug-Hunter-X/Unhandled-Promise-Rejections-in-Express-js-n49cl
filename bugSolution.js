const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error'); // Proper error handling
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

//Example Async Function
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}