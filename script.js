const messages = [
  "Ai que não da 16:48",
  "Se você me odeia você fala",
  "Oiiiiiiiiiii",
  "sdds",
  "Ai",
  "Esse é o tipo de coisa",
  "Que quase consigo te ouvir falando kkkkkkk",
  "Tudo bem por ai ?",
  "Espero que sim bb",
  "Ansioso pra sair com vc de novo",
  "No date 2.5 claro claro",
  "E sim eu gostei do PDL",
  "Só foi rápido msm, mas tudo bem :)", 
  "Teremos mais oportunidades",
  "Inclusive",
  "Para onde vamos na próxima ?",
  "Até lá a gente pensa em algo legal né",
  "Mas se já tiver uma ideia, a gente vê",
  "Enfim, beijo ❤️❤️❤️",
  "Com carinho, hélio"
];

let index = 0;
let typingInterval = null;
let isTyping = false;

const popSound = new Audio('sounds/pop.mp3');
popSound.volume = 0.3;

const finalMusic = new Audio('sounds/finalMusic.mp3');
finalMusic.volume = 0.5;

const messageElement = document.getElementById("message");
const button = document.getElementById("nextButton");

function showMessage() {
  const currentMessage = messages[index];
  let i = 0;
  messageElement.textContent = "";
  isTyping = true;

  typingInterval = setInterval(() => {
    if (i < currentMessage.length) {
      messageElement.textContent += currentMessage.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      typingInterval = null;
      isTyping = false;

      if (index === messages.length -1) {
        button.disabled = true;
        finalMusic.play();
      }
    }
  }, 50);
}

button.addEventListener("click", () => {
  popSound.currentTime = 0;
  popSound.play();

  if (isTyping) {
    // Se estiver digitando, termina a mensagem imediatamente
    clearInterval(typingInterval);
    typingInterval = null;
    messageElement.textContent = messages[index];
    isTyping = false;
  } else {
    // Avança para a próxima mensagem e começa a digitar
    if (index < messages.length -1) {
      index++;
      showMessage();
    }
  }
});

window.onload = showMessage;
