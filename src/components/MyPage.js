import '../shared/listForm.css';
import styled from "styled-components";
import { MdArrowForwardIos } from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { BsReceipt } from 'react-icons/bs'

function MyPage () {
  return ( 
      <>
          <div className="ContentsBox">
              <MyInfoBox>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Img src="https://velog.velcdn.com/images/eppo/post/89789686-647d-4d2b-8e27-cac3b75d4cd4/image.png" />
                      <div style={{ padding: '40px' }}> 모모로 </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <MdArrowForwardIos size="25" color='black' />
                  </div>
              </MyInfoBox>

              <MyMenuMiddle>
                  <div><Circle><BsReceipt size="25" color='#ff7E36' /></Circle>판매내역</div>
                  <div><Circle><BsFillBasket2Fill size="25" color='#ff7E36' /></Circle>구매내역</div>
                  <div><Circle><AiFillHeart size="25" color='#ff7E36' /></Circle>관심목록</div>
              </MyMenuMiddle>

          </div>
      </>

    )

}

const MyInfoBox = styled.div`
display: flex;
justify-content: space-around;
border-bottom: 1px solid #AAAAAA;
height: 150px;
}`;

const MyMenuMiddle = styled.div`
height : 120px;
border-bottom: 1px solid #AAAAAA;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Circle = styled.div`
background-color: rgb(254, 237, 229);
width: 60px;
height: 60px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;

`;


const Img = styled.img` width:100px`;


export default MyPage;