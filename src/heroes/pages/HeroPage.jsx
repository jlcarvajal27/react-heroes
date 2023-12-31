import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail rounded "
        />
      </div>

      <div className="col-8">
        <h3 className="m-3">{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego : </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>First_appearance : </b>
            {hero.first_appearance}
          </li>
          <li className="list-group-item">
            <b>Publisher : </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <h5 className="mt-3"> Characters </h5>
            <p>{hero.characters}</p>
          </li>
        </ul>
        <button
          onClick={onNavigateBack}
          className="btn btn-outline-primary btn-md m-3"
        >
          Back
        </button>
      </div>
    </div>
  );
};
