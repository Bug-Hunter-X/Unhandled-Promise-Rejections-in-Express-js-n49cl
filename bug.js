const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result); // Sending the response here might be too late if an error occurs later
  }).catch(error => {
    console.error(error); // This logs the error, but the client gets no response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));