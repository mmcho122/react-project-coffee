import React from "react"
// 자동 임포트
import styled from "styled-components";

const CoffeeHeader = () => {
    return (
        // <header>
        <HeaderCont>
            <HeaderTitle className={styled.title}>Coffee Site</HeaderTitle>
            <HeaderNav>
                <HeaderMenu href="#none">Iced</HeaderMenu>
                <HeaderMenu href="#none">Hot</HeaderMenu>
            </HeaderNav>
        </HeaderCont>
    );
};

export default CoffeeHeader;

//스타일 컴포넌트
const HeaderCont = styled.header`
    width: 100%;
    height: 70px;
    background-color: #333;
    color: beige;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: auto 100px;
`

const HeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-left: 50px;
`
const HeaderNav = styled.nav`
    margin-right: 20px;
    font-size: 20px;
`

const HeaderMenu = styled.a`
    margin-left: 10px;
`