import React, { useEffect, useState } from "react";

function Chatting(){
  const [state, setState] = useState({message:'', name:''}) // 입력받는 곳
  const [chat,setChat] =useState([]) //채팅 받는 곳 

  return (
    <div>
      <div> header </div>
      <div> chatting </div>
      <div> inputMSG</div>
      
    </div>

  );

}

export default Chatting;