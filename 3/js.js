
const text = document.querySelector('#text');
const imgContainer = document.querySelector('#img-container');

const xhr = new XMLHttpRequest();

xhr.onload = function() {
  const response = JSON.parse(xhr.response);
    response.forEach((item) => {
      imgContainer.innerHTML += `<img src=${item.url} alt=${item.title}>`
    });
};

xhr.onerror = function() {
  text.innerHTML = 'Ошибка запроса';
};

function f1() { 
  const value = document.querySelector('input').value;
    if (value > 10 || value < 1) {
      text.innerHTML = 'число вне диапазона от 1 до 10'; 
    } else {
      text.innerHTML = '';
      xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_limit=${value}`, true);
      xhr.send();
      imgContainer.innerHTML = '';
    }
};

const btn = document.querySelector("button"); // кнопка на странице
btn.addEventListener("click", f1);

