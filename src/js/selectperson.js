export default function selectPerson(e) {
  let el = document.querySelector("#person");
  let avatar = el.querySelector("#person-image");
  let text = el.querySelector("#person-text");
  let fullName = el.querySelector("#person-name");
  let person = {
    person1: {
      avatar: "../img/nataly.JPG",
      text: "Это очень крутой сайт. Я впервые так близко оказалась к звездам. Это просто удивительно. А информация про астероиды просто завараживает.",
      fullName: "Борисова Наталья",
    },
    person2: {
      avatar: "../img/ekaterina.jpg",
      text: "Меня попросили проанализировать работу этого сайта. Работа оказалась очень увлекательной. А как шикарно фильтруются даты! Рекомендую.",
      fullName: "Шаламова Екатерина",
    },
    person3: {
      avatar: "../img/grishinsvit.jpg",
      text: "Совершенно обыкновенный сайт, да и вообще HTML это же прошлый век. Рекомендую посмотреть реализацию данного контента на других площадках.",
      fullName: "Сергей Гришин",
    },
  };

  chenge1.style.color = "#a19ea8";
  chenge2.style.color = "#a19ea8";
  chenge3.style.color = "#a19ea8";
  if (e.target.id === "chenge1") {
    chenge1.style.color = "rgb(68, 219, 181)";
    avatar.src = person.person1.avatar;
    text.innerHTML = person.person1.text;
    fullName.innerHTML = person.person1.fullName;
  } else if (e.target.id === "chenge2") {
    chenge2.style.color = "rgb(68, 219, 181)";
    avatar.src = person.person2.avatar;
    text.innerHTML = person.person2.text;
    fullName.innerHTML = person.person2.fullName;
  } else {
    chenge3.style.color = "rgb(68, 219, 181)";
    avatar.src = person.person3.avatar;
    text.innerHTML = person.person3.text;
    fullName.innerHTML = person.person3.fullName;
  }
}
