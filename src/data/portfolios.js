import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import js from '../img/portImages/js.png'
import fd from '../img/portImages/fd.png'
import game from '../img/portImages/game.png'
import giz from '../img/portImages/giz.jfif'



export const portfolios = [
    
    {
        id: uuid(),
        category: "Personal Portfolio",
        title: "React portfolio website",
        image: js,
        link2: "https://floresjerome.github.io/Portfolio-ReactJS/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Kodego Project",
        title: "Foodie Express",
        desc: "Food Ordering App",
        image: fd,
        link2: "https://floresjerome.github.io/Foodie-Express/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Kodego Project",
        title: "Gizmotronix",
        desc: "Smartphone Store App",
        image: giz,
        link2: "https://floresjerome.github.io/Gizmotronix-ecommerce/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Kodego Mini-Project",
        title: "Tic-Tac-Toe",
        desc: "Mini Game App",
        image: game,
        link1: "https://www.github.com/maclinz",
        link2: "https://floresjerome.github.io/Tic-Tac-Toe-Human-vs-Computer-Pair-Activity-Group-2",
        icon1: git,
        icon2: eye,
    },
  
]