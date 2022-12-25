import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/MainPage";
import "./input.css";
import { CharactersPage } from "./pages/CharactersPage";
import { SpellsPage } from "./pages/SpellsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
  {
    path: "/spells",
    element: <SpellsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
