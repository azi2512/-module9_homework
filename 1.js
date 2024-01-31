// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение DOM-нод
const student = xmlDOM.querySelectorAll("student");

/* Этап 3. Запись данных в результирующий массив */
const result = [];

student.forEach((person) => {
  result.push({
    name: person.querySelector("first").textContent + ' ' + person.querySelector("second").textContent,
    age: +person.querySelector("age").textContent,
    prof: person.querySelector("prof").textContent,
    lang: person.querySelector("name").getAttribute("lang"),
  });
});

console.log(result);

