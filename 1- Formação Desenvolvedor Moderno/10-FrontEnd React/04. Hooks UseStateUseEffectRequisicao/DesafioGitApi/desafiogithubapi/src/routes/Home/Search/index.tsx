import "./styles.css";
import * as objectService from "../../../services/object-service";
import { useState } from "react";
import { ObjectDTO } from "../../../models/object";
import CardBriefing from "../../../componets/CardBriefing";

export default function Search() {
  const [user, setUser] = useState("");
  const [error, setError] = useState();

  const [obj, setObj] = useState<ObjectDTO>();

  function handleUserChange(event: any) {
    setUser(event.target.value);
  }

  function handleBtnOnClick(event: any) {
    event.preventDefault();

    objectService
      .findyByUser(user)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        setError(error.response.data);
        setObj(undefined);
      });
  }

  return (
    <main>
      <section className="pdside90">
        
        <form>
          <div className="cgapi-container-card">
            <div className="cgapi-content-card">
              <div>
                <h2>Encontre um perfil Github</h2>
                <input
                  name="user"
                  value={user}
                  type="text"
                  autoFocus
                  placeholder="Usuário Github"
                  onChange={handleUserChange}
                  
                />
                <button onClick={handleBtnOnClick} type="submit">
                  Encontrar
                </button>
              </div>
            </div>
          </div>
        </form>

        {(obj && <CardBriefing object={obj} />) ||
          (error && <h1 className="cgpi-title">Erro ao buscar usuário</h1>)}
      </section>
    </main>
  );
}