// //JSON
//
// const userObject = {
//     name: "Nursultan",
//     age:45
// }
// console.log(JSON.stringify(userObject));
//

// //AJAX -
// const button = document.querySelector(".img")
//
// button.onclick= () => {
//     const request = new XMLHttpRequest() // 1.Первый шаг создание запроса
//     request.open("GET","package.json") //2.указывание метода запроса и пути
//     request.setRequestHeader("Content-type","application/json") // 3.Указывания зоголовка
//     request.send() //Отправка запроса
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         document.querySelector(".name").innerHTML = data.name
//         document.querySelector(".age").innerHTML = data.age
//     }
//
//}
 const characterContainer = document.getElementById('character-container');

    fetch('persons.json')
      .then(response => response.json())
      .then(characters => {
        characters.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');

          const img = document.createElement('img');
          img.src = character.person_photo;
          img.alt = character.name;
          characterCard.appendChild(img);

          const name = document.createElement('h3');
          name.textContent = character.name;
          characterCard.appendChild(name);

          const description = document.createElement('p');
          description.textContent = character.description;
          characterCard.appendChild(description);

          characterContainer.appendChild(characterCard);
        });
      })
      .catch(error => console.error('Ошибка:', error));