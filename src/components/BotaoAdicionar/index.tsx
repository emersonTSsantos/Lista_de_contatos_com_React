import { Link } from 'react-router-dom';
import { Circulo } from './styles';

const BotaoAdicionar = () => (
  <Link to="/cadastro" style={{ textDecoration: 'none' }}>
    <Circulo>+</Circulo>
  </Link>
);

export default BotaoAdicionar;
