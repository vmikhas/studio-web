import {image} from "../utils/data/baseUrl.js";


export const header = {
  menuList: {
    customMenuItems: [
      {
        index: "1",
        itemsHref: "#",
        itemsText: "Главная"
      },
      {
        index: "2",
        itemsHref: "#",
        itemsText: "Почему именно мы?"
      },
      {
        index: "3",
        itemsHref: "#",
        itemsText: "Контакты"
      }
    ]
  },
  headerLink: {
    className: "custom-button_header",
    href: "#",
    text: "Заказать",
    tag: "a",
    target: "_blank"
  },
  logo: "logo"
};

export const aboutContent = {
  title: "Разработка сайтов",
  subtitle: "Для твоего бизнеса",
  desc: "Мы&nbsp;- студия web-разработки, работаем уже более 3-х лет, готовы разработать для вас сайт в&nbsp;кротчайшие сроки.",
  text: "Остались вопросы?",
  textButton: {
    className: "custom-button_about",
    href: "#",
    text: "Подробнее",
    tag: "a",
    target: "_blank",
    icon: "arrow"
  },
  imageDev: {
    sources: [
      // {
      //   srcSet: `${image("gameModal/miles_m@1.5x.webp")} 1.5x, ${image("gameModal/miles_m@2x.webp")} 2x`,
      //   type: "image/webp",
      //   media: "(max-width: 1023px)"
      // },
      // {
      //   srcSet: `${image("gameModal/miles_m@1.5x.png")} 1.5x, ${image("gameModal/miles_m@2x.png")} 2x`,
      //   type: "image/png",
      //   media: "(max-width: 1023px)"
      // },
      {
        srcSet: `${image("about/dev.webp")}`,
        type: "image/webp",
        media: "(min-width: 1024px)"
      }
    ],
    imgAttr: {
      src: `${image("about/dev.png")}`,
      alt: "Образ разработчика в стиле аниме"
    }
  },
  rings: [
    {
      name: "ring"
    },
    {
      name: "ring"
    },
    {
      name: "ring"
    }
  ]
};

export const reasonsContent = {
  title: "Причины сотрудничать с&nbsp;нами",
  textUpper: "Пока конкуренты говорят о&nbsp;том, что они лучшие&nbsp;- мы&nbsp;это доказываем делом.",
  text: "Вы&nbsp;можете ознакомиться с&nbsp;информацией о&nbsp;нас и&nbsp;посмотреть наше портфолио",
  button: {
    className: "custom-button_reasons",
    href: "#",
    text: "Портфолио",
    tag: "a"
  },
  advantages: [
    {
      subtitle: "Приемлимые<br/> цены",
      desc: "Мы&nbsp;максимально оптимизируем наш труд, для того, чтобы цены были доступными",
      name: "money"
    },
    {
      subtitle: "В&nbsp;сроки сдаем работу!",
      desc: "Расписываем каждый этап по&nbsp;срокам, и&nbsp;придерживаемся дедлайнов",
      name: "time"
    },
    {
      subtitle: "Команда специалистов",
      desc: "В&nbsp;нашей команде множество специалистов, и&nbsp;каждый из&nbsp;них хорошо знает свое дело",
      name: "employ"
    },
    {
      subtitle: "Консультация перед заказом",
      desc: "Наши менеджеры в&nbsp;сети 24/7, и&nbsp;готовы помочь вам, а&nbsp;так&nbsp;же ответить на&nbsp;ваши вопросы",
      name: "support"
    }
  ]
};

export const portfolioContent = {
  title: "Наше портфолио",
  text: "В&nbsp;данном портфолио вы&nbsp;сможете увидеть кейсы наших работ на&nbsp;2022&nbsp;- 2023 год",
  button: {
    className: "custom-button_portfolio",
    text: "Компьютерные версии"
  },
  arrow: "portfolio_arrow",
  images: [
    {
      img: `${image("portfolioSwiper/web3.jpg")}`,
      alt: "Сайт для компании Web3 Jobs"
    },
    {
      img: `${image("portfolioSwiper/nike.jpg")}`,
      alt: "Сайт для компании Nike Air Jordan"
    },
    {
      img: `${image("portfolioSwiper/oshi.jpg")}`,
      alt: "Сайт для компании OSHI"
    },
    {
      img: `${image("portfolioSwiper/samp.jpg")}`,
      alt: "Сайт для компании Samp Pay"
    },
    {
      img: `${image("portfolioSwiper/telegram.jpg")}`,
      alt: "Сайт для компании Telegram Premium"
    },
    {
      img: `${image("portfolioSwiper/oshitoken.jpg")}`,
      alt: "Сайт для компании OSHI Token"
    },
    {
      img: `${image("portfolioSwiper/trading.jpg")}`,
      alt: "Сайт для компании Trading Star"
    }
  ]
};

export const tariffContent = {
  title: "Тарифы",
  arrow: "portfolio_arrow",
  cards: [
    {
      subtitle: "Сайт &ldquo;Интернет магизин&rdquo;",
      text: "Сайт-визитка&nbsp;&mdash; компактный веб&#8209;ресурс&nbsp;&mdash; отличный старт бизнеса в&nbsp;интернете. Сайт-визитка содержит несколько страниц, в&nbsp;том числе&nbsp;&mdash; информацию о&nbsp;компании, её товарах и&nbsp;услугах, прейскурант&nbsp;цен, контакты&nbsp;и координаты для связи.",
      price: "От&nbsp;75.000₽",
      days: "От&nbsp;30&nbsp;дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    },
    {
      subtitle: "Сайт &ldquo;Каталог&rdquo;",
      text: "Сайт-каталог&nbsp;&mdash; это полноценный веб-ресурс, в&nbsp;котором потребители могут ознакомиться с&nbsp;товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и&nbsp;упростить задачу по&nbsp;предоставлению ассортимента целевой аудитории.",
      price: "От&nbsp;60.000₽",
      days: "От&nbsp;15&nbsp;дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    },
    {
      subtitle: "Сайт &ldquo;Визитка&rdquo;",
      text: "Сайт-визитка&nbsp;&mdash; компактный веб&#8209;ресурс&nbsp;&mdash; отличный старт бизнеса в&nbsp;интернете. Сайт-визитка содержит несколько страниц, в&nbsp;том числе&nbsp;&mdash; информацию о&nbsp;компании, её товарах и&nbsp;услугах, прейскурант&nbsp;цен, контакты и координаты для связи.",
      price: "От&nbsp;30.000₽",
      days: "От&nbsp;5&nbsp;дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    },
    {
      subtitle: "Сайт &ldquo;Landing<br/> page&rdquo;",
      text: "Одностраничный сайт (Landing Page)&nbsp;&mdash; так называют промо-сайты для презентации товара,&nbsp;услуги и&nbsp;организации мгновенных продаж. Мы умеем&nbsp;создавать веб-ресурсы, полностью готовые к&nbsp;наплыву лавины посетителей. Одна-единственная страница принесёт&nbsp;колоссальную прибыль:&nbsp;иначе и&nbsp;быть не<br/> может.",
      price: "От&nbsp;25.000₽",
      days: "От&nbsp;17&nbsp;дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    },
    {
      subtitle: "Сайт &ldquo;Корп.сайт&rdquo;",
      text: "Корпоративный сайт&nbsp;&mdash; это крупномасштабный портал, который создается не&nbsp;только для контакта организации с клиентами, но&nbsp;и&nbsp;для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа&nbsp;&mdash; лицо компании, солидный &ldquo;костюм&rdquo;, вызывающий у&nbsp;партнёров и контрагентов&nbsp;уважение и&nbsp;интерес.",
      price: "От&nbsp;60.000₽",
      days: "От&nbsp;17&nbsp;дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    },
    {
      subtitle: "Сайт &ldquo;Индивидуальный&rdquo;",
      text: "Мы&nbsp;готовы выслушать вашу идею, и&nbsp;выполнить задание. Цена проекта будет складываться от ее технического задания и&nbsp;сроков выполнения.",
      price: "От ?₽",
      days: "От ? дней",
      button: {
        className: "custom-button_tariff",
        href: "#",
        text: "Подробнее",
        tag: "a",
        target: "_blank",
        icon: "arrow"
      }
    }
  ]
};

export const orderContent = {
  title: "Оставь заявку",
  button: {
    className: "custom-button_order",
    text: "Отправить",
    type: "submit"
  },
  phone: {
    sourceData: {
      sources: [
        {
          srcSet: image("order/phone.webp"),
          type: "image/webp"
        }
      ]
    },
    imgAttr: {
      src: image("order/phone.png"),
      alt: "Картинка телефона"
    }
  },
  notifications: [
    {
      subtitle: "Уведомление!",
      text: "В скорейшем времени вам перезвонят",
      icon: {
        imgAttr: {
          src: image("order/call.png"),
          alt: "Значок глобуса"
        }
      }
    },
    {
      subtitle: "Работа закончена!",
      text: "Мы&nbsp;закончили работу над вашим сайтом",
      icon: {
        imgAttr: {
          src: image("order/globe.png"),
          alt: "Значок вызова"
        }
      }
    }
  ]
};
