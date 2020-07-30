import React from 'react';
import Logo from '../../assets/imagens/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="AndFlix Logo" />
            </a>

            <Button className='ButtonLink' href="/">
                Novo Vídeo
            </Button>    
        </nav>
    );

}

export default Menu; //Para colocar em outros arquivos
