import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt, faEarth, faGear, faHome, faLaptopFile, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";


export const navigationMenu = [
    {
        name: 'Inicio',
        url: "/",
        icon: faHome
    },
    {
        name: 'Sobre Mi',
        url: "/about",
        icon: faUser
    },
    {
        name: 'Proyectos',
        url: "/portfolio",
        icon: faLaptopFile
    },
    {
        name: 'Contacto',
        url: "/contact",
        icon: faAt
    },
]


export const settingsIcons = [
    {
        name: "language",
        icon: faEarth,
        desktop: true,
        mobile: false
    },
    {
        name: "theme",
        iconDark: faMoon,
        iconLight: faSun,
        desktop: true,
        mobile: false
    },
    {
        name: "settings",
        icon: faGear,
        desktop: true,
        mobile: true
    },
]


export const socialsLinks = [
    {
        name: "github",
        icon: faGithub,
        url: "https://github.com/MesachVenegas"
    },
    {
        name: "linkedin",
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/mesachvenegas/"
    },
    {
        name: "instagram",
        icon: faInstagram,
        url: "https://www.instagram.com/mesh_dev/"
    },
    {
        name: "whatsapp",
        icon: faWhatsapp,
        url: "https://api.whatsapp.com/send?phone=5216631662698&text=Quiero%20trabajar%20contigo"
    },
]