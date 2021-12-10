import { StyledContainer } from "./styled/Container.styled";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Step from "./components/Step";

function App() {
  return (
    <>
    <StyledContainer>
      <div className = "App">
      <Navbar />
      <Hero/>
      <Stats/>
      <Step/>
      </div>
    </StyledContainer>

    </>
  );
}

export default App;
