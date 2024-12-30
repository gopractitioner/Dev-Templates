#Request Queue Handler
A lightweight JavaScript utility for managing concurrent API requests with queue control.↳
To use it:
npm install
node Test.js
(A weather api is used for testing in the example code, replace it as needed)
##Overview

This utility provides a robust solution for handling multiple API requests while maintaining controlled concurrency. It prevents server overload and manages resource consumption by limiting the number of simultaneous requests.

##Key Features

Concurrency Control: Limits the number of simultaneous requests (default: 6)
Queue Management: Automatically queues requests when concurrency limit is reached
Error Handling: Built-in error catching for failed requests
Dynamic Execution: Auto-starts new requests as others complete
Resource Optimization: Prevents browser and server overload

##How It Works

###Queue Initialization:

Creates a queue to store pending requests
Sets a maximum concurrency limit (default: 6)
Maintains a counter for active requests

###Request Processing:

New requests are added to the queue
Automatically dequeues and executes requests if below concurrency limit
Handles request completion and failure scenarios

###Flow Control:

When a request completes, the active counter decreases
Automatically checks for and executes pending requests
Maintains the specified concurrency limit throughout execution

##Use Cases

Large-scale API data fetching
Batch processing of network requests
Rate-limited API interactions
Resource-intensive operations requiring throttling

##Benefits

Performance: Optimizes resource usage and prevents system overload
Reliability: Ensures stable operation with large numbers of requests
Scalability: Easily adjustable concurrency limits
Maintainability: Clean, modular code structure

##Notes

This implementation is particularly useful in scenarios where you need to:↳
Control API request rates
Prevent server overload
Manage browser resource consumption
Handle large numbers of asynchronous operations
