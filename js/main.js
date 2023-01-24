/*
1º abrir o modal ao clicar no botão 'veja o trailer';
  - pegar o elemento que representa o botão
  - identificar quando o user clicar no botão
  - pegar o elemento da modal
  - abrir o modal na tela

2º ao clicar no 'x' dentro do modal, deve fechar o modal;
  - pegar o elemento que representa o x
  - identificar quando o user clicar no x
  - pegar o elemento da modal
  - fechar o modal na tela
*/

const btnTrailer = document.querySelector('.botao-trailer')
const btnFecharModal = document.querySelector('.fechar-modal')
const modal = document.querySelector('.modal')
const iframeTrailer = document.getElementById('video')
const urlVideo = iframeTrailer.src

function alternarModal() {
  modal.classList.toggle('aberto')
}

btnTrailer.addEventListener('click', () => {
  alternarModal()
  iframeTrailer.setAttribute("src", urlVideo)
})

btnFecharModal.addEventListener('click', () => {
  alternarModal()
  iframeTrailer.setAttribute("src", "")
})