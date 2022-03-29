export default function selectPerson(e) {
  let el = document.querySelector("#person");
  let person1 = el.querySelector("#person_1");
  let person2 = el.querySelector("#person_2");
  let person3 = el.querySelector("#person_3");
  chenge1.style.color = "#a19ea8";
  chenge2.style.color = "#a19ea8";
  chenge3.style.color = "#a19ea8";
  if (e.target.id === "chenge1") {
    chenge1.style.color = "rgb(68, 219, 181)";
    person1.style.display = "block";
    person2.style.display = "none";
    person3.style.display = "none";
  } else if (e.target.id === "chenge2") {
    chenge2.style.color = "rgb(68, 219, 181)";
    person2.style.display = "block";
    person1.style.display = "none";
    person3.style.display = "none";
  } else {
    chenge3.style.color = "rgb(68, 219, 181)";
    person3.style.display = "block";
    person2.style.display = "none";
    person1.style.display = "none";
  }
}
