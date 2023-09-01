let score=0;
let idx=0;
const questions = [
    {
      "question": "Which popular video game features a battle royale mode called 'Warzone'?",
      "options": [
        "Fortnite",
        "Apex Legends",
        "Call of Duty: Warzone",
        "PlayerUnknown's Battlegrounds"
      ],
      "correctAnswer": "Call of Duty: Warzone"
    },
    {
      "question": "What is the protagonist's name in the 'Max Payne' game series?",
      "options": [
        "John Wick",
        "Max Payne",
        "Niko Bellic",
        "Trevor Philips"
      ],
      "correctAnswer": "Max Payne"
    },
    {
      "question": "Which game is known for its competitive mode 'Competitive: Defusal'?",
      "options": [
        "Valorant",
        "Call of Duty: Modern Warfare",
        "Counter-Strike: Global Offensive (CS:GO)",
        "Rainbow Six Siege"
      ],
      "correctAnswer": "Counter-Strike: Global Offensive (CS:GO)"
    },
    {
      "question": "In which fictional city is the 'Grand Theft Auto V (GTA)' game primarily set?",
      "options": [
        "Liberty City",
        "Vice City",
        "San Andreas",
        "Los Santos"
      ],
      "correctAnswer": "Los Santos"
    },
    {
      "question": "Who won the Academy Award for Best Director for the movie 'The Shape of Water'?",
      "options": [
        "Steven Spielberg",
        "Christopher Nolan",
        "Guillermo del Toro",
        "Quentin Tarantino"
      ],
      "correctAnswer": "Guillermo del Toro"
    },
    {
      "question": "What 1994 film is known for popularizing the concept of 'bullet time'?",
      "options": [
        "The Matrix",
        "Pulp Fiction",
        "Die Hard",
        "Jurassic Park"
      ],
      "correctAnswer": "The Matrix"
    }
  ];
  
  
const nxt=document.getElementById('next')
const play=document.getElementById('again')

function startQuiz(){ 
nxt.classList.add('btnhide')
play
score=0;
idx=0;
updateQuestion(0)
}
// ... Your HTML and variable declarations ...

document.addEventListener('DOMContentLoaded', function () {
    startQuiz();
  }
);
  
  nxt.addEventListener('click', () => {
    next.classList.toggle('btnhide')
    idx++;
    const options = document.getElementById('ask'); // Change 'options' to 'ask'
    options.innerHTML = "";
    if (idx >= 6) {
      play.classList.toggle('btnhide');
      const ask = document.getElementById('ask');
      ask.textContent = `You scored ${score}/6 marks mothafucka`; 
    }
    updateQuestion(idx);
  }); 
  play.addEventListener('click',()=>{
    play.classList.toggle('btnhide')
    startQuiz();
  })
  
  // ... Rest of your code ...
  
  function updateQuestion(id) {
    const question = document.getElementById('ask'); // Correct typo here
    question.textContent = questions[id].question;
    questions[id].options.forEach((optionText, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add('option');
      optionElement.textContent = optionText;
      optionElement.addEventListener('click', () => {
        correctAnswer(index);
      });
      ask.appendChild(optionElement); // Change 'options' to 'ask'
    });
  }
  
  function correctAnswer(selectedIndex) {

    //show next
    nxt.classList.toggle('btnhide');



    const quest = questions[idx];
    const optionDiv = document.querySelectorAll('.option'); // Select by class
    optionDiv.forEach((opt, index) => {
      opt.classList.add('selected'); // Remove 'selected' class from all options
      if (index === quest.options.indexOf(quest.correctAnswer)) {
        opt.classList.add('correct'); 
      }
      if (index === selectedIndex) {
        if (index === quest.options.indexOf(quest.correctAnswer)) {
          score++;
        } else {

          opt.classList.add('wrong'); // Add 'wrong' class if the selected answer is wrong
        }
      }
    });
  }
  