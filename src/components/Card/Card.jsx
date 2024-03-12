import './Card.css';

const Card = ({ image, name, role }) => (
  <div className="card">
    <div className="card__header">
      <img src={image} alt={`Foto do GitHub de ${name}`} />
    </div>
    <div className="card__footer">
      <h4>{name}</h4>
      <h5>{role}</h5>
    </div>
  </div>
);

export default Card;
