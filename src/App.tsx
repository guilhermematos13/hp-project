import { Button } from "./components/Button";
import Logo from "./assets/logo-hp.png";
import "./input.css";

function App() {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-mainBackground">
      <div className="flex items-center w-full h-14 bg-black gap-4">
        <img className="ml-4 h-14" src={Logo} alt="Logo Harry Potter" />
        <Button
          className="bg-black text-white h-14 p-4 hover:bg-white hover:text-black hover:transition duration-200"
          name="Personagens"
          type="button"
        />
        <Button
          className="text-white h-14 p-4 hover:bg-white hover:text-black hover:transition duration-200"
          name="Feitiços"
          type="button"
        />
      </div>
      <div className="flex flex-col items-end gap-36">
        <Button
          className="bg-white w-1/3 border-2 text-3xl opacity-80 font-bold border-black rounded-xl p-14 mr-32 mt-60 hover:bg-black hover:border-white hover:text-white hover:transition duration-200"
          type="button"
          name="Confira os Personagens"
        />
        <Button
          className="bg-white w-1/3 border-2 text-3xl opacity-80 font-bold border-black rounded-xl p-14 mr-32 hover:bg-black hover:border-white hover:text-white hover:transition duration-200"
          type="button"
          name="Confira os Feitiços"
        />
      </div>
    </div>
  );
}

export default App;
