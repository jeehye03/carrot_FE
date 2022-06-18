import '../shared/listForm.css';
import styled from "styled-components";
import { AiFillHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { BsReceipt } from 'react-icons/bs'


import { useNavigate } from "react-router-dom";

function MyPage () {
  return ( 
      <div className="ContentsBox"> 
        <div className='card'>
          <img src="https://velog.velcdn.com/images/eppo/post/2e1a14ff-f6cd-4f63-9cd1-330722065e62/image.png"/>
        </div>
      
      </div>
    )

}

const MyInfoBox = styled.div`
display: flex;
justify-content: space-around;
border-bottom: 1px solid #AAAAAA;
height: 150px;
}`;




const Img = styled.img` width:100px`;


export default MyPage;