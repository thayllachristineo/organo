import bannerImage from '../../assets/banner.png';
import './Banner.css';

const Banner = () => (
  <header>
    <img src={bannerImage} alt="Banner principal da página" />
  </header>
);

export default Banner;