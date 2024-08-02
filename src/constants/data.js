import images from "./images";

const cassinoCardData = [
  {
    id: 1,
    image: images.sorteio,
    title: "Sorteio Betfive",
    description:
      "Participe do nosso sorteio e a uma bola autografada por um dos maiores craques do Brasil.",
    termsTitle: " Regras para participar",
    termsUse: ` Para participar, siga os passos simples abaixo:`,
    req: [
      "Estar seguindo a Bet Five e Léo Moura.",
      "Marcar três amigos.",
      "Marcar três amigos.",
      "E pronto, você já estará automaticamente participando dessa oportunidade inédita. Envia pra um amigo que ama futebol e gostaria de receber esse presente em casa!",
    ],
  },
/*   {
    id: 2,
    image: images.bonusAviatrix,
    title: "Bonus Aviatrix",
    description: "Cadastre-se e ganhe 20 rodadas grátis.",
    termsTitle: "Como ganhar rodadas grátis",
    termsUse: `Ao realizar o cadastro, será concedido 20 Rodadas Grátis no jogo Aviatrix por CPF`,
    req: [
      "O usuário deverá acessar o jogo Aviatrix, ir na sessão recompensas e resgatar o benefício.",
      "O valor máximo de aposta é de R$ 0,50.",
      "Ao final das 20 rodadas, o usuário deverá realizar um RollOver de 35x o valor do prêmio acumulado para resgatar seu saldo.",
      "O prazo para conclusão da promoção é de 7 dias. Após este prazo o benefício será removido da conta",
    ],
  }, */

  {
    id: 3,
    image: images.bonusCassino,
    title: "Cassino em Dobro",
    description: "Ganhe um bônus de 100% no seu depósito de até R$500.",
    termsTitle: "Ativação do Bônus de Cassino",
    termsUse:
      "Ao realizar o primeiro depósito, os usuários podem ativar o bônus de boas-vindas de cassino, recebendo um crédito adicional de até 100%.",
    req: [
      "O saldo de bônus só será utilizado após o saldo real ser totalmente consumido.",
      "O saldo bônus só poderá ser utilizado em jogos selecionados: [Sugar Rush, Sweet Bonanza, Mines, Roleta Brasileira e Gates of Olympus].",
      "Para sacar o saldo acumulado com o bônus, é necessário apostar o valor recebido 50 vezes (rollover) nos jogos de cassino selecionados.",
      "Os usuários têm 30 dias a partir da data de recebimento do bônus para cumprir os requisitos de apostas.",
      "O valor mínimo de aposta é de R$ 1,00 e máximo de R$ 10,00.",
      "Após completar o rollover, o máximo transferível para saldo real é de R$ 200,00. Qualquer valor excedente será removido.",
      "Ao solicitar o saque do saldo, o valor do bônus concedido será removido da conta.",
    ],
  },

  {
    id: 4,
    image: images.cassinoCashback,
    title: "Cassino com Cashback",
    description: "O fim de semana todo com cashback de 25%.",
    termsTitle: "Cashback Betfive",
    termsUse:
      "Todo usuário que realizar apostas em jogos de cassino de sexta-feira (00:00h) até domingo (23:59hs) está participando, não é necessário nenhum cadastro.",
    req: [
      "Será creditado um valor de 25% sobre perdas reais*, limitado a R$ 500,00.",
      "Para reivindicar o prêmio, é necessário contatar o suporte via chat ao vivo até a sexta-feira seguinte.",
    ],
  },
];

const sportsCardData = [
  {
    id: 5,
    image: images.sportsbonus,
    title: "Bônus em Esportes",
    description: "Ganhe um bônus de 100% até R$500 em esportes.",
    termsTitle: "Boas vindas de Esporte",
    termsUse:
      "Ao realizar o primeiro depósito, os usuários podem ativar o bônus de boas-vindas esportivo, recebendo um crédito adicional de 100% até R$ 500,00",
    req: [
      "Para sacar o saldo acumulado com o bônus, é necessário apostar o valor recebido 25 vezes (rollover) em jogos esportivos, excluindo jogos de Cassino.",
      "Os usuários têm 30 dias a partir da data de recebimento do bônus para cumprir os requisitos de",
      "As apostas devem ter uma odd mínima de 1.80x.",
      "Máximo de 15 eventos em uma aposta múltipla, com limite de R$ 500,00 para apostas simples e múltiplas.",
      "O valor mínimo de aposta é de R$ 1,00 e máximo de R$ 25,00, com retorno máximo limitado a R$ 500,00.",
      "Para utilizar o saldo bônus, é necessário primeiro utilizar o saldo real.",
      "Após completar o rollover, o máximo transferível para saldo real é de R$ 200,00. Qualquer valor excedente será removido.",
      "Ao solicitar o saque do saldo, o valor do bônus concedido será removido da conta.",
    ],
  },
  {
    id: 6,
    image: images.bancabonus,
    title: "Oferta Especial",
    description: "Ganhe R$5 de banca mais 100% de bônus em esportes.",
    termsTitle: "Ativação do Bônus de Cadastro",
    termsUse: "Ganhe R$5 de banca mais 100% de bônus em esportes.",
    req: [
      "O bônus de cadastro será concedido uma única vez por CPF cadastrado, creditando R$ 5,00 após o cadastro.",
      "O valor só pode ser utilizado para apostas esportivas, exceto em eventos especiais como Super Odds e Criar Aposta.",
      "A aposta mínima permitida é de R$ 1,00 e máxima de R$ 10,00.",
      "O valor possui rollover de 50 vezes.",
      "A odd mínima aceita é de 2.0.",
      "O bônus é válido por 7 dias a partir da data de cadastro. Após este prazo, o saldo bônus remanescente será removido.",
      "Ao final do rollover, o valor máximo convertível para saldo real é de R$ 10,00.",
    ],
  },
];

export default { cassinoCardData, sportsCardData };
