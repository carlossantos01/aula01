import './style.css'
import {Link,Navalink} from 'react-router-dom'
import logo from '../../assets'

export default function Header() {
    return(
        <header>
            <div>
                <link to="/">
                <img src={logo} alt= "Logo da Empresa"/>
                <span>Contabilidade Simples</span>
                </link>
                <nav>
                    <navelink to= "/sobre-nos">Sobre nós</navelink>
                    <navelink to="/fale-conosco">Fale-conosco</navelink>
                </nav>
            </div>
        </header>
    )
    
}