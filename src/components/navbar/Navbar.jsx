import { Component } from 'react';
import jonasLogo from '../../assets/Logo.svg'
import './Navbar.css'

class Navbar extends Component {
    state={clicked: false};
    handleClick = () =>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render() {
        return (
            <nav className="navbar">
                <div>
                    <a href="#topo">
                        <img src={jonasLogo} className="logojonas" alt="Jonas logo" />
                    </a>
                </div>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#topo">Sobre</a></li>
                        <li><a href="#skills">Experiência</a></li>
                        <li><a href="#project">Projetos</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ?'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
            </nav>
        )
    }
}
export default Navbar