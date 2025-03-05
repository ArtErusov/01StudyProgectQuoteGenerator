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

const buttonNewQuote = document.getElementById('new-quote');
const textQuote = document.getElementById('quote');
const authorQuote = document.getElementById('author');



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
        console.log(data[0].quote);
        console.log(data[0].author);
        
        textQuote.textContent = (data[0].quote);
        authorQuote.textContent = (data[0].author);
    } catch (error) {
        console.error('Error:', error); 
    }
}


buttonNewQuote.addEventListener("click", fetchQuote);

