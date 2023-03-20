import { useState } from "react";
import "./App.css";
import DiscoverCard from "./components/DiscoverCard/DiscoverCard";
import BanCard from "./components/BanCard/BanCard";
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
  const [url, setUrl] = useState("");
  // name of the cat
  const [name, setName] = useState("");
  // refactor into multiple state variables
  const [attributes, setAttributes] = useState([]);

  // const [lifespan, setLifeSpan] = useState("");
  // const [origin, setOrigin] = useState("");
  // const [weight, setWeight] = useState("");
  // const [stranger_friendly, setStrangerFriendly] = useState("");
  // const [intelligence, setIntelligence] = useState("");
  const [breedsId, setBreedsId] = useState([
    "beng",
    "hima",
    "chau",
    "crex",
    "abys",
    "pers",
    "ebur",
  ]);


  const [selectedAttribute, setSelectedAttribute] = useState([]);
  const [bannedAttribute, setBannedAttribute] = useState([]);

  const randomBreedID = Math.floor(Math.random() * breedsId.length);

  // https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_HjGlprZAz82QZ93n558rIVlaBNzfih6y84K0lo4qZdYoXQn4uMMGptqr7V85vCew
  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&breed_ids=${breedsId[randomBreedID]}&api_key=${API_KEY}`;
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    // const randomID = Math.floor(Math.random() * 9);
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
      // setLifeSpan(json[randomID].breeds[0].life_span + " years");
      // setOrigin(json[randomID].breeds[0].origin);
      // setWeight(json[randomID].breeds[0].weight.imperial + " lbs");
      // setStrangerFriendly("Stranger friendly: " + json[randomID].breeds[0].stranger_friendly);
      // setIntelligence("Intelligence: " + json[randomID].breeds[0].intelligence);
    }
  };

  const handleShuffleClick = () => {
    makeQuery();
  };

  const AddNameToBanList = () => {
    setSelectedAttribute([...selectedAttribute, name]);
    setBannedAttribute([...bannedAttribute, name]);
    console.log(breedsId);
    if (name == "Bengal") removeBreed("beng");
    else if (name == "Abyssinian") removeBreed("abys");
    else if (name == "Persian") removeBreed("pers");
    else if (name == "European Burmese") removeBreed("ebur");
    else if (name == "Himalayan") removeBreed("hima");
    else if (name == "Chausie") removeBreed("chau");
    else if (name == "Cornish Rex") removeBreed("crex");

  }

  // const OnClickLifeSpan = () => {
  //   setSelectedAttribute([...selectedAttribute, lifespan]);
  // }

  // const OnClickWeight = () => {
  //   setSelectedAttribute([...selectedAttribute, weight]);
  // }

  // const OnClickOrigin = () => {
  //   setSelectedAttribute([...selectedAttribute, origin]);

  // }

  // const OnClickStrangerFriendly = () => {
  //   setSelectedAttribute([...selectedAttribute, stranger_friendly]);
  // }

  // const OnClickIntelligence = () => {
  //   setSelectedAttribute([...selectedAttribute, intelligence]);
  // }

    //this is to not include breed name that is on the ban list
  const removeBreed = (breedToBeRemoved) =>  {
    let indexToRemove = breedsId.indexOf(breedToBeRemoved);
    if (indexToRemove !== -1) {
      const newBreedsId = [...breedsId];
      newBreedsId.splice(indexToRemove, 1);
      setBreedsId(newBreedsId);
    }
    console.log(breedsId);
  }

  const addAttributeToBanList = (e) => {
    setBannedAttribute((attribute) =>
      [...attribute, e.target.innerHTML]);
  };

  return (
    <div className="background-image">
      <div>
        <h1 className="title"> Catscovery </h1>
        <h2> Keep your catmaniac dream alive! </h2>
        <h3>😺😸😹😻😼😽🙀😿😾</h3>
        {url && <DiscoverCard name={name} attributes={attributes} image={url} onClickName={AddNameToBanList} banAttribute={addAttributeToBanList} />}
        <button onClick={handleShuffleClick}> Discover 🔥!</button>
      </div>
      <BanCard selectedAttribute={selectedAttribute} />
    </div>
  );
};

export default App;