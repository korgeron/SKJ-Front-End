import './App.css';
import './my-css.css'
import {Product} from "./Components/Product";

function App() {
    return (
        <div className={'page'}>

            <div className={'page-navbar'}>

            </div>

            <div className={'page-content'}>
                <Product/>
            </div>
        </div>
    );
}

export default App;
