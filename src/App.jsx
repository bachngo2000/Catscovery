import { useState } from "react";
import "./App.css";
import DiscoverCard from "./components/DiscoverCard/DiscoverCard";
import BanCard from "./components/BanCard/BanCard";
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  // https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_HjGlprZAz82QZ93n558rIVlaBNzfih6y84K0lo4qZdYoXQn4uMMGptqr7V85vCew
  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${API_KEY}`;
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json && json[0].url == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      setUrl(json[0].url);
      setName(json[0].breeds[0].name);
      setAttributes([
        ...[],
        json[0].breeds[0].life_span + " years",
        json[0].breeds[0].origin,
        json[0].breeds[0].weight.imperial + " lbs",
        "Stranger friendly: " + json[0].breeds[0].stranger_friendly,
        "Intelligence: " + json[0].breeds[0].intelligence,

      ]);
    }
  };

  const handleShuffleClick = () => {
    makeQuery();
  };

  return (
    <div className="background-image">
      <div>
        <h1 className="title"> Catscovery </h1>
        <h2> Keep your catmaniac dream alive! </h2>
        <h3>😺😸😹😻😼😽🙀😿😾</h3>
        {url && <DiscoverCard name={name} attributes={attributes} image={url} />}
        <button onClick={handleShuffleClick}> Discover 🔥!</button>
      </div>
      <BanCard bannedAttributes={bannedAttributes} />
    </div>
  );
};

export default App;