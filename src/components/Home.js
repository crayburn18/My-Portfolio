import React from 'react';

import logo from '../images/portfolio-logo.png';
import dayPlanner from '../images/iconfinder_calendar-book-date-monthly_2203551.png';
import houseHunter from '../images/iconfinder_house-home-main-menu-start-building_3643769.png';
import tech from '../images/976607_appliances_computer_laptop_notebook_portable computer_icon.png';
import trivia from '../images/iconfinder_multimedia-19_809511.png';
import resume from '../images/Copy of New Lambda School Resume (2).pdf';

function Home(){
    return(
        <>
        <header>
            {/* <!-- Navbar --> */}
            <nav class="navbar">
                <img src={logo} alt="CR Logo"/>
                <a href="/contactme">Contact Me</a>
            </nav>
    
            {/* <!-- Showcase --> */}
            <section class="showcase fade-in">
                <div class="title">
                    <h2>hello, I'm</h2>
                    <h1>CONNOR <span>RAYBURN</span></h1>
                    <p>Web Developer</p>
                </div>
    
            </section>
    
            {/* <!-- Icons --> */}
            <section class="icons fade-in">
                <div>
                    <a href="https://github.com/crayburn18" target="blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/connor-rayburn-2bba29167" target="blank"><i
                            class="fab fa-linkedin fa-2x"></i></a>
                    <a href={resume} target="blank"><i class="far fa-folder-open fa-2x"></i></a>
                </div>
            </section>
        </header>
        {/* <!-- Projects --> */}
        <section class="projects">
            <h1>Projects</h1>
            <div>
                <div class="project-box">
                    <a href="https://vast-bayou-08421.herokuapp.com/login" target="blank"><img src={houseHunter} alt="house"/></a>
                    <h2>House Hunter</h2>
                    <p>Search locations for homes and save your favorites to your authorized account for future use. <span>username: user@admin password: 1234</span></p>
                    <h3><span>Languages: </span>Html-Css-Javascript</h3>
                    <a href="https://github.com/dwashburn8/Project-2" class="btn" target="blank">Github</a>
                </div>
                <div class="project-box">
                    <a href="https://mystifying-borg-941be4.netlify.app/" target="blank"><img src={tech} alt="computer"/></a>
                    <h2>Use My Tech Stuff</h2>
                    <p>Allow users to add tech items to their account for rent and choose to rent listed items. <span>username: user password: password</span></p>
                    <br></br>
                    <h3><span>Languages: </span>React-Node-Express</h3>
                    <a href="https://github.com/UseMyTechStuffBuildWeek" class="btn" target="blank">Github</a>
                </div>
                <div class="project-box">
                    <a href="https://dazacher.github.io/Trivia-With-Friends/" target="blank"><img src={trivia} alt="game controller"/></a>
                    <h2>Trivia With Friends</h2>
                    <p>User gets to set customizable options to create a trivia game that gives them timed scored points. Answer quickly and correctly to get the most points and enter your name to the leaderboards!</p>
                    <h3><span>Languages: </span>Html-Css-Javascript</h3>
                    <a href="https://github.com/dazacher/Trivia-With-Friends" class="btn" target="blank">Github</a>
                </div>
                <div class="project-box">
                    <a href="https://crayburn18.github.io/Calendar-Homework/" target="blank"><img src={dayPlanner} alt="calendar"/></a>
                    <h2>Day Planner</h2>
                    <p>A 9-5pm day planner that alows user to input and store messages for each hour that save locally. Planner shows which hour past, present, future with color representations.</p>
                    <h3><span>Languages: </span>Html-Css-Javascript</h3>
                    <a href="https://github.com/crayburn18/Calendar-Homework" class="btn" target="blank">Github</a>
                </div>
            </div>
        </section>
    
        {/* <!-- Contact --> */}
    
        {/* <section class="contact">
            <div>
                <span> Phone:</span> 480-249-7716 
            </div>
            <div class="mobile">
                <span>Email:</span> connorrayburn.work@gmail.com
            </div>
        </section> */}
    
        {/* <!-- Footer --> */}
        <footer>
            <h2>CONNORRAYBURN © 2021</h2>
        </footer>
        </>
    )
}

export default Home;