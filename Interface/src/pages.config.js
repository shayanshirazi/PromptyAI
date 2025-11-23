import Home from './pages/Home';
import DailyChallenge from './pages/DailyChallenge';
import Rankings from './pages/Rankings';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import About from './pages/About';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "DailyChallenge": DailyChallenge,
    "Rankings": Rankings,
    "Courses": Courses,
    "FAQ": FAQ,
    "About": About,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};