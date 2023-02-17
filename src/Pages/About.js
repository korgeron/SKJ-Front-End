import {Navbar} from "../Components/Navbar";

export const About = () =>{
    return (
        <div className={'page'}>
            <div className={'door-left-un-animated'}></div>
            <div className={'door-right-un-animated'}></div>

            <div className={'content-container'}>
                <Navbar/>
                <div>
                    THIS IS OUR ABOUT US PAGE! THANKS FOR VIEWING :)
                </div>
            </div>
        </div>
    )
}