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
      alt: "Образ разработчика в стиле аниме",
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
}

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
}

export const portfolioContent = {
  title: "Наше портфолио",
  text: "В&nbsp;данном портфолио вы&nbsp;сможете увидеть кейсы наших работ на&nbsp;2022&nbsp;- 2023 год",
  button: {
    className:"custom-button_portfolio",
    text: "Компьютерные версии"
  },
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
    },
  ]
}
