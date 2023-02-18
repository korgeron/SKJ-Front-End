import {Navbar} from "../Components/Navbar";

export const About = () =>{
    return (
        <div className={'page'}>
            <div className={'door-left-un-animated'}></div>
            <div className={'door-right-un-animated'}></div>

            <div className={'content-container'}>
                <Navbar/>
                <div className={'content'}>
                    <div className={'skj-title'}>
                        Southern Karate Jiu-Jitsu
                    </div>
                    <div className={'skj-moto'}>
                        We are Instructors! We learn, we train and we implement! We are always learning, we are always being coached and we are always growing to teach our students the way!
                    </div>
                </div>
            </div>
        </div>
    )
}