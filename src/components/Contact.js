import React from 'react';

import logo from '../images/portfolio-logo.png';

function Contact() {
    return (
        <>
        <nav class="navbar">
            <img src={logo} alt="CR Logo"/>
            <a href="/">Home</a>
        </nav>
        {/* <!-- Contact --> */}
    
        <section class="contact">
            <div>
                <span> Phone:</span> 480-249-7716 
            </div>
            <div class="mobile">
                <span>Email:</span> connorrayburn.work@gmail.com
            </div>
        </section>
        </>
    )
}

export default Contact;