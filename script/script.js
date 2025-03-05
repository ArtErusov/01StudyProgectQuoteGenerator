import { API_KEY } from './config.js';
// Работающий способ сделать запрос
// function fetchQuote() {
//     fetch('https://api.api-ninjas.com/v1/quotes', {
//         method: 'GET',
//         headers: {
//             'X-Api-Key': API_KEY,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }


async function fetchQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.error('Error:', error); 
    }
}

fetchQuote();
