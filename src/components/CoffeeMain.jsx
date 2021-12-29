import React from 'react';
import styled from 'styled-components';
import IcedCard from './IcedCard';

const CoffeeMain = () => {
    // state 선언
    const coffeeData = [
        {
            "title": "Iced Coffee",
            "description": "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
            "ingredients": [
              "Coffee",
              "Ice",
              "Sugar*",
              "Cream*"
            ],
            "id": 1
          },
          {
            "title": "Iced Espresso",
            "description": "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
            "ingredients": [
              "Espresso",
              "Ice",
              "Sugar*",
              "Cream*"
            ],
            "id": 2
          },
          {
            "title": "Iced 귬님",
            "description": "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
            "ingredients": [
              "Espresso",
              "Ice",
              "Sugar*",
              "Cream*"
            ],
            "id": 3
          },
    ]

    return (
        <MainCont>
            <MainTit>메인 페이지</MainTit>
            {
                // map은 for문
                coffeeData.map((coffeeData)=>{
                    return (
                        // 자식 선언 - 데이터  자식한테 내려줘라!
                        // 상태관리 데이터 내려주는 방법!!
                        <IcedCard coffeeData={coffeeData}/>
                    )
                })
            }
        </MainCont>
    );
};

export default CoffeeMain;

const MainCont = styled.main`
    width: 80%;
    height: 500px;
    margin: 20px auto 0px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    padding: 20px;
`

const MainTit = styled.h2`
      line-height: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
`
