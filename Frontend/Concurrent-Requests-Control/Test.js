import TestData from './TestData.js';
import axios from 'axios';
import requestsControl from './ConcurrentRequestsControl.js';
let cities = TestData;
console.log(cities);
function getWeather(city) {
    const startTime = new Date();
    console.log(`Start requesting ${city} data, time: ${startTime.toLocaleTimeString()}`);

    // Create a Promise that will be resolved after 2 seconds
    const delay = new Promise(resolve => setTimeout(resolve, 2000));

    return axios.get(`https://goweather.herokuapp.com/weather/${city}`)
        .then(response => {
            // Wait for 2 seconds after getting the response
            return delay.then(() => response);
        })
        .then(response => {
            const endTime = new Date();
            const duration = endTime - startTime;
            console.log(`Get ${city} data completed:`, response.data);
            console.log(`End time: ${endTime.toLocaleTimeString()}, Duration: ${duration}ms`);
        })
        .catch(error => {
            const endTime = new Date();
            const duration = endTime - startTime;
            console.error(`Error occurred when getting ${city}'s data:`);
            console.log(`Error occurred time: ${endTime.toLocaleTimeString()}, Duration: ${duration}ms`);
        });
}

function testWithoutConcurrentRequestsControl() {
    console.log('\x1b[34m%s\x1b[0m', 'testWithoutConcurrentRequestsControl');
    cities.forEach(city => {
        getWeather(city);
    });
}

function testWithConcurrentRequestsControl() {
    console.log('\x1b[34m%s\x1b[0m', 'testWithConcurrentRequestsControl');
    const requests = cities.map(city => () => getWeather(city));
    requestsControl(requests);
}

//testWithoutConcurrentRequestsControl()
testWithConcurrentRequestsControl()




