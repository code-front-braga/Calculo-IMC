const botaoEnviar = document.querySelector('.botao-enviar');
const containerResultado = document.querySelector('.container-resultado');
const botaoFecharResultado = document.querySelector('.fechar');

botaoEnviar.addEventListener('click', () => {
  abrirJanelas(containerResultado, 'mostrar-box-resultado');

  botaoFecharResultado.addEventListener('click', () => {
    fecharJanelas(containerResultado, 'mostrar-box-resultado');
  });
  resultadoContainer();
});

const botaoInfo = document.querySelector('.botao-info');

botaoInfo.addEventListener('click', () => {
  const containerPrincipal = document.querySelector('.container');
  const containerInformacoes = document.querySelector('.informacoes');
  const botaoFecharInformacoes = document.querySelector('.fechar-info');

  containerPrincipal.style.display = 'none';
  abrirJanelas(containerInformacoes, 'mostrar-box-informacoes');

  botaoFecharInformacoes.addEventListener('click', () => {
    fecharJanelas(containerInformacoes, 'mostrar-box-informacoes');
    containerPrincipal.style.display = 'flex';
  });
});

const resultadoContainer = () => {
  const inputPeso = document.querySelector('#input-peso');
  const inputAltura = document.querySelector('#input-altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (inputPeso.value.length === 0) {
    alert('Digite o seu peso para começar');
    fecharJanelas(containerResultado, 'mostrar-box-resultado');
  } else if (inputAltura.value.length === 0) {
    alert('Ops! Falta digitar somente a sua altura');
    fecharJanelas(containerResultado, 'mostrar-box-resultado');
  } else {
    const h2 = document.querySelector('.resultado');
    h2.innerHTML = `${calculoImc(peso, altura)} kg/m²`;

    classificacaoImc(peso, altura);
  }
};
