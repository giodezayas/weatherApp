import { useState } from "react";

const Search = ({ newLocation }) => {
  const [city, setCity] = useState("");



  const onSubmit = (e) => {
    e.preventDefault();
    console.log({city});
    if(city===""|| !city)return;
    
    newLocation(city)
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input className="form-control"type="text"placeholder="City"onChange={(e)=>setCity(e.target.value)}/>
          <button className="btn btn-primary input-group-text"type="submit">Search</button>
        </div>
      </form>

    </div>
  );
};

export default Search;
