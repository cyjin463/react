import React from "react";
import styled from "styled-components";
import './App.css';
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux"
import { loadWordFB, addWordFB } from "./redux/modules/redux_word";
import { db } from "./firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {

  const text1 = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(db);
    dispatch(loadWordFB());
  }, []);

  const addword = () => {
    dispatch(addWordFB({
       단어: (text1.current.value), 
       설명: (text2.current.value), 
       예시: (text3.current.value)
      }));
  }
  
  return (
    <div className="App">
      <Route exact path="/">
        <Container>
        <header><Btn onClick={() => { history.push("/word") }}>단어추가하기</Btn></header>
        <div style={{borderBottom: "3px solid black", margin:"auto"}}>
        <h1 style={{margin:"0px", paddingTop:"10px", width:"100%", height:"50px" }}>단어장</h1>
        </div>
          <Card></Card>
        </Container>
      </Route>

      <Route exact path="/Word" >
        <Container>
          <h2 style={{margin:"30px"}}>단어 추가하기</h2>
            <Crt>
               <div style={{margin:"15px auto"}}>
                 <p>
                   <label>단어</label> : <input type="text" ref={text1} />
                 </p>
                 <p>
                   <label>설명</label> : <input type="text" ref={text2} />
                 </p>
                 <p>
                   <label>예시</label> : <input type="text" ref={text3} />
                 </p>
                <button onClick={() => { history.push("/"); addword(); }}>추가하기</button>
                <button style={{margin:"20px"}} onClick={() => { history.push("/");}}>취소</button>
              </div>
            </Crt>
        </Container>
      </Route>
    </div>
  );
}

function Card() {
  const data = useSelector((state) => state.redux_word.word);
  // console.log(data);

  return (
    <>
      {data.map((list, i) => {
        return (
          <Cards key={i}>
            <div>
              <h5 style={{margin : "2px"}}>단어</h5>
              <div  style={{ fontSize: "30px" }}>{data[i].단어}</div>
            </div>
            <hr></hr>
            <div>
              <h5 style={{margin : "2px"}}>설명</h5>
              <div  style={{ fontSize: "30px" }}>{data[i].설명}</div>
            </div>
            <hr></hr>
            <div  style={{ color: 'skyblue' }}>
              <h5 style={{margin : "2px"}}>예시</h5>
              <div  style={{ fontSize: "30px" }}>{data[i].예시}</div>
            </div>
          </Cards>
        )
      })
      }
    </>
  )
}

const Container = styled.div`
max-width: 100%;
min-height: 100vh;
background-color: white;
color: black;
margin: 2px 5px ;
border: 3px solid black;
fontSize: 0px;
text-align: center;
pdding: 3px;
`;

const Cards = styled.div`
max-width: 300px;
height: 220px;
background: white;
padding: 20px;
margin: 20px auto;
border-radius: 5px;
border: 3px solid black;
text-align: left;
color: black;
`;

const Crt = styled.div`
  background : white;
  max-width: 300px;
  height: 250px;
  display : flex;
  color : black;
  margin: 40px auto;
  padding : 0px;
  font-weight : 600;
  font-size : 20px;
  border: 3px solid black;
`;

const Btn = styled.button`
float: right;
top: 0;
display: flex;
font-size: 15px;
font-weight: 600;
width: 100px;
height: 30px;
border: 3px solid; black;
background: white;
color: black;
padding: 4px 5px 5px 8px;

@media only screen and (max-width: 768px){
  width: 100%-80%;
}
@media only screen and (max-width: 2000px){
  width: 100%-80%;
  margin: 20px 30px;
}
`;

const Del = styled.button`
background: white;
color: black;
border: 1px solid black;
border-radius:
float: right;
`;

export default App;

    
{/* <a className="sc-crzoAE dUJBra" onClick={() => { history.push("/word"); }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2"
             baseProfile="tiny" viewBox="0 0 24 24" className="sc-iqAclL jibPFy" 
             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 
              .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 
              .071c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
            </svg>
          </a> */}
