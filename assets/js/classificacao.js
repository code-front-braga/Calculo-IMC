const classificacaoImc = (peso, altura) => {
  const classificacao = [
    'Abaixo do peso',
    'com o Peso Normal',
    'com Sobrepeso',
    'com Obesidade Grau I',
    'com Obesidade Grau II',
    'com Obesidade Mórbida',
  ];
  const h3 = document.querySelector('.classificacao');
  const imc = calculoImc(peso, altura);

  const ulDicas = document.querySelector('.dicas');
  const img = document.querySelector('.ilustracao');

  if (imc >= 39.9) {
    h3.innerHTML = `Você está ${classificacao[5]};`;
    ulDicas.innerHTML = `
      <li>Consulte um profissional de saúde: <br>É importante consultar um médico ou nutricionista <br>para avaliar sua condição e determinar o melhor plano de tratamento para você</li>
      <li>Mantenha um diário alimentar: Manter um diário alimentar pode ajudá-lo <br> a monitorar sua ingestão de alimentos e identificar padrões alimentares <br>que possam estar contribuindo para o ganho de peso</li>
      <li>Faça escolhas alimentares saudáveis: Escolha alimentos ricos <br>em nutrientes, como frutas, legumes, grãos integrais e proteínas magras,<br> e evite alimentos processados e ricos em açúcar e gordura</li>
      <li>Pratique atividade física regularmente: A atividade física regular<br> pode ajudar a queimar calorias e <br>melhorar a saúde cardiovascular e metabólica</li>
      <li>Procure apoio: A obesidade mórbida pode ser uma condição desafiadora <br>e pode ser útil procurar apoio <br>de amigos, familiares ou grupos de apoio</li>    
      `;
    img.src = './assets/img/grau3.jpg';
  } else if (imc >= 34.9) {
    h3.innerHTML = `Você está ${classificacao[4]};`;
    ulDicas.innerHTML = `Aqui vai algumas dicas:
      <li>Consulte um profissional de saúde: Marque uma consulta com um<br> endocrinologista ou clínico geral. <br>Eles podem confirmar o diagnóstico e orientar o tratamento adequado</li>
      <li>Reduza o consumo de alimentos ricos em gordura e açúcar</li>
      <li>Aumente a ingestão de frutas, vegetais e alimentos integrais</li>
      <li>Controle as porções e evite excessos</li>
      <li>Escolha uma atividade que você goste, como caminhada, natação ou dança</li>
      <li>Comece devagar e aumente gradualmente a intensidade</li>
      <li>Anote suas medidas semanalmente</li>
      <li>Tire fotos para acompanhar visualmente as mudanças</li>
      <li>Consulte um nutricionista para ajustar sua dieta de acordo <br>com suas necessidades específicas</li>
      <li>Alguns medicamentos podem ser úteis, mas devem ser <br>prescritos por um profissional</li>
      `;
    img.src = './assets/img/grau2.jpg';
  } else if (imc >= 29.9) {
    h3.innerHTML = `Você está ${classificacao[3]};`;
    ulDicas.innerHTML = `
      Aqui vai algumas dicas:
      <li>Consulte um profissional de saúde: Marque uma consulta com um endocrinologista ou clínico geral. <br>Eles podem confirmar o diagnóstico e orientar o tratamento adequado</li>
      <li>Reduza o consumo de alimentos ricos em gordura e açúcar</li>
      <li>Aumente a ingestão de frutas, vegetais e alimentos integrais</li>
      <li>Controle as porções e evite excessos</li>
      <li>Escolha uma atividade que você goste, como caminhada, natação ou dança</li>
      <li>Comece devagar e aumente gradualmente a intensidade</li>
      <li>Anote suas medidas semanalmente</li>
      <li>Tire fotos para acompanhar visualmente as mudanças</li>
      <li>Consulte um nutricionista para ajustar sua dieta de acordo com suas necessidades específicas</li>
      <li>Alguns medicamentos podem ser úteis, mas devem ser prescritos por um profissional</li>
      `;
    img.src = './assets/img/grau1.jpg';
  } else if (imc >= 24.9) {
    h3.innerHTML = `Você está ${classificacao[2]};`;
    ulDicas.innerHTML = `
      <li>Faça dos alimentos in natura ou minimamente processados a base da sua alimentação. <br>Opte por frutas, verduras, legumes, leite, iogurte natural, feijões, cereais, ovos e carnes resfriadas ou congeladas</li>
      <li>Controle o consumo de alimentos de origem animal, escolhendo opções magras e evitando excessos</li>
      <li>Escolha uma atividade que você goste, como caminhada, natação ou dança</li>
      <li>Comece devagar e aumente gradualmente a intensidade</li>
      <li>Anote suas medidas semanalmente</li>
      <li>Tire fotos para acompanhar visualmente as mudanças</li>
      <li>Consulte um nutricionista para ajustar sua dieta de acordo com suas necessidades específicas</li>
      <li>Alguns medicamentos podem ser úteis, mas devem ser prescritos por um profissional</li>
      `;
    img.src = './assets/img/sobrepeso.jpg';
  } else if (imc >= 18.5) {
    h3.innerHTML = `Você está ${classificacao[1]};`;
    ulDicas.innerHTML = `Aqui vai algumas dicas para manter seu peso normal:
      <li>Perder peso com saúde</li>
      <li>Apostar em alimentos que queimam a gordura</li>
      <li>Comer alimentos que desincham</li>
      <li>Aumentar a saciedade</li>
      <li>Consumir alimentos que aceleram metabolismo</li>
      <li>Investir em um prato equilibrado e variado</li>
      <li>Praticar exercícios que queimam gordura</li>
      <li>Diminuir o consumo de sal e açúcar</li>  
      `;
    img.src = './assets/img/8440459.jpg';
  } else if (imc < 18.5) {
    h3.innerHTML = `Você está ${classificacao[0]};`;
    ulDicas.innerHTML = `
      <li>Consulte um profissional de saúde: Marque uma consulta com um nutricionista ou médico. <br>Eles podem avaliar sua situação individualmente e orientar o tratamento adequado</li>
      <li>Proteínas: Inclua carnes magras (como frango e peixe), ovos, leite e queijos brancos</li>
      <li>Gorduras saudáveis: Amendoim, nozes, azeite de oliva e abacate são boas opções</li>
      <li>Carboidratos: Opte por cereais, arroz, batata e pães integrais</li>
      <li>Coma mais vezes ao longo do dia para aumentar a ingestão calóric</li>
      <li>Adicione lanches saudáveis entre as refeições principais</li>
      <li>Se necessário, consulte um profissional para escolher suplementos adequados, <br>como shakes de proteína ou suplementos vitamínicos</li>
      <li>Exercícios de resistência, como musculação, podem ajudar a ganhar massa muscular</li>
      `;
    img.src = './assets/img/abaixopeso.png';
  }
};
