
import "../public/css/listForm.css";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";


import React, { useState } from "react";
import { loadSalseposts } from '../redux/modules/post'
import { useSelector,  useDispatch } from 'react-redux';



function SalesList() {
  const [boardList, setBoardList] = useState();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // React.useEffect(() => {
  // dispatch(loadSalseposts());
  // }, [boardList])

  
  return (
    <div className="ContentsBox">
      <SubTitle>판매 내역</SubTitle>
      {/* {!(boardList) ? <NotFound> 판매내역이 없어요</NotFound> : */}
            <CardBox className="card">
            <div style={{ display: "flex" }}>
              <Img src="https://i.pinimg.com/564x/83/6b/5f/836b5fbea54ad957fbc397600ea072de.jpg" />
              <TextArea>
                <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                  귀엽고 깜찍한 죠르디에요
                </span>
                <span
                  style={{ fontSize: "12px", padding: "5px", color: "#AAAAAA" }}
                >
                  군자동
                </span>
                <span
                  style={{ fontSize: "13px", padding: "5px", fontWeight: "bold" }}
                >
                  30,000원
                </span>
              </TextArea>
            </div>
    
            <AiOutlineMenu/>
            {/* 거래완료 API */}
          </CardBox>
          <StateBox>
            <BMenuBox>예약중</BMenuBox>
            <BMenuBox>거래완료</BMenuBox>
          </StateBox>

      {/* } */}
      {/* 판매 리스트가 없을 때 삼항연산자로 표시하여 랜더   */}
    </div>
  );
}

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 130px;
  padding: 15px;
  align-items: flex-start;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 10px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const SubTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px dotted #aaaaaa;
  font-weight: bold;
`;

const StateBox = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 50px;
`;

const BMenuBox =styled.div`
width: 50%;
height: 50px;
border: 1px solid #AAAAAA;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column`;



const NotFound = styled.div`
display: flex;
height: 100px;
align-items: center;
justify-content: center;
`;


export default SalesList;
