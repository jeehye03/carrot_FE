import '../shared/listForm.css';
import { AiFillHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import MainItemList from '../components/MainItemList';
import MyPage from '../components/MyPage';

import React, { useState } from "react";


function Main () {
  const [pageState, setState] = useState(<MainItemList/>);
  const [titleWord, setTitle] = useState("성수동 2가")

  return (
    <div className="Wrap">
        <div className="TMenuBar"> 
          <span> {titleWord} </span>
    </div>
        
        {pageState}

        <div className="BMenuBar"> 
          <div className="BMenuBox" onClick={() => { setTitle("성수동 2가"); 
                                                     setState(<MainItemList/>);}}>
            <AiFillHome size="30px"/>HOME</div>
          <div className="BMenuBox" onClick={() => { setTitle("나의 당근");
                                                     setState(<MyPage/>);}}>
            <BiUser size="40px" color="#AAAAAA"/>
              <p style={{color:"gray"}}>MY Carrot</p> 
          </div>        
        </div>
    </div>
  )
}



export default Main;