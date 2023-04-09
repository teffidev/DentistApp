import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DentistContextProvider } from "./context/DentistContext";
import { FavsContainer } from "./components/pages/Favs/Favs.container";
import { FooterContainer } from "./components/layouts/Footer/Footer.container";
import { NavbarContainer } from "./components/layouts/Navbar/Navbar.container";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import { HomeContainer } from "./components/pages/Home/Home.container";
import { DentistsContainer } from "./components/pages/Dentists/Dentists.container";
import { DentistDetailContainer } from "./components/pages/DentistDetail/DentistDetail.container";
import { ContactContainer } from "./components/pages/Contact/Contact.container";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <DentistContextProvider>
          <Routes>
            <Route element={<NavbarContainer />}>
              <Route element={<FooterContainer />}>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/dentists" element={<DentistsContainer />} />
                <Route
                  path="/dentistDetail/:id"
                  element={<DentistDetailContainer />}
                />
                <Route path="/contact" element={<ContactContainer />} />
                <Route path="/favs" element={<FavsContainer/>} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DentistContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
