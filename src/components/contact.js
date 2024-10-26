import '../styles/contact.css'


const Contact = ()=>{
    return(
        <>
            <div className="contact">
                <h1>Contact to Hire Me or DM me for Projects</h1>
                <div className="contact-container">
                    <div>
                        <input placeholder="Enter your name" name="name" type="text"/>

                    </div>
                    <div>
                        <input placeholder="Enter your email" name="email" type="email"/>
                    </div>
                    <div>
                        <textarea placeholder="Enter your message" name="message"/>
                    </div>
                    <div>
                        <button>Contact Me</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;