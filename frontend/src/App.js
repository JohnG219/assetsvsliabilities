import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Assets from './Components/Assets/Assets'
import Liabilities from "./Components/Liabilities/Liabilities";
import { useGlobalContext } from './context/globalContext';
import History from './History/History';
import Form from './Components/Form/Form';
import LiabilitiesForm from './Components/Liabilities/LiabilitiesForm'

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <History />;
      case 3:
        return <Assets />;
      case 4:
        return <Liabilities />;
      case 5:
        return <Form />;
      case 6:
        return <liabilitiesForm />;
      default:
        return <Dashboard />;
    }
  }

 
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  position: relative;
  background-image: none;
  background-color: #fff;
  main {
    height: 100vh;
    flex: 1;
    background-color: #fff;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;


export default App;
