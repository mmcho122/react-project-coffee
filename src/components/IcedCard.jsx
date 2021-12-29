import React from 'react';
import styled from 'styled-components';

// 부모한테 받는 것, 상속 받는 개념 ({icedData})
const IcedCard = ({coffeeData}) => {
    // const {title,description, ingredients} = icedData;
    return (
        // <div>
        //     <p>{icedData[0].title}</p>
        //     <p>{icedData[0].description}</p>
        //     <hr />

        //     <p>{icedData[1].title}</p>
        //     <p>{icedData[1].description}</p>
        //     <hr />
        // </div>icedData[0].title}

        <IcedCont>
            <h2>title: {coffeeData.title}}</h2>
            <p>description: {coffeeData.description}</p>
            
        </IcedCont>     
    );
};

export default IcedCard;

const IcedCont = styled.div`
     background-color: lightgrey;
     margin:  20px;
     padding: 10px;
     border-radius: 10px;

`