import { Link } from 'react-router-dom'
import jonasLogo from '../../assets/Logo.svg'
import './BlogNavbar.css'

function BlogNavbar() {
    return (
        <nav className="blog-navbar">
            <div className="blog-nav-container">
                <Link to="/" className="blog-logo">
                    <img src={jonasLogo} className="logojonas" alt="Jonas logo" />
                </Link>
                
                <div className="blog-nav-links">
                    <Link to="/" className="home-link">
                        <i className="fas fa-arrow-left"></i>
                        Back to Home
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default BlogNavbar