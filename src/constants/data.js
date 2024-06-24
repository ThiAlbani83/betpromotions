import images from "./images";

const cassinoCardData = [
  {
    id: 1,
    image: images.arraiaSpaceman,
    title: "Arraiá Spaceman",
    description: "São R$80.000 em prêmios, não fique de fora! Vem com a gente.",
    termsTitle: "Arraiá do Spaceman",
    termsUse: `A promoção “Arraiá do Spaceman” (a “promoção”) consiste em quatro (4) torneios de um (1) dia de duração (cada um deles é um “Torneio Diário do Arraiá do Spaceman”) e quatro (4) prêmios diários de um (1) dia de duração (cada um deles é um “Prêmio Diário do Arraiá do Spaceman”), que ocorrerão diariamente entre 21 de junho, às 00h01 GMT-3, e 24 de junho de 2024, às 23h59 GMT-3.
      Para participar, o jogador deve abrir qualquer um dos jogos Crash participantes e se juntar à promoção.
      Para ser elegível para participar de um Torneio Diário do Arraiá do Spaceman ou Prêmios Diários do Arraiá do Spaceman, o jogador deverá fazer suas apostas com dinheiro real sob as seguintes condições:`,
    req: [
      "Todos os giros com a aposta mínima exigida de R$ 0,75 nos jogos participantes serão considerados elegíveis para cada promoção (doravante denominada “aposta qualificada”).",
      "Somente as primeiras quinhentas (500) apostas qualificadas por dia, dentro de cada Torneio Diário do Arraiá do Spaceman (o “limite de apostas qualificadas”), serão consideradas elegíveis. O Limite de apostas qualificadas também será aplicável para os Prêmios Diários do Arraiá do Spaceman. Todas as apostas qualificadas feitas após atingir esse limite não serão contabilizadas para cada Prêmio Diário do Arraiá do Spaceman",
      "Se o valor de aposta mínima não estiver disponível, será arredondada para o próximo valor de aposta mais alto disponível no jogo*.",
      `*Exemplo apenas para fins ilustrativos 
        A aposta qualificada para a Promoção é de R$ 0,75.
        Se R$ 0,75 não estiver disponível no jogo, a próxima aposta maior será considerada qualificada, por exemplo, R$ 1.`,
    ],
  },

  {
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
  },

  {
    id: 3,
    image: images.bonusCassino,
    title: "Cassino em Dobro",
    description: "Ganhe um bônus de 100% no seu depósito de até R$500",
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
];

export default { cassinoCardData, sportsCardData };
