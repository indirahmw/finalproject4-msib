const searchButton = document.querySelector('#tombol');
const inputKeyword = document.querySelector('.input-keyword');

searchButton.addEventListener('click', function() {

fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric") 
}