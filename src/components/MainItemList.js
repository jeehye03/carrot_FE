import '../shared/listForm.css';
import styled from "styled-components";
import { AiFillPlusCircle } from 'react-icons/ai';

function MainItemList () {
  return ( 
      <div className="ContentsBox"> 
        <CardBox className='card'>
          <div style={{display:'flex'}}>
            <Img src="https://velog.velcdn.com/images/eppo/post/2e1a14ff-f6cd-4f63-9cd1-330722065e62/image.png"/>
            <TextArea>
                <span>귀엽고 깜찍한 춘식이 팔아요</span>
                <span>군자동</span>
                <span>30,000원</span>
            </TextArea>
        </div>
        <div style={{display:'flex', alignItems: 'flex-end'}}>❤️</div>
        </CardBox>
        
        <FixedButton>
          <AiFillPlusCircle size="60" color='#ff7E36'/>
        </FixedButton>
      </div>
    )

}


const CardBox = styled.div`
display:flex;
padding: 15px;
justify-content: space-around;
border-bottom: 1px solid  #AAAAAA;
`;


const TextArea = styled.div`
display: flex;
flex-direction: column;
padding: 10px
`;

const FixedButton = styled.div`
display: flex;
position: fixed;
bottom: 13%;
right: 5%;
`;


const Img = styled.img` width:100px; border-radius: 10px; `;


export default MainItemList;