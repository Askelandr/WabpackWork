import json from "../json/json.json";
export default function selectPerson(e) {
  let el = document.querySelector("#person");
  let avatar = el.querySelector("#person-image");
  let text = el.querySelector("#person-text");
  let fullName = el.querySelector("#person-name");
  let person = json[0];

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
