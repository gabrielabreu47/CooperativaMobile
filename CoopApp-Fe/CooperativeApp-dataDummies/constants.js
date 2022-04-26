export const serverDomain = "https://dd54-148-103-171-122.ngrok.io";

export const apiRoutes = {
  login: "/api/user/login",
  accounts: "/api/account?$expand=Movements",
  investments: "/api/investment",
  loans: "/api/loan",
  discounts: "/api/discount",
  news: "/api/news",
  contacts: "/api/contact",
  faqs: "/api/faq",
  videos: "/api/video",
  movements: "/api/movement",
  users: "/api/user",
};

export const dataDummies = {
  accounts: [
    {
      name: "Aportaciones",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
    {
      name: "Estilos",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
    {
      name: "Donaciones",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
  ],
  investments: [
    {
      name: "Crypto",
      number: "1127788002",
      balance: 350000,
      invested_at: new Date(),
      amount_invested: 20000,
      yield: 0.15,
    },
    {
      name: "San",
      number: "1127788002",
      balance: 350000,
      invested_at: new Date(),
      amount_invested: 20000,
      yield: 0.15,
    },
    {
      name: "Actividades",
      number: "1127788002",
      balance: 350000,
      invested_at: new Date(),
      amount_invested: 10000,
      yield: 0.15,
    },
  ],
  loans: [
    {
      name: "Carro del año",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
    {
      name: "Televisión",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
    {
      name: "Iphone 13",
      number: "1127788002",
      balance: 350000,
      movements: [
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Retiro de dinero normal",
          transactionId: "80923444",
          type: "credit",
          amount: 2000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
        {
          date: new Date(),
          description: "Entrada de dinero",
          transactionId: "1234413",
          type: "debit",
          amount: 5000,
        },
      ],
    },
  ],
  discounts: [
    {
      title: "Descuento de helado",
      percentage_discounted: 0.15,
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      title: "Descuento de helado",
      percentage_discounted: 0.15,
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      title: "Descuento de helado",
      percentage_discounted: 0.15,
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      title: "Descuento de helado",
      percentage_discounted: 0.15,
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      title: "Descuento de helado",
      percentage_discounted: 0.15,
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic",
    },
  ],
  news: [
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
    {
      title: "Pasó una chulería",
      previewInfo:
        "Lorem ipsum is placeholder text commonly used in the graphic",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Charlotte-06-16.jpg?resize=1100%2C688&ssl=1",
    },
  ],
  videos: [
    { title: "Observa nuestra cooperativa", videoId: "uCUpvTMis-Y" },
    { title: "Observa nuestra cooperativa", videoId: "uCUpvTMis-Y" },
    { title: "Observa nuestra cooperativa", videoId: "uCUpvTMis-Y" },
    { title: "Observa nuestra cooperativa", videoId: "uCUpvTMis-Y" },
  ],
  faqs: [
    {
      question: "¿Como laboramos?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "¿Como laboramos?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "¿Como laboramos?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "¿Como laboramos?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  contacts: [
    { name: "Correo electrónico", value: "solvexcoop@gmail.com" },
    { name: "Teléfono", value: "(809) 518-2345" },
    { name: "Dirección", value: "C. Eugenio Deschamps 6, Santo Domingo 10133" },
  ],
  location: {
    latitude: 18.4706186,
    longitude: -69.9596381,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};
