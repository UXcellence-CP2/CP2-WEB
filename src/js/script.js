console.log("Script carregado!");

// Array com caminhos das imagens (ajuste os caminhos para suas imagens reais)
let imagens = [
  "src/assets/img/audi horizontal.jpg",
  "src/assets/img/byd horizontal.jpg",
  "src/assets/img/porsche horizontal.jpg",
  "src/assets/img/tesla horizontal.jpg"
];

let index = 0;
const tempo = 3000;

function slideShow() {
  const imgElement = document.getElementById('image');
  if (!imgElement) return;

  imgElement.src = imagens[index];
  index++;
  if (index === imagens.length) {
    index = 0;
  }
  setTimeout(slideShow, tempo);
}

// Iniciar slideshow quando o conteúdo estiver carregado
window.addEventListener('load', slideShow);

// Quiz

const resultadoDiv = document.getElementById('resultado');
const btnResultado = document.getElementById('btnResultado');

btnResultado.addEventListener('click', () => {
  let score = 0;
  let allAnswered = true;

  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      allAnswered = false;
      break;
    }
    score += Number(selected.value);
  }

  if (!allAnswered) {
    alert('Por favor, responda todas as perguntas antes de ver o resultado.');
    return;
  }

  let message = '';
  if (score >= 35) { // Ajuste para somar as notas máximas (10 perguntas * 4)
    message = '🚗 Você está super pronto para ter um carro elétrico!';
  } else if (score >= 20) {
    message = '⚡ Você está no caminho! Um pouco mais de informação e planejamento e estará pronto.';
  } else {
    message = '🤔 Talvez um carro elétrico ainda não seja a melhor opção para você, mas vale a pena considerar no futuro.';
  }

  resultadoDiv.textContent = `Pontuação: ${score} - ${message}`;
});

btnResultado.addEventListener('click', () => {
  let score = 0;
  let allAnswered = true;

  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      allAnswered = false;
      break;
    }
    score += Number(selected.value);
  }

  if (!allAnswered) {
    alert('Por favor, responda todas as perguntas antes de ver o resultado.');
    return;
  }

  let message = '';
  if (score >= 35) {
    message = '🚗 Você está super pronto para ter um carro elétrico!';
  } else if (score >= 20) {
    message = '⚡ Você está no caminho! Um pouco mais de informação e planejamento e estará pronto.';
  } else {
    message = '🤔 Talvez um carro elétrico ainda não seja a melhor opção para você, mas vale a pena considerar no futuro.';
  }

  resultadoDiv.textContent = `Pontuação: ${score} - ${message}`;
});
