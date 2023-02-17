import {Navbar} from "../Components/Navbar";


export const Home = () => {
    return (
        <div className={'page'}>
            <div className={'door-left-un-animated'}></div>
            <div className={'door-right-un-animated'}></div>

            <div className={'content-container'}>
                <Navbar/>
                <div>
                    HELLO THERE! WELCOME TO THE HOME PAGE
                </div>
            </div>
        </div>
    )
}