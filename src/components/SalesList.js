
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

  const postList = useSelector((state) => state.post.postList);


  React.useEffect(() => {
  dispatch(loadSalseposts());
  }, [boardList])
  
  return (
    <div style={{padding : '8px', height:'450px', overflow:'scroll'}}>
      <SubTitle>판매 내역</SubTitle>
      {!(postList) ? <NotFound> 판매내역이 없어요</NotFound> :""}
      <div>
        {/* 위 디브에 온클릭 이벤트 걸어둘것! list.pistId */}
        {postList.sellList&&postList.sellList.map((list, index) => (
          <><CardBox className="card">
          <div style={{ display: "flex" }}>
            <Img src={list.postImg} />
            <TextArea>
              <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                {list.title}
              </span>
              <span style={{ fontSize: "12px", padding: "5px", color: "#AAAAAA" }}>
                {list.userLocation}
              </span>
              <span style={{ fontSize: "13px", padding: "5px", fontWeight: "bold" }} >
                {list.price}
              </span>
            </TextArea>
          </div>

          <AiOutlineMenu />
          {/* 거래완료 API */}
        </CardBox></> 

        ))}
      </div>
    </div>
  );
}

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;;
  height: 130px;
  padding: 15px;
  align-items: flex-start;
  border-bottom: 1px solid #AAAAAA;
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






const NotFound = styled.div`
display: flex;
height: 100px;
align-items: center;
justify-content: center;
`;


export default SalesList;
