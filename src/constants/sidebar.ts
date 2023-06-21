import LogoutIcon from "@mui/icons-material/Logout";
import ArticleIcon from "@mui/icons-material/Article";
import HistoryIcon from "@mui/icons-material/History";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const categories = [
  {
    link: "/category/plitnyak",
    title: "Плитняк",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/7d0a5c0fdc7627e42f5f34a060946ec3.jpg?updatedAt=1685969925720",
  },
  {
    link: "/category/galka",
    title: "Галька",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/1bfe3fa4b111f178076f5d745f7a99bb.jpg?updatedAt=1685969972913",
  },
  {
    link: "/category/galtovannyi_plitnyak",
    title: "Галтованный камень",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/c74daf94f50e9e3b2e0ceb7ac2e6b64c.jpg?updatedAt=1685970012532",
  },
  {
    link: "/category/dikiy_kamen",
    title: "Дикий камень",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/d2d8b9fbfb4ad44f2f34603b8f9acb2c.jpg?updatedAt=1685970039850",
  },
  {
    link: "/category/kamennaya_kroshka",
    title: "Декоративный щебень и крошка",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/b1df0691df3b3a1071d5c0e336ecb189.jpg?updatedAt=1685970070247",
  },
  {
    link: "/category/kladochnyy_kamen",
    title: "Кладочный камень",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/d97578f9ce17e7441e27db1eee45536f.jpg?updatedAt=1685970096771",
  },
  {
    link: "/category/valuni",
    title: "Валуны",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/0268cf49993a15ba32e1651f0539df83.jpg?updatedAt=1685970119250",
  },
  {
    link: "/category/butoviy_kamen",
    title: "Бутовый камень",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/95ae9935f5cdf684227f333ad7d0411d.jpg?updatedAt=1685970148990",
  },
  {
    link: "/category/glyby_iz_kamnya",
    title: "Глыбы и крупные валуны",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/a1367de15e3b36a530b50e2ca5e88a5e.jpg?updatedAt=1685970174308",
  },
  {
    link: "/category/oblitsovochnaya_plitka",
    title: "Облицовочная плитка",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/ca3f4cd7e840d4d00433931bc300337c.jpg?updatedAt=1685970197670",
  },
  {
    link: "/category/bruschatka",
    title: "Брусчатка",
    imageHref: "https://ik.imagekit.io/swodxi0ff/Images/ca3f4cd7e840d4d00433931bc300337c.jpg?updatedAt=1685970197670",
  },
];

export const profileSidebar = [
  {
    link: "/personal",
    title: "Личные Данные",
  },
  {
    link: "/current-orders",
    title: "Текущие заказы",
  },
  {
    link: "/orders-history",
    title: "История заказов",
  },
];

export const sidbarSeachKeys = [
  "plitnyak",
  "galka",
  "galtovannyi_plitnyak",
  "dikiy_kamen",
  "kamennaya_kroshka",
  "kladochnyy_kamen",
  "valuni",
  "butoviy_kamen",
  "glyby_iz_kamnya",
  "oblitsovochnaya_plitka",
  "bruschatka",
];

export const aboutUsSidebar = [
  {
    link: "/about-us/",
    title: "О компании",
    imageHref: "",
  },
  {
    link: "/about-us/politics",
    title: "Политика",
    imageHref: "",
  },
  {
    link: "/about-us/licenses",
    title: "Лицензии",
    imageHref: "",
  },
  {
    link: "/about-us/contacts",
    title: "Контакты",
    imageHref: "",
  },
];

export const ProfileSidebarItems = [
  {
    title: "Текущие заказы",
    link: "/current-orders",
    icon: ReceiptLongIcon,
  },
  {
    title: "Личные данные",
    link: "/personal",
    icon: ArticleIcon,
  },
  {
    title: "История заказов",
    link: "/orders-history",
    icon: HistoryIcon,
  },
  {
    title: "Выход",
    link: "/",
    icon: LogoutIcon,
  },
];
