import { Button } from "./components/Button";
import Logo from "./assets/logo-hp.png";
import "./input.css";

function App() {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-mainBackground">
      <div className="flex items-center w-full h-14 bg-black gap-4">
        <img className="ml-4 h-14" src={Logo} alt="Logo Harry Potter" />
        <Button
          className="bg-white text-black h-14 p-4 hover:bg-black hover:text-white hover:transition duration-200"
          name="Personagens"
          type="button"
        />
        <Button
          className="bg-white text-black h-14 p-4 hover:bg-black hover:text-white hover:transition duration-200"
          name="Feitiços"
          type="button"
        />
      </div>
    </div>
  );
}

export default App;
