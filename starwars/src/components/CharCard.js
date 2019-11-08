import React from 'react';
import styled from "styled-components";

const CharCard = props => {
    return (
        <div>
            <div>
            {props.name}
            </div>
            <div>
            {props.gender}
            </div>
            <div>
            {props.mass}
            </div>
            
           

        </div>

    )
}

export default CharCard;