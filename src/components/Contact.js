import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import logo from '../images/portfolio-logo.png';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3x11fjt', 'template_j02jh2y', form.current, 'user_jbY9cplXBV2n6fZxbXD8m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <>
        <nav class="navbar">
            <img src={logo} alt="CR Logo"/>
            <a href="/">Home</a>
        </nav>
        <div className='emailForm'>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder='Name' />
                </div>
                <div>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder="Email"/>
                </div>
                <div>
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder='Message'/>
                    <br></br>
                    <input type="submit" value="Send" />
                </div>
            </form>            
        </div>

        </>
    )
}

export default Contact;

// <>
// <nav class="navbar">
//     <img src={logo} alt="CR Logo"/>
//     <a href="/">Home</a>
// </nav>
// {/* <!-- Contact --> */}

// <section class="contact">
//     <div>
//         <span> Phone:</span> 480-249-7716 
//     </div>
//     <div class="mobile">
//         <span>Email:</span> connorrayburn.work@gmail.com
//     </div>
// </section>
// </>