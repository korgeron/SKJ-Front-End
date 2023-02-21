import {Navbar} from "../Components/Navbar";

export const About = () => {
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
                    <div className={'skj-motto'}>
                        We are Instructors! We learn, we train and we implement! We are always learning, we are always
                        being coached and we are always growing to teach our students the way!
                    </div>

                    <div className={'about-us'}>
                        Southern Karate Jiu-Jitsu Covington is locally owned and operated. Our Black Belt instructors
                        are
                        dedicated to provide a safe and inviting environment for all our famlies and students of all
                        ages
                        and low pricing for multiple style training. As a result, a high percentage of our business is
                        from
                        referrals. Family and Friends love to train together!
                        <br/>
                        <br/>
                        Sensei Warren Orgeron is a 4th degree Black Belt in Isshinryu Karate and a certified Fitness
                        Instructor. He trains under the legendary Master Arcenio Advincula, a 1st generation student of
                        Master Tatsuo Shimabuku. Sensei Warren is certified in fitness to meet all your fitness needs.
                        <br/>
                        <br/>
                        Sensei Warren and the Southern Karate Jiu-Jitsu Staff would like to welcome the opportunity to
                        earn
                        your trust and to deliver you the best service in the industry. We have a flexible schedule to
                        meet
                        the needs of all our students. Our core values are God centered, Bible based and we love what we
                        do!
                        Southern Karate Jiu-Jitsu participates in Service activities within the community free of charge
                        and
                        our instructors and students welcome the invitations to do so. As we strive to be our best, we
                        also
                        strive to give our best to those around us.
                    </div>
                </div>
            </div>
        </div>
    )
}