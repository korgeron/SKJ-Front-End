import {Navbar} from "../Components/Navbar";

export const PageLoad = () => {
    return (
        <div className={'page'}>
            <div className={'door-left'}></div>
            <div className={'door-right'}></div>

            <div className={'content-container'}>
                <Navbar/>
                <div>
                    THIS WILL BE THE LANDING PAGE! SAME AS THE HOME PAGE BUT WITH ANIMATION :D
                </div>
            </div>
        </div>
    )
}