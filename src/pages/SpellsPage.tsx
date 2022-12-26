import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-hp.png";

export const SpellsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-center bg-cover bg-spellsBackground">
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
    </div>
  );
};
