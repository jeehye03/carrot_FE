import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {MdPlayArrow} from "react-icons/md";
import {FaCalendarCheck} from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

import styled from "styled-components";

import io from 'socket.io-client';

function Chatting(){
    const socket =  io.connect('http://localhost:4000')
    
    const [state, setState] = useState({message:'', name:''})
    const [chat,setChat] =useState([])

    const user = useSelector((state) => state.user);
    const postDetail = useSelector((state) => state.post.post.detailPost);

    const params = useParams();
    const postId = params.postid;
    const userName = user.nickname;
    const navigate = useNavigate();


    // useEffect(() => {
    //     socket.on('message', ({ userName, message }) => {
    //         setChat([...chat, { userName, message }])
    //     })
    // }, [])

    // const onTextChange = e => {
    //     setState({ ...state, [e.target.name]: e.target.value })
    // }

    // const onMessageSubmit = (e) => {
    //     e.preventDefault()
    //     const { name, message } = state
    //     socket.emit('message', { name, message })
    //     setState({ message: '', name })
    // }

    // const renderChat = () => {
    //     return chat.map(({ name, message }, index) => (
    //         <div key={index}>
    //             <h3>{name}:<span>{message}</span></h3>
    //         </div>))
    // }

    
    return (
        <>
            <Header>
                <div> <BiLeftArrowAlt size="25" onClick={() =>  navigate(-1)} /></div>
                <div> <p>{user.nickname}</p> </div>
            </Header>
            
            <div style={{padding:'8px'}}>
            <ProductInfo>
                <Img src={postDetail.postImg}/>
                <div>                
                <div style={{display:'flex'}}><p> 상태값 </p> 
                <p style={{marginLeft:'15px'}}> {postDetail.title}</p></div>
                <p style={{marginTop:'10px'}}> {postDetail.price}</p>
                </div>
                <BtnStyle><FaCalendarCheck size="15" style={{marginRight:"5px"}}/>예약하기</BtnStyle>
            </ProductInfo>
            
            <ChatBody>
                <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                <MyTextArea>네고 안되나요?</MyTextArea> <br/></div>

                <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                    <img style={{width:'50px'}}src={user.userImg}/>
                    <ReceiveTextArea>안돼요</ReceiveTextArea>
                </div>
                
            </ChatBody>
            </div>
            <FootterMenu>
                <ChattingInput/>
                <MdPlayArrow size="40" color="darkgray"/>
            </FootterMenu>
        </>
    )
}
export default Chatting;


const MyTextArea = styled.div`
background-color: #FF7E36;
height: 30px;
border-radius: 20px;
color: white;
font-weight: bold;
font-size: 15px;
display: inline-block;
width: auto;
padding: 8px;
`;

const ReceiveTextArea = styled.div`
background-color: gray;
height: 30px;
border-radius: 20px;
color: white;
font-weight: bold;
font-size: 15px;
display: inline-block;
width: auto;
padding: 8px;
`;


const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 15px;
  border-bottom: 1px solid #dadada;

  & div:last-child {
    width: 85%;
    text-align: center;
  }
`;

const ChatBody = styled.div`
height: 610px;
margin-top: 20px;
overflow: scroll;
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
display:flex;
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
