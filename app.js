// Função para atualizar o contador de metas em andamento
function atualizarContador() {
    const metas = document.querySelectorAll('#metas li');
    const contador = document.getElementById('contador');
    contador.innerText = `Metas em andamento: ${metas.length}`;
  }
  
  // Função para adicionar uma nova meta à lista
  function adicionarMeta() {
    const input = document.getElementById('input-meta');
    const lista = document.getElementById('metas');
    const novaMeta = document.createElement('li');
    novaMeta.classList.add('list');
    novaMeta.innerText = input.value;
    lista.appendChild(novaMeta);
    input.value = '';
    atualizarContador();
  }
  
  // Função para alternar entre temas claro e escuro
  function alternarTema() {
    const body = document.body;
    const botao = document.querySelector('.botão');
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      botao.innerText = 'Light';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      botao.innerText = 'Dark';
    }
  }
  
  // Adiciona um evento de clique ao botão de alternância de tema
  document.querySelector('.botão').addEventListener('click', alternarTema);
  
  // Adiciona um evento de clique a cada meta na lista
  document.querySelectorAll('#metas li').forEach(meta => {
    meta.addEventListener('click', () => {
      meta.classList.toggle('selecionada');
    });
  });
  
  // Adiciona um evento de clique ao botão de adição de meta
  document.getElementById('botao-adicionar').addEventListener('click', adicionarMeta);
   
  // Chama a função para atualizar o contador de metas em andamento
  atualizarContador();
  
  // Função para alternar entre temas claro e escuro
function alternarTema() {
  const body = document.body;
  const botao = document.querySelector('.botão');
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    botao.innerText = 'Light';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    botao.innerText = 'Dark';
  }
}

// Adiciona um evento de clique ao botão de alternância de tema
document.querySelector('.botão').addEventListener('click', alternarTema);
