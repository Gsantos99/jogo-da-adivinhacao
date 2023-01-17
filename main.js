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
    numeroDoUser = Number(
      prompt(`Adivinhe o número de 1 a 10: \n
    Número de tentativas: ${tentativas}`)
    )

    tentativas++ // aumenta o número de tentativas a cada palpite

    if (numeroDoUser === undefined || numeroDoUser === null) {
      return
    } // para o código caso o usuário aperte cancelar

    if (numeroDoUser === numeroAleatorio) {
      alert(` Parábens, você acertou o número com ${tentativas} `)
      return
    } else {
      alert(
        `Você errou, digite outro número e tente novamente. Até agora você tentou: ${tentativas} vezes`
      )
    }
  }
}