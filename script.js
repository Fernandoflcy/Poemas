const poema = [
  "Eu sei que gostas de mim,",
  "Pensas em mim quase sempre.",
  "Nos momentos mais doces,",
  "Querias sorrir comigo.",
  "",
  "Nos momentos mais difíceis,",
  "Querias chorar comigo,",
  "Lutar contra os obstáculos",
  "Que a vida nos oferece.",
  "",
  "Mas o teu ego me elimina,",
  "Quase sempre.",
  "E mesmo assim,",
  "O teu amor me planta de novo.",
  "",
  "Vivemos nesse vai e vem,",
  "Um ciclo que não se cansa.",
  "Quanto tempo até compreenderes",
  "Que amor não se elimina,",
  "E muito menos se esquece?",
  "",
  "Sou como uma vela para ti:",
  "Me acendes, me apagas.",
  "É chato, te digo a verdade.",
  "Não me afastei de vez,",
  "Porque amar não se elimina,",
  "E nem se esquece.",
  "",
  "E o meu amor por ti",
  "É maior que o meu ego.",
  "",
  "Mas há um limite para o vai e vem,",
  "Um ponto onde a vela não se acende mais.",
  "Onde o ego, tão forte,",
  "Encontra o silêncio do cansaço.",
  "",
  "E então, o que restará?",
  "O amor que plantamos,",
  "Ou as cinzas do que apagamos?",
  "",
  "Talvez um dia,",
  "Quando o ego descansar,",
  "Veremos que o amor",
  "Não precisa ser aceso ou apagado.",
  "",
  "Ele simplesmente é.",
  "Como o ar que respiramos,",
  "Invisível, mas essencial.",
  "Eterno, mesmo quando ignorado.",
  "",
  "Até lá, seguimos neste ciclo,",
  "Entre acender e apagar,",
  "Entre plantar e eliminar.",
  "Mas no fundo, eu sei:",
  "",
  "O amor que nos une",
  "É maior que qualquer ego,",
  "Mais forte que qualquer obstáculo,",
  "E mais verdadeiro que qualquer dúvida.",
  "",
  "E se um dia a vela se apagar para sempre,",
  "Que seja porque aprendemos a amar",
  "Sem medo, sem ego, sem ciclos.",
  "Apenas amor.-Fernando Flcy"
];

const divPoema = document.getElementById('poema');
const btnIniciar = document.getElementById('btn-iniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const musica = document.getElementById('musica');
let velocidade = 3000; // Tempo padrão entre versos (3 segundos)
let index = 0; // Variável global para o índice

btnIniciar.addEventListener('click', () => {
  musica.play(); // Inicia a música
  btnIniciar.style.display = 'none'; // Esconde o botão após iniciar
  recitarPoema(poema);
  divPoema.style.animation = 'subir 60s linear forwards'; // Inicia a animação de subida
});

document.getElementById('btn-lento').addEventListener('click', () => {
  velocidade = 5000; // 5 segundos
});

document.getElementById('btn-normal').addEventListener('click', () => {
  velocidade = 3000; // 3 segundos
});

document.getElementById('btn-rapido').addEventListener('click', () => {
  velocidade = 1000; // 1 segundo
});

btnReiniciar.addEventListener('click', () => {
  divPoema.innerHTML = ''; // Limpa o poema
  index = 0; // Reinicia o índice
  btnReiniciar.style.display = 'none';
  btnIniciar.style.display = 'block';
  divPoema.style.animation = 'none'; // Reinicia a animação
  void divPoema.offsetWidth; // Refluxo para reiniciar a animação
  divPoema.style.animation = 'subir 3s linear forwards'; // Reinicia a animação de subida
});

function recitarPoema(poema) {
  function exibirProximoVerso() {
    if (index < poema.length) {
      const verso = poema[index];
      if (verso.trim() === "") {
        divPoema.innerHTML += "<br>"; // Adiciona uma linha em branco
      } else {
        divPoema.innerHTML += `<p class="verso">${verso}</p>`;
        recitarVerso(verso); // Recita o verso usando a Web Speech API
      }
      index++;
      setTimeout(exibirProximoVerso, velocidade); // Usa a velocidade selecionada
    } else {
      btnReiniciar.style.display = 'block'; // Mostra o botão de reiniciar
    }
  }

  exibirProximoVerso();
}

function recitarVerso(verso) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(verso);
  utterance.lang = 'pt-PT'; // Define o idioma para português
  utterance.rate = 1.1; // Velocidade da fala
  synth.speak(utterance);
}

const url = encodeURIComponent(window.location.href);
const titulo = encodeURIComponent("Vela e Ego - Poema Interativo");

document.getElementById('btn-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
document.getElementById('btn-twitter').href = `https://twitter.com/intent/tweet?text=${titulo}&url=${url}`;
