import "../public/css/listForm.css";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

import React, { useState } from "react";

import { loadSalseposts } from '../redux/modules/post'
import { useSelector,  useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal";
import { deletePost } from "../redux/modules/post";


function SalesList() {
  const [boardList, setBoardList] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.post.postList);
  console.log(postList);
  const user = useSelector((state) => state.user); // 유저 정보

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    dispatch(loadSalseposts());
  }, [boardList]);

  return (

    <div style={{ padding: '8px', height: '450px', overflow: 'scroll' }}>
      <SubTitle>판매 내역</SubTitle>
      {!(postList) ? <NotFound> 판매내역이 없어요</NotFound> : ""}
      {postList.sellList && postList.sellList.map((list, index) => (
        <div key={index}>
          <CardBox className="card" >
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

            <AiOutlineMenu onClick={openModal} />
            <Modal open={modalOpen} close={closeModal} >
              {user.nickname === list.nickname ? (
                <ButtonWrap>
                  <ButtonModify
                    onClick={() => {
                      navigate("/modify/" + list.postId);
                    }}
                  >
                    수정
                  </ButtonModify>

                  <ButtonDelete
                    onClick={() => {
                      console.log(list.postId)
                      dispatch(deletePost(list.postId));
                      alert("삭제가 완료되었습니다. ");
                      navigate("/");
                    }}
                  >
                    삭제
                  </ButtonDelete>
                </ButtonWrap>
              ) : (
                <Claim>신고하기</Claim>
              )}
            </Modal>
          </CardBox>
        </div>
      ))}

    </div>

  );
}




const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  padding: 15px;
  align-items: flex-start;
  border-bottom: 1px solid #aaaaaa;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
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

// 모달 스타일
const ButtonModify = styled.button`
  width: 100%;
  height: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  /* margin-bottom: 1px; */
  background-color: whitesmoke;
  color: #6bb7e0;
  font-size: 13px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ButtonDelete = styled.button`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: whitesmoke;
  color: red;
  font-size: 13px;
`;


const Claim = styled(ButtonModify)`
  border-radius: 15px;
  color: red;
`;

export default SalesList;
