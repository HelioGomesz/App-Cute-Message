// Lista de mensagens que serão exibidas na tela, uma de cada vez
const messages = [
  "Oii tudo bem ? ;)",
  // Adicione mais mensagens aqui, cada linha será mostrada na sequência
];

// Variáveis de controle
let index = 0;             // Indica qual mensagem do array está sendo exibida
let typingInterval = null; // Guarda o intervalo do efeito de digitação
let isTyping = false;      // Indica se a mensagem ainda está sendo "digitada"

// Sons utilizados
const popSound = new Audio('sounds/pop.mp3'); // Som de clique do botão
popSound.volume = 0.3; // Define volume do som do clique (0 a 1)

const finalMusic = new Audio('sounds/finalMusic.mp3'); // Música final
finalMusic.volume = 0.5; // Define volume da música

// Referências aos elementos HTML
const messageElement = document.getElementById("message"); // Onde o texto aparece
const button = document.getElementById("nextButton");      // Botão de avançar

// Função que mostra a mensagem atual com efeito de digitação
function showMessage() {
  const currentMessage = messages[index]; // Pega a mensagem atual
  let i = 0;                              // Índice de cada caractere
  messageElement.textContent = "";        // Limpa o texto da tela
  isTyping = true;                        // Marca que está "digitando"

  // Cria intervalo para adicionar uma letra a cada 50ms
  typingInterval = setInterval(() => {
    if (i < currentMessage.length) {
      // Adiciona o próximo caractere na tela
      messageElement.textContent += currentMessage.charAt(i);
      i++;
    } else {
      // Se terminou de digitar, limpa o intervalo
      clearInterval(typingInterval);
      typingInterval = null;
      isTyping = false;

      // Caso seja a última mensagem do array
      if (index === messages.length - 1) {
        button.disabled = true;  // Desativa o botão
        finalMusic.play();       // Toca música final
      }
    }
  }, 50); // Intervalo de 50ms entre cada caractere
}

// Evento de clique no botão "Próximo"
button.addEventListener("click", () => {
  popSound.currentTime = 0; // Reseta o som para tocar do início
  popSound.play();          // Reproduz o som de clique

  if (isTyping) {
    // Se a mensagem ainda está sendo digitada, mostra ela inteira de uma vez
    clearInterval(typingInterval);
    typingInterval = null;
    messageElement.textContent = messages[index]; // Exibe texto completo
    isTyping = false;
  } else {
    // Se já terminou de digitar, avança para a próxima mensagem
    if (index < messages.length - 1) {
      index++;        // Vai para a próxima mensagem
      showMessage();  // Exibe a mensagem com efeito de digitação
    }
  }
});

// Quando a página carregar, exibe a primeira mensagem automaticamente
window.onload = showMessage;

