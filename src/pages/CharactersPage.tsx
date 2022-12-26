import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "../components/Button";

import Logo from "../assets/logo-hp.png";
import GrifinoriaLogo from "../assets/gryffindor-logo.png";
import SonserinaLogo from "../assets/slytherin-logo.png";
import LufaLufaLogo from "../assets/hufflepuff-logo.png";
import CorvinalLogo from "../assets/ravenclaw-logo.png";

export const CharactersPage = () => {
  const navigate = useNavigate();
  const [nameHouse, setNameHouse] = useState<
    "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw"
  >();
  const nameHouseSave = (
    saveNameHouse: "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw"
  ) => {
    setNameHouse(saveNameHouse);
  };

  const getCharactersHouses = () => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${nameHouse}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function () {
        toast.error("Algo deu errado");
      });
  };

  useEffect(() => {
    if (nameHouse) {
      getCharactersHouses();
    }
  }, [nameHouse]);

  return (
    <div className="w-full h-screen bg-center bg-cover bg-charactersBackground">
      <div className="flex items-center justify-between w-full h-14 bg-black gap-4">
        <img
          className="ml-4 h-14 cursor-pointer"
          src={Logo}
          alt="Logo Harry Potter"
          onClick={() => {
            navigate("/");
          }}
        />
        <div>
          <label className="text-white font-bold text-2xl">
            Salão Principal
          </label>
        </div>
        <div></div>
      </div>
      <div className="flex w-full items-center justify-between p-6 gap-4">
        <Button
          onClick={() => nameHouseSave("Gryffindor")}
          className="flex flex-col items-center gap-4 bg-red-500 opacity-80 font-bold w-1/4 p-4 rounded-lg text-white hover:opacity-100"
        >
          Grifinória
          <img className="h-60" src={GrifinoriaLogo} alt="Logo Grifinória" />
        </Button>
        <Button
          onClick={() => nameHouseSave("Slytherin")}
          className="flex flex-col items-center gap-4 bg-green-800 opacity-80 font-bold w-1/4 p-4 rounded-lg text-white hover:opacity-100"
        >
          Sonserina
          <img className="h-60" src={SonserinaLogo} alt="Logo Sonserina" />
        </Button>
        <Button
          onClick={() => nameHouseSave("Hufflepuff")}
          className="flex flex-col items-center gap-4 bg-purple-800 opacity-80 font-bold w-1/4 p-4 rounded-lg text-white hover:opacity-100"
        >
          Lufa-Lufa
          <img className="h-60" src={LufaLufaLogo} alt="Logo Lufa-Lufa" />
        </Button>
        <Button
          onClick={() => nameHouseSave("Ravenclaw")}
          className="flex flex-col items-center gap-4 bg-blue-900 opacity-80 font-bold w-1/4 p-4 rounded-lg text-white hover:opacity-100"
        >
          Corvinal
          <img className="h-60" src={CorvinalLogo} alt="Logo Corvinal" />
        </Button>
      </div>
    </div>
  );
};
