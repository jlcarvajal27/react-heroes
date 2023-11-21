//

import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSuubmit = (e) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={onSearchSuubmit}>
            <input
              type="text"
              placeholder="Search hero "
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search Hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">no hero with {q} </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
