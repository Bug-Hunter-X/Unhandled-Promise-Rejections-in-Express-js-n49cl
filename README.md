# Unhandled Promise Rejections in Express.js

This repository demonstrates a common error in Express.js applications where asynchronous operations are not handled correctly, leading to unhandled promise rejections.  The client receives no error response when an error happens during an asynchronous operation.

## Bug

The `bug.js` file contains an Express.js application with an asynchronous route handler.  If the asynchronous operation (`someAsyncOperation`) fails, the error is logged to the console but no response is sent back to the client, resulting in a silent failure. 

## Solution

The `bugSolution.js` file shows how to correctly handle the promise rejection using a `catch` block within the route handler and providing appropriate error responses to the client.