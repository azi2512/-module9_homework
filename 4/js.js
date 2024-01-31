
const text = document.querySelector('#text');
const imgContainer = document.querySelector('#img-container');

function f1() { 
  const width = document.querySelector('#width').value;
  const height = document.querySelector('#height').value;
    if (width > 300 || width < 100 || height > 300 || height < 100 || isNaN(+width) || isNaN(+height)) {
      text.innerHTML = 'одно из чисел вне диапазона от 100 до 300'; 
    } else {
      text.innerHTML = '';
      fetch(`https://dummyimage.com/${width}x${height}/`)
      .then((response) => {
        imgContainer.innerHTML = `<img src=${response.url} alt='img' />`
      })
      .catch(() => { console.log('error') });
      imgContainer.innerHTML = '';
    }
};

const btn = document.querySelector("button"); // кнопка на странице
btn.addEventListener("click", f1);

