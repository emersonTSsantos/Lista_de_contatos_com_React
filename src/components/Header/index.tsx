import React from 'react';
import { HeaderContainer, Titulo, Imagem  } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
        <Titulo>Lista de Contatos</Titulo>
        <Imagem src="http://3.bp.blogspot.com/-Z_T-7ccU7pw/Ta4a0Lhv1YI/AAAAAAAAAFE/VaQvTq19h68/s1600/contatos.png" alt="" />
        </HeaderContainer>
    );
};

export default Header;
