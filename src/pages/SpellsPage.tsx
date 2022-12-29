import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-hp.png";
import { Spells } from "../interfaces/characters";

export const SpellsPage = () => {
  const navigate = useNavigate();
  const [spellsList, setSpellsList] = useState<Spells[]>();

  const getSpellsList = () => {
    axios
      .get(`https://hp-api.onrender.com/api/spells`)
      .then(function (response) {
        setSpellsList(response.data);
        console.log();
      })
      .catch(function () {
        toast.error("Algo deu Errado");
      });
  };

  useEffect(() => {
    getSpellsList();
  });

  return (
    <div className="w-full min-h-screen bg-fixed h-full bg-center bg-cover bg-spellsBackground">
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
            Sala de Feitiços
          </label>
        </div>
        <div></div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2 bg-white w-1/2 opacity-70 text-bold text-black">
          {spellsList?.map((spell) => (
            <div className="text-center mt-1">
              <p className="font-bold">{spell.name}</p>
              <p className="font-extralight">{spell.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
