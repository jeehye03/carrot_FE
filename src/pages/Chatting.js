import "../public/css/chatting.css"

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import {AiOutlineCaretRight} from "react-icons/ai";


import io from 'socket.io-client';

const socket = io.connect('http://54.180.121.151',{
  cors :{origin:'http://54.180.121.151'}
});

//const socket = io.connect('http://localhost:4000');

function Chatting(){
  const user = useSelector((state) => state.user); // 유저 정보
  const navigate = useNavigate();
  const nickname = user.nickname;
  const userImg = user.userImg;
  const messageRef = useRef();

  const [chat,setChat] =useState([])  // 데이터가 실시간으로 쌓여서 출력하는 스테이트 받아서 뿌리는 건 쳇이야 
  const sellPInfo = useSelector((state) => state.post.post);


  useEffect(()=>{    //데이터 실시간으로 받는 곳 
    socket.on('chatting',({nickname, userImg, msg, time})=>{
      const addChat = {
        nickname : nickname,
        msg : msg,
        userImg: userImg,
        time : time
      }
      setChat((chat)=> chat.concat(addChat));   
    })
  },[])


  const cleanInput = () => {let input = document.getElementById('inputBox'); input.value="";}
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick();
      cleanInput();
    }
  };


  const handleOnClick = () =>{
    const msg =  messageRef.current.value;
    socket.emit('chatting', {nickname, userImg, msg});
    cleanInput();
 }

return (
    <div className="wrapper">
      
      <div className="userInfo"> 
        <div className="arrow" onClick={()=>{
          navigate(-1);
        }}><AiOutlineArrowLeft /></div>
        <label className="nickname">{user.nickname}</label>
      </div>
      
       <div className="saleList">
        <img src={user.userImg}/>
        <p style={{fontWeight:'bold'}}>판매중</p>
        <span className="productInfo">
          
          <p>{sellPInfo.title}</p>
          <p>{sellPInfo.price}원</p>
        </span>
        <button>예약하기</button>
      </div>
    
      <div className="chattingBody"> 
      {chat && chat.map((list, index) => (
        <>
          {list.nickname === user.nickname ?

            <div className="chattingList" style={{flexDirection : 'row-reverse'}}>
              <span className="profile">
                <span className="user">{list.nickname}</span>
                <img className="img" src={list.userImg} style={list.style} />
              </span>

              <span className="message" style={{background :'#FF7E36', color:'white'}}>
                {list.msg}</span>
              <span className="time">{list.time}</span>

            </div>
            :
            <div className="chattingList">

              <span className="profile">
                <span className="user">{list.nickname}</span>
                <img className="img" src={list.userImg} style={list.style} />
              </span>

              <span className="message" style={{background :'lightgray'}}>{list.msg}</span>
              <span className="time">{list.time}</span>

            </div>
          }
  
        </>
      ))}

      
      </div>

      <div className="inputArea"> 
        <span>
          <input type="text" className="chattingInput" ref={messageRef} 
                onKeyPress={handleOnKeyPress} id='inputBox'/>
          <AiOutlineCaretRight className="sendButton" onClick={handleOnClick}/>
        </span>
      </div> 
      
    </div>

  );

}

export default Chatting;