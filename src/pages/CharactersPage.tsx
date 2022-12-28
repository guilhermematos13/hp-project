import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FaHatWizard, FaBirthdayCake } from "react-icons/fa";
import { MdOutlineDetails } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
import { Characters, CharactersHouse } from "../interfaces/characters";
import { Button } from "../components/Button";

import Logo from "../assets/logo-hp.png";
import Dobby from "../assets/dobby.webp";
import GrifinoriaLogo from "../assets/gryffindor-logo.png";
import SonserinaLogo from "../assets/slytherin-logo.png";
import LufaLufaLogo from "../assets/hufflepuff-logo.png";
import CorvinalLogo from "../assets/ravenclaw-logo.png";
import { Modal } from "../components/Modal";

export const CharactersPage = () => {
  const navigate = useNavigate();
  const [nameHouse, setNameHouse] = useState<CharactersHouse>();
  const [charactersList, setCharactersList] = useState<Characters[]>();
  const [openModal, setOpenModal] = useState(false);
  const [character, setCharacter] = useState<Characters>();

  function handleOpenModal(characterItem: Characters) {
    if (characterItem) {
      setCharacter(characterItem);
    }
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const nameHouseSave = (saveNameHouse: CharactersHouse) => {
    setNameHouse(saveNameHouse);
  };

  const getCharactersHouses = () => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${nameHouse}`)
      .then(function (response) {
        setCharactersList(response.data);
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
    <div className="w-full min-h-screen bg-fixed h-full bg-center bg-cover bg-charactersBackground">
      <Modal openModal={openModal} handleCloseModal={handleCloseModal}>
        <div className="flex w-full justify-center">
          {character?.image ? (
            <img
              className="rounded-lg mt-2 w-52"
              src={character?.image}
              alt="Foto do Bruxo"
            />
          ) : (
            <img
              className="rounded-lg mt-2 w-52"
              src={Dobby}
              alt="Foto do Bruxo"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 items-center font-bold mt-4">
          <p>{character?.name}</p>
          {character?.alive === true ? "Esta vivo" : "Morreu"}
          <p>Cor do olhos: {character?.eyeColour}</p>
          <p>Cor do cabelo: {character?.hairColour}</p>
          <p>Casa: {character?.house}</p>
          {character?.hogwartsStudent === true
            ? "Estuda em Hogwarts"
            : "Nao estuda em Hogwarts"}
        </div>
      </Modal>
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
          className="flex flex-col items-center gap-4 bg-yellow-700 opacity-80 font-bold w-1/4 p-4 rounded-lg text-white hover:opacity-100"
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
      <div className="grid grid-cols-4 gap-4 p-6">
        {charactersList?.map((character) => (
          <div className="flex items-start justify-center text-white text bg-black bg-opacity-30 p-4 border border-black rounded-md">
            <div className="flex flex-col gap-2 items-center justify-between">
              {character.image !== "" ? (
                <img className="rounded-lg h-44" src={character.image} />
              ) : (
                <img className="rounded-lg h-44" src={Dobby} />
              )}
              {character.name}
              {character.wand.wood !== "" && (
                <div className="flex gap-2 items-center">
                  <FaHatWizard /> {character.wand.wood}
                </div>
              )}
              {character.dateOfBirth !== "" && (
                <div className="flex gap-2 items-center">
                  <FaBirthdayCake />
                  <p>{character.dateOfBirth}</p>
                </div>
              )}
              {character.ancestry !== "" && (
                <div className="flex gap-2 items-center">
                  <GiHumanPyramid />
                  <p>{character.ancestry}</p>
                </div>
              )}

              <Button
                className="flex items-center justify-center gap-2 bg-black rounded-md text-white p-3 border border-white hover:bg-white hover:border-black hover:text-black hover:transition duration-200"
                icon={<MdOutlineDetails size={20} />}
                name="Mais detalhes"
                onClick={() => handleOpenModal(character)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
