import '../styles/footer.css'
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <>
        <div className='footer'>
            <div className='footer-item'>
                <div className="items">
                    <p>mastankhan1710@gmail.com</p>
                </div>
                <div className="items">
                    <Link to="https://github.com/MastanKhan1">Github</Link>
                </div>
                <div className="items">
                    <p>+91 636-215-8704</p>
                </div>
            </div>
            
            <div className='copy-right'>
                <p>Made with 💖, from Mastan Khan</p>
            </div>
        </div>
        </>
    )
}


export default Footer;