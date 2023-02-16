import './App.css';
import './my-css.css'
import {Navbar} from "./Components/Navbar";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";

// import {Product} from "./Components/Product";

function App() {

    let Component
    switch (window.location.pathname) {
        default:
        case "/":
            Component = <Home/>
            break;
        case "/about":
            Component = <About/>
            break;
    }

    return (

        <div className={'page'}>
            <div className={'door-left'}></div>
            <div className={'door-right'}></div>

            <div className={'content-container'}>
                <Navbar/>
                {Component}
            </div>

        </div>


    );
}

export default App;
