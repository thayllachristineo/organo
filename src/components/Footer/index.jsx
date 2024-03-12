import './Footer.css';

import FbLogo from '../../assets/fb.png';
import TwLogo from '../../assets/tw.png';
import IgLogo from '../../assets/ig.png';

import Logo from '../../assets/logo.png';



const Footer = () => (
  <footer className='footer'>
    <div className='footer__social'>
      <img src={FbLogo} alt="Logo do Facebook" />
      <img src={TwLogo} alt="Logo do Twitter" />
      <img src={IgLogo} alt="Logo do Instagram" />
    </div>

    <div className='footer__logo'>
      <img src={Logo} alt="Logo do Organo" />
    </div>

    <div className='footer__developmentBy'>
      <p>Desenvolvido por Alura.</p>
    </div>
  </footer>
);

export default Footer;
