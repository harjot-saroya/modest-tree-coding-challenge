var sequence = [
  {
    id: 0,
    display: "Hello Joe",
    speaker: "jane"
  },
  {
    id: 1,
    display: "Good morning Jane, How are you doing today?",
    speaker: "joe"
  },
  {
    id: 2,
    display: "Well I guess I'm...",
    speaker: "jane",
    choices: [
      {
        display: "Having a terrible day",
        goto: 3
      },
      {
        display: "Having a wonderful day",
        goto: 4
      }
    ]
  },
  {
    id: 3,
    display: "Sorry to hear that",
    speaker: "joe",
    mood: "sad",
    goto: 5
  },
  {
    id: 4,
    display: "Great news! Hope it stays that way",
    mood: "happy",
    speaker: "joe"
  },
  {
    id: 5,
    display: "Goodbye",
    speaker: "jane"
  }
];
var count = 0;
var len = sequence.length;
var displaytext = document.getElementById("text");
displaytext.innerHTML = sequence[count].display;

function createNode(val) {
  var elem = document.createElement("li");
  elem.id = val;
  var node = document.createTextNode(val);
  elem.appendChild(node);
  return elem;
}
function text(node) {
  var elem = document.createElement("li");
  var node = document.createTextNode(node);
  var fin = elem.appendChild(node);
  return fin;
}

displaytext.onclick = function() {
  var elem = document.getElementsByClassName("joe");
  var elem2 = document.getElementsByClassName("jane");
  console.log(sequence[count].speaker);
  if (sequence[count].speaker === "joe") {
    elem[0].classList.add("bounce-1");
    elem2[0].classList.remove("bounce-1");
  } else if (sequence[count].speaker === "jane") {
    elem2[0].classList.add("bounce-1");
    elem[0].classList.remove("bounce-1");
  }
  if (sequence[count].id == 2) {
    // console.log(sequence.id);
    var list = document.createElement("ul");
    let goTo = [];
    for (let step = 0; step < sequence[count].choices.length; step++) {
      goTo.push(sequence[count].choices[step].goto);

      var node = createNode(sequence[count].choices[step].display);
      //console.log(node);

      list.appendChild(node);
    }
    displaytext.innerHTML = list.innerHTML;

    document
      .getElementById("Having a terrible day")
      .addEventListener("click", function() {
        count++;
      });
    document
      .getElementById("Having a wonderful day")
      .addEventListener("click", function() {
        count += 2;
      });
  } else if (count == 3) {
    var node = text(sequence[count].display);
    displaytext.innerHTML = node.data;
    count = 5;
  } else {
    var node = text(sequence[count].display);
    displaytext.innerHTML = node.data;
    count++;
  }
};

// console.log(sequence[count].speaker);
// if ((sequence[count].speaker = "joe")) {
//   var elem = document.getElementsByClassName("joe");
//   var elem2 = document.getElementsByClassName("jane");
//   console.log(elem);
//   elem.className = "bounce-1";
//   elem2.className = "jane";
// } else {
//   console.log("gank");
//   var elem = document.getElementsByClassName("jane");
//   var elem2 = document.getElementsByClassName("bounce-1");

//   elem.className = "bounce-1";
//   elem2.className = "gank";
// }
