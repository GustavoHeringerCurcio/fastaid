const emergencias = [
  {
    id: "rcp",
    nome: "RCP",
    titulo: "RCP – Reanimação Cardiopulmonar",
    icone: "/images/rcp.png",
    categoria: "Respiração",
    passos: [
      {
        imagem: "/images/rcp1.png",
        alt: "Verificar consciência",
        titulo: "1. Verifique a consciência",
        texto: 'Bata levemente nos ombros da pessoa e pergunte: "Você está bem?".',
      },
      {
        imagem: "/images/rcp2.png",
        alt: "Chamar ajuda",
        titulo: "2. Acione ajuda imediatamente",
        texto:
          "Ligue 192 ou peça para alguém ligar. Quanto mais rápido, maiores as chances de sobrevivência.",
      },
      {
        imagem: "/images/rcp3.png",
        alt: "Abrir vias aéreas",
        titulo:
          "3. Abra as vias aéreas e verifique se a pessoa está respirando",
        texto:
          "Incline a cabeça para trás e levante o queixo delicadamente. Observe o peito, aproxime o ouvido e sinta a respiração por no máximo 10 segundos.",
      },
      {
        imagem: "/images/rcp4.png",
        alt: "Começar compressões",
        titulo: "4. Inicie as compressões",
        texto:
          "Coloque as mãos no centro do peito e faça <strong>100–120 compressões por minuto</strong>, afundando cerca de 5 cm.",
      },
      {
        imagem: "/images/rcp5.png",
        alt: "Alternar com respirações",
        titulo: "5. Relação 30:2",
        texto:
          "Faça 30 compressões e 2 ventilações. Repita sem parar até a vítima voltar ou a ajuda chegar.",
      },
      {
        imagem: "/images/rcp6.png",
        alt: "Uso de DEA",
        titulo: "6. Use o DEA se houver",
        texto:
          "Siga as instruções do aparelho. Ele dirá quando aplicar o choque.",
      },
    ],
  },

  {
    id: "convulsao",
    nome: "Convulsão",
    titulo: "Convulsão",
    icone: "/images/convulsao.png",
    categoria: "Outros",
    passos: [
      {
        imagem: "/images/convulsao1.png",
        alt: "",
        titulo: "1. Mantenha a calma",
        texto:
          "Fique tranquilo e observe a situação. A maioria das convulsões dura poucos minutos.",
      },
      {
        imagem: "/images/convulsao2.png",
        alt: "",
        titulo: "2. Proteja a pessoa",
        texto:
          "Afaste objetos ao redor para evitar que a pessoa se machuque.",
      },
      {
        imagem: "/images/convulsao3.png",
        alt: "",
        titulo: "3. Apoie a cabeça",
        texto:
          "Coloque algo macio sob a cabeça da pessoa para evitar impactos.",
      },
      {
        imagem: "/images/convulsao4.png",
        alt: "",
        titulo: "4. Não segure a pessoa",
        texto:
          "Não tente impedir os movimentos. Isso pode causar lesões.",
      },
      {
        imagem: "/images/convulsao5.png",
        alt: "",
        titulo: "5. Não coloque nada na boca",
        texto:
          "Nunca coloque objetos ou dedos na boca da pessoa.",
      },
      {
        imagem: "/images/convulsao6.png",
        alt: "",
        titulo: "6. Após a convulsão",
        texto:
          "Coloque a pessoa de lado (posição lateral) e verifique a respiração.",
      },
      {
        imagem: "/images/convulsao7.png",
        alt: "",
        titulo: "7. Chame ajuda se necessário",
        texto:
          "Ligue 192 se a convulsão durar mais de 5 minutos ou se for a primeira vez.",
      },
    ],
  },

  {
    id: "queimaduras",
    nome: "Queimaduras",
    icone: "/images/queimadura.png",
    categoria: "Ferimentos",
    passos: [],
  },

  {
    id: "traumas",
    nome: "Traumas",
    icone: "/images/traumas.png",
    categoria: "Traumas",
    passos: [],
  },

  {
    id: "cortes",
    nome: "Cortes e Sangramentos",
    icone: "/images/cortesesangramentos.png",
    categoria: "Ferimentos",
    passos: [],
  },

  {
    id: "choque",
    nome: "Choque Elétrico",
    icone: "/images/choqueeletrico.png",
    categoria: "Outros",
    passos: [],
  },

  {
    id: "afogamento",
    nome: "Afogamento",
    icone: "/images/afogamento.png",
    categoria: "Respiração",
    passos: [],
  },

  {
    id: "desmaio",
    nome: "Desmaio",
    icone: "/images/desmaio.png",
    categoria: "Outros",
    passos: [],
  },
];


function listar() {
  return emergencias.map((e) => ({
    nome: e.nome,
    icone: e.icone,
    categoria: e.categoria,
    rota: e.passos.length > 0 ? `/${e.id}` : "#",
  }));
}


function obterPorSlug(slug) {
  const emergencia = emergencias.find((e) => e.id === slug);

  return emergencia && emergencia.passos.length > 0
    ? emergencia
    : null;
}


module.exports = {
  listar,
  obterPorSlug,
};