import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {MdPlayArrow} from "react-icons/md";
import {FaCalendarCheck} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

function Chatting(){
    const params = useParams();
    const postId = params.postid;
    const user = useSelector((state) => state.user);
    const postDetail = useSelector((state) => state.post.post.detailPost);


    
    return (
        <>
            <HeaderDesign>{user.nickname}</HeaderDesign>
            
            <ProductInfo>
                <Img src={postDetail.postImg}/>
                <div>                
                <div style={{display:'flex'}}><p> 상태값 </p> 
                <p style={{marginLeft:'15px'}}> {postDetail.title}</p></div>
                <p style={{marginTop:'10px'}}> {postDetail.price}</p>
                </div>
                <BtnStyle><FaCalendarCheck size="15" style={{marginRight:"5px"}}/>예약하기</BtnStyle>
            </ProductInfo>
            
            <ChatBody>채팅바디</ChatBody>
            
            <FootterMenu>
                <ChattingInput></ChattingInput>
                <MdPlayArrow size="40" color="darkgray"/>
            </FootterMenu>
        </>
    )
}
export default Chatting;



const HeaderDesign = styled.div`
height: 50px;
border-bottom: 1px solid #AAAAAA;
display: flex;
align-items: center;
justify-content: center;
`;

const ChatBody = styled.div`
height: 645px;
`;

const ProductInfo = styled.div`
height: 100px;
border-bottom: 1px solid #AAAAAA;
display: flex;
justify-content: space-between;
align-items: center;
padding : 8px;
font-size: 12px;
`;

const BtnStyle = styled.button`
width: 90px;
height: 30px;
background-color: white;
border-radius: 5px;
border: 1px solid #aaaaaa;
display: flex;
align-items: center;
`;


const Img = styled.img` width: 80px; padding: 5px;`;

const FootterMenu = styled.div`
display: flex;
background-color: lightgray;
height: 50px;
align-items: center;
justify-content: space-evenly;
padding : 8px;
`;

const ChattingInput = styled.input`
height: 30px;
width: 320px;
border-radius: 20px;
border: 1px solid white;
`;
