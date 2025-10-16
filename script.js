// --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---

// 1. Pegar o botão do HTML
const btnTopo = document.getElementById("btnTopo");

// 2. Adicionar um "ouvinte" para o evento de scroll da janela
window.onscroll = function() {
  mostrarBotaoAoRolar();
};

function mostrarBotaoAoRolar() {
  // Se o usuário rolar mais de 20px para baixo, mostra o botão
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    // Senão, esconde o botão
    btnTopo.style.display = "none";
  }
}

// 3. Adicionar um "ouvinte" para o evento de clique no botão
btnTopo.onclick = function() {
  voltarParaTopo();
};

function voltarParaTopo() {
  // Leva o usuário de volta ao topo da página suavemente
  window.scrollTo({top: 0, behavior: 'smooth'});
}