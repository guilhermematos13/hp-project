import Logo from "../assets/logo-hp.png";
import { Button } from "../components/Button";

import GrifinoriaLogo from "../assets/gryffindor-logo.png";
import SonserinaLogo from "../assets/slytherin-logo.png";
import LufaLufaLogo from "../assets/hufflepuff-logo.png";
import CorvinalLogo from "../assets/ravenclaw-logo.png";

export const CharactersPage = () => {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-charactersBackground">
      <div className="flex items-center justify-between w-full h-14 bg-black gap-4">
        <img className="ml-4 h-14" src={Logo} alt="Logo Harry Potter" />
        <div>
          <label className="text-white font-bold text-2xl">
            Salão Principal
          </label>
        </div>
        <div></div>
      </div>
      <div className="flex w-full items-center justify-between p-6 gap-4">
        <Button className="flex flex-col items-center gap-4 bg-red-500 font-bold w-1/4 p-4 rounded-lg text-white">
          Grifinória
          <img className="h-60" src={GrifinoriaLogo} alt="Logo Grifinória" />
        </Button>
        <Button className="flex flex-col items-center gap-4 bg-green-800 font-bold w-1/4 p-4 rounded-lg text-white">
          Sonserina
          <img className="h-60" src={SonserinaLogo} alt="Logo Sonserina" />
        </Button>
        <Button className="flex flex-col items-center gap-4 bg-purple-800 font-bold w-1/4 p-4 rounded-lg text-white">
          Lufa-Lufa
          <img className="h-60" src={LufaLufaLogo} alt="Logo Lufa-Lufa" />
        </Button>
        <Button className="flex flex-col items-center gap-4 bg-blue-900  font-bold w-1/4 p-4 rounded-lg text-white">
          Corvinal
          <img className="h-60" src={CorvinalLogo} alt="Logo Corvinal" />
        </Button>
      </div>
    </div>
  );
};
