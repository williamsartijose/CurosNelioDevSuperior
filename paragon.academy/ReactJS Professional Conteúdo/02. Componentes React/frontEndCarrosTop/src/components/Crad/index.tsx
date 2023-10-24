import "./styles.css";
import CarImg from "../../assets/car.png";
import ButtonCard from "../ButtonCard";

export default function Card() {
  return (
    <div className="ct-card">
      <img src={CarImg} alt="Carro" />

      <h3>Audi Supra TT</h3>
      <p>
        <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </i>
      </p>
      <ButtonCard />
    </div>
  );
}
