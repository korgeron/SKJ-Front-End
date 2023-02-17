import './App.css';
import './my-css.css'
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {PageLoad} from "./Pages/PageLoad";
// import {Product} from "./Components/Product";
export default App;


function App() {

    let Component
    switch (window.location.pathname) {
        default:
        case "/":
            document.querySelector("title").innerText = "SKJ | Home"
            Component = <PageLoad/>
            break;
        case "/home":
            document.querySelector("title").innerText = "SKJ | Home"
            Component = <Home/>
            break;
        case "/about":
            document.querySelector("title").innerText = "SKJ | About Us"
            Component = <About/>
            break;
    }

    return (
       Component
);
}
