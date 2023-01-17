const resultadoNoSite = document.querySelector('#resultado')

const btnStart = document.querySelector('#start-game')
btnStart.addEventListener('click', start)

function start() {
  // Variáveis
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1

  let tentativas = 0 // começa com zero

  let numeroDoUser

  while (numeroDoUser !== numeroAleatorio) {
    // Pergunta ao usuário um número entre 1 e 10
    numeroDoUser = prompt(`Adivinhe o número de 1 a 10: \n
    Número de tentativas: ${tentativas} \n
    Número gerado: ${numeroAleatorio}`)

    tentativas++ // aumenta o número de tentativas a cada palpite

    if (!numeroDoUser) {
      break
    } // para o código caso o usuário aperte cancelar ou dê OK e não digite nada!

    if (numeroDoUser == numeroAleatorio) {
      alert(` Parábens, você acertou o número com ${tentativas} tentativa(s) `)
      break
    } else {
      alert(
        `Você errou, digite outro número e tente novamente. Até agora você tentou: ${tentativas} vez(es)`
      )
    }
  }
}

// TODO 1 - Ajeitar o style da página
// TODO 2 - Refatorar código do projeto
