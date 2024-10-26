import '../styles/header.css';
import {Link} from 'react-router-dom';



const Header = ()=>{
    return(

        <>
        
            <header>
                <div className="navbar">
                    <div className="navbar-item">
                        <h1 className="title">Mastan Khan</h1>
                    </div>
                    <div className="navbar-item">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li>
                                <Link Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                 <Link Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;