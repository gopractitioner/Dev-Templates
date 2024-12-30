# Request Queue Handler

A lightweight JavaScript utility for managing concurrent API requests with queue control. <br>
To use it: <br>
npm install <br>
node Test.js <br>
(A weather api is used for testing in the example code, replace it as needed)

## Overview

This utility provides a robust solution for handling multiple API requests while maintaining controlled concurrency. It prevents server overload and manages resource consumption by limiting the number of simultaneous requests.

## Key Features

Concurrency Control: Limits the number of simultaneous requests (default: 6) <br>
Queue Management: Automatically queues requests when concurrency limit is reached <br>
Error Handling: Built-in error catching for failed requests <br>
Dynamic Execution: Auto-starts new requests as others complete <br>
Resource Optimization: Prevents browser and server overload

## How It Works

### Queue Initialization:

Creates a queue to store pending requests <br>
Sets a maximum concurrency limit (default: 6) <br>
Maintains a counter for active requests

### Request Processing:

New requests are added to the queue <br>
Automatically dequeues and executes requests if below concurrency limit <br>
Handles request completion and failure scenarios

### Flow Control:

When a request completes, the active counter decreases <br>
Automatically checks for and executes pending requests <br>
Maintains the specified concurrency limit throughout execution

## Use Cases

Large-scale API data fetching <br>
Batch processing of network requests <br>
Rate-limited API interactions <br>
Resource-intensive operations requiring throttling

## Benefits

Performance: Optimizes resource usage and prevents system overload <br>
Reliability: Ensures stable operation with large numbers of requests <br>
Scalability: Easily adjustable concurrency limits <br>
Maintainability: Clean, modular code structure

## Notes

This implementation is particularly useful in scenarios where you need to: <br>
Control API request rates <br>
Prevent server overload <br>
Manage browser resource consumption <br>
Handle large numbers of asynchronous operations
