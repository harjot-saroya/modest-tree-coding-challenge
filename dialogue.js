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

createNode = function(elementType, text) {
  var node = document.createElement(elementType);
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
  return node;
};
createList = function() {
  var ul = document.createElement("ul");
  displayText.after(ul);
  ul.id = "list";
};
var displayText = document.getElementById("text");
var i = 0;
displayText.innerHTML = sequence[i].display;
displayText.onclick = function() {
  i += 1;
  i = i % 5;
  displayText.innerHTML = sequence[i].display;
  let choices = sequence[i].choices;
  if (choices) {
    choices.forEach(choice => {
      var goTo = choice.goto;
      createList();
      var node = createNode("li", choice.display);
      node.id = goTo;
      var list = document.getElementById("list");
      list.appendChild(node);
      clickable = document.getElementById(goTo);
      clickable.onclick = function() {
        if (!document.getElementById("node" + goTo)) {
          var response = sequence[goTo];
          var node = createNode("li", response.display);
          node.id = "node" + goTo;
          list.append(node);
        }
      };
    });
  }
};
