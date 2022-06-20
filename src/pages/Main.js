import '../public/css/listForm.css';
import { AiFillHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

import MainItemList from '../components/MainItemList';
import MyPage from '../components/MyPage';

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from '../shared/localStorage';



function Main () {
  const navigate = useNavigate();
  const [pageState, setState] = useState(<MainItemList/>);
  const [homeBtnColor, setHomeBtnColor] = useState("black")
  const [myBtnColor, setMyBtnColor] = useState("#AAAAAA")
  const [titleWord, setTitle] = useState("성수동 2가");

  const logout = (e) => {
    removeToken();
    navigate("/start");
  }

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/start");
    }
  }, []);

  const homeButtonAction= ()=>{
    setTitle("성수동 2가"); 
    setHomeBtnColor("black");
    setMyBtnColor("#AAAAAA")
    setState(<MainItemList/>);
  }
  
  const myCarrotButtonAction = () =>{
    setTitle("나의 당근");
    setHomeBtnColor("#AAAAAA");
    setMyBtnColor("black")
    setState(<MyPage/>);

  }

  return (
    <div className="Wrap">
      <div className="TMenuBar"> 
      <span> {titleWord} </span>
      { titleWord === "나의 당근"?  <p onClick={logout} style={{cursor: "pointer"}}> 로그아웃 </p> : "" }
    </div>
        
        {pageState}

        <div className="BMenuBar"> 
          <div className="BMenuBox" onClick={()=>{homeButtonAction()}}>
            <AiFillHome size="30px" color={homeBtnColor}/>
            <p style={{color: homeBtnColor}}></p>HOME</div>
          <div className="BMenuBox" onClick={()=>{myCarrotButtonAction()}}>
            <BiUser size="40px" color={myBtnColor}/>
              <p style={{color: myBtnColor}}>MY Carrot</p> 
          </div>        
        </div>
    </div>
  )
}

export default Main;