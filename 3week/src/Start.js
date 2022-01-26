import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import App from "./App.css";
import { FaCircle } from "react-icons/fa"

const Start = (props) => {
    const history = useHistory();
    const list = props.list;
    const [rating, setRating] = useState(null);
    return (
        <Container>
            {list.map((day, index) => {
                const random = Math.floor(Math.random() * 5) + 1;
                return (
                    <Box className="list" key={index}>
                        {day}
                        <div>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label key={index+i}>
                                        <input
                                            type="radio"
                                            name="random"
                                            value={ratingValue}
                                        />
                                        <FaCircle
                                            className="star"
                                            color={ratingValue <= (random) ? "red" : "black"}
                                            size={35}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <Triangle onClick={() => { history.push({ pathname: "/detail", state: day }) }}
                            day={day}
                        >
                        </Triangle>
                    </Box>
                );
            })}
        </Container>
    );
};
const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        `;

const Box = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0px;
        width: 100%;
        `;

const Triangle = styled.div`
        appearance: none;
        background-color: transparent;
        border-color: transparent purple;
        width: 0px;
        height: 0px;
        border-top-width: 1rem;
        border-top-style: solid;
        border-bottom-width: 1rem;
        border-bottom-style: solid;
        border-left-width: 1.6rem;
        border-left-style: solid;
        color: rgb(255, 255, 255);
        cursor: pointer;
        `;




export default Start

