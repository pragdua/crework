import { StyledContainer } from "./styled/Container.styled";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
    <StyledContainer>
      <div className = "App">
      <Navbar />
      <Hero/>
      </div>
    </StyledContainer>
    </>
  );
}

export default App;
