import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Start from "./Start";
import Detail from "./Detail";



function App() {
  const [list, setList] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);
  return (
    <div className="App">
      <Container>
      <Route path = "/" exact>
        <Title>
       내 일주일은?
       <hr></hr>
        </Title>
        </Route>
        <Box>
          <Route path="/" exact>
          <Start list={list} />
          </Route>
          <Route path="/detail" component={Detail}/>
        </Box>
      </Container>
    </div>
  
    );
  };

  const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 70vh;
  margin: 5vh auto;
  padding: 3vh 0px 5vh 0px;
  border: 3px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 20px;
  `;

  const Title = styled.h2`
  color: slateblue;
  text-align: center;
  margin: auto;
  `;

  
  const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
  `;

  
  
  
export default App;