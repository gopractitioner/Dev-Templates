const requestsControl = (requests) => {
    requests = requests || [];

    const requestQeuue = (concurrency) => {
        let queue = [];
        let currentRequestsNumber = 0;
        concurrency = concurrency || 6;

        const dequeue = () => {
            while (currentRequestsNumber < concurrency && queue.length > 0) {
                let firstRequest = queue.shift();
                currentRequestsNumber++;
                firstRequest()
                    .then(() => {
                        // console how many requests are being processed
                        console.log(`${currentRequestsNumber} requests are being processed`);
                        /*
                        Add the service logic for processing the request here
                        */
                    })
                    .catch(() => {
                        // console the error and the name of the failed request
                        console.error('request failed', firstRequest.name);
                        /*
                        Add the logic for handling the error here
                        */
                    })
                    .finally(() => {
                        currentRequestsNumber--;
                        dequeue();
                    });
            }

        }

        return (requestPromise) => {
            queue.push(requestPromise);
            dequeue();
        }
    }

    let enQueue = requestQeuue(6); // set the limit of concurrent requests to 6

    for (let i = 0; i < requests.length; i++) {
        enQueue(requests[i]);
    }
}

export default requestsControl;