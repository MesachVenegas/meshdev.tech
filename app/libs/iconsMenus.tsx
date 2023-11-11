import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt, faBriefcase, faEarth, faGear, faHome, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const navigationMenu = [
    {
        name: 'Inicio',
        url: "/",
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        name: 'Sobre Mi',
        url: "/about",
        icon: <FontAwesomeIcon icon={faUser}/>
    },
    {
        name: 'Portfolio',
        url: "/portfolio",
        icon: <FontAwesomeIcon icon={faBriefcase}/>
    },
    {
        name: 'Contactarme',
        url: "/contact",
        icon: <FontAwesomeIcon icon={faAt}/>
    },
]


export const settingsIcons = [
    {
        name: "language",
        icon: <FontAwesomeIcon icon={faEarth}/>,
        desktop: true,
        mobile: false
    },
    {
        name: "theme",
        iconDark: <FontAwesomeIcon icon={faMoon}/>,
        iconLight: <FontAwesomeIcon icon={faSun}/>,
        desktop: true,
        mobile: false
    },
    {
        name: "settings",
        icon: <FontAwesomeIcon icon={faGear}/>,
        desktop: true,
        mobile: true
    },
]


export const socialsLinks = [
    {
        name: "github",
        icon: <FontAwesomeIcon icon={faGithub}/>,
        url: "https://github.com/MesachVenegas"
    },
    {
        name: "linkedin",
        icon: <FontAwesomeIcon icon={faLinkedin}/>,
        url: "https://www.linkedin.com/in/mesachvenegas/"
    },
    {
        name: "instagram",
        icon: <FontAwesomeIcon icon={faInstagram}/>,
        url: "https://www.instagram.com/mesh_dev/"
    },
    {
        name: "whatsapp",
        icon: <FontAwesomeIcon icon={faWhatsapp}/>,
        url: "https://api.whatsapp.com/send?phone=5216631662698&text=Quiero%20trabajar%20contigo"
    },
]