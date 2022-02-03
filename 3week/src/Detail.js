import React, { useState } from "react";
import { FaCircle } from "react-icons/fa"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import App from "./App.css";

const StarRating = ({ location }) => {
    // const random = Math.floor(Math.random() * 5) +1;
    // console.log(random)
    const day = location.state;
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const history = useHistory();
    return (
        
        <Container>
            <Border>
                <Day>
                    {day}요일
                </Day>
                평점 남기기
                <div style={{margin: "30px"}}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
            return (
            <label>
                <input 
                    type="radio"
                    name="random"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    
                />
                <FaCircle
                    className="star"
                    color={ratingValue <= (hover || rating) ? "red" : "black"}
                    size={35}
                    onMouseLeave={() => setHover(null)}
                />
            </label>
            );
            })}
        </div>
                <Btn onClick={() => { history.goBack(); }}>
                    평점 남기기
                </Btn>
                  </Border>
              </Container>
                )
            }
const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
  `;
const Border = styled.div`
    text-align: center;
    width 250px;
    margin: auto;
    `;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 250px;
  `;

const Circle = styled.div`
  width: 30px; 
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  display: flex;

  `;

const Btn = styled.button`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255)
    `;

const Day = styled.span`
    color: rgb(255, 255, 255);
    font-weight: 900;
    background: orange;
    padding: 0.2rem;
    border-radius: 5px;
    text-align: center;
    `;

  
export default StarRating;

    
        
 