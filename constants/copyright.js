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

}
