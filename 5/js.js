const text = document.querySelector('#text');
const imgContainer = document.querySelector('#img-container');
const xhr = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function(){
  const imgArr = localStorage.getItem('imgArr');
  if (imgArr) {
    JSON.parse(imgArr).forEach((item) => {
      imgContainer.innerHTML += `<img src=${item.url} alt=${item.title}>`
    });
  }
});

xhr.onload = function() {
  const response = JSON.parse(xhr.response);
    response.forEach((item) => {
      imgContainer.innerHTML += `<img src=${item.url} alt=${item.title}>`
    });
    localStorage.setItem('imgArr', xhr.response)
};

xhr.onerror = function() {
  text.innerHTML = 'Ошибка запроса';
};

function f1() { 
  const numberInput = document.querySelector('#number-input').value;
  const limitInput = document.querySelector('#limit-input').value;
    if ((numberInput < 1 || numberInput > 11 || isNaN(+numberInput)) && (limitInput < 1 || limitInput > 11 || isNaN(+limitInput))) {
      text.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'; 
    } else if (numberInput < 1 || numberInput > 11 || isNaN(+numberInput)) {
      text.innerHTML = 'Номер страницы вне диапазона от 1 до 10'; 
    } else if (limitInput < 1 || limitInput > 11 || isNaN(+limitInput)) {
      text.innerHTML = 'Лимит вне диапазона от 1 до 10'; 
    } else {
      xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_page=${numberInput}&_limit=${limitInput}`, true);
      xhr.send();
      imgContainer.innerHTML = '';
    }
};

const btn = document.querySelector("button"); // кнопка на странице
btn.addEventListener("click", f1);

