import Card from '../Card';
import './Team.css';

const Team = ({ name, primaryColor, secondaryColor, collabs }) =>
  collabs.length > 0 && (
    <section className="team" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>{name}</h3>

      <div className="team__collab">
        {collabs.map(({ image, name, role }) => (
          <Card
            key={name}
            image={image}
            name={name}
            role={role}
            bgColor={primaryColor}
          />
        ))}
      </div>
    </section>
  );

export default Team;
