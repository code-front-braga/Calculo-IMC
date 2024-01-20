const abrirJanelas = (janela, classe) => {
  return janela.classList.add(classe);
};

const fecharJanelas = (janela, classe) => {
  return janela.classList.remove(classe);
};
