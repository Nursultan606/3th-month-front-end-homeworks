
    const request = new XMLHttpRequest() // 1.Первый шаг создание запроса
    request.open("GET", "persons.json") //2.указывание метода запроса и пути
    request.setRequestHeader("Content-type", "application/json") // 3.Указывания зоголовка
    request.send() //Отправка запроса
    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".age").innerHTML = data.age
        document.querySelector(".city").innerHTML = data.city
        document.querySelector(".bio").innerHTML = data.bio

    }

console.log(request)
