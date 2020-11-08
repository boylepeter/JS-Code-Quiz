
var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");


var people = [{ name: "Bob", }];
var currentId = 0;

function openPage() { 
 localStorage.getItem("peopleListEl")
}

function openPage()

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " Highscore: " + localStorage.getItem("score");
  people.push({ name: name });
  peopleListEl.append(li);
  localStorage.setItem("highscoreList,", peopleListEl)
}


addBtn.addEventListener("click", addPersonToList);

