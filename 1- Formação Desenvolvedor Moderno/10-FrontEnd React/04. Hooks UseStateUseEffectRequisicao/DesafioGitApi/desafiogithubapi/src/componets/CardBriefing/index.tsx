import "./styles.css";
import { ObjectDTO } from "../../models/object";

type Props = {
  object: ObjectDTO;
};

export default function CardBriefing({ object }: Props) {
  return (
    <div className="cgapi-cardbriefing-container">
      <div className="cgapi-cardbriefing-content">
        <img src={object.avatar_url} alt={object.name} />
        <div className="cgapi-inputbriefing-container">
          <h3>Informações</h3>
          <div className="cgapi-field">
             <p>Perfil: </p> {object.url}
          </div>
          <div className="cgapi-field">
            <p>Seguidores: </p> { object.followers}
          </div>
          <div className="cgapi-field">
            <p>Localidade: </p> {object.location}
          </div>
          <div className="cgapi-field">
            <p>Nome: </p> {object.name}
          </div>
        </div>
      </div>
    </div>
  );
}
