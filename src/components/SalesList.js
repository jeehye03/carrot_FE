import "../public/css/listForm.css";
import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

import { useEffect, useState } from "react";
import { changeTradeStateDB, loadSalseposts } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal";
import { deletePost } from "../redux/modules/post";

function SalesList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [boardList, setBoardList] = useState();

  const postList = useSelector((state) => state.post.postList);
  console.log(postList);
  const user = useSelector((state) => state.user); // 유저 정보

  // 현재 탭
  const NOW_SELL = 0;
  const COMPLETE_SELL = 1;
  const [tab, setTab] = useState(NOW_SELL);

  useEffect(() => {
    dispatch(loadSalseposts());
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <SubTitle>판매 내역</SubTitle>
      <SellMenu active={tab}>
        <button
          onClick={() => {
            setTab(NOW_SELL);
          }}
        >
          판매중
        </button>
        <button
          onClick={() => {
            setTab(COMPLETE_SELL);
          }}
        >
          거래완료
        </button>
      </SellMenu>
      {!postList ? <NotFound> 판매내역이 없어요</NotFound> : ""}
      <div>
        {/* 위 디브에 온클릭 이벤트 걸어둘것! list.pistId */}
        {postList.sellList
          ?.filter((post) => {
            if (tab === 0) {
              // 거래중
              return post.tradeState === "0" || post.tradeState === "1";
            } else if (tab === 1) {
              // 거래 완료
              return post.tradeState === "2";
            }
            return false;
          })
          .map((list, index) => (
            <Card key={index}>
              <CardBox className="card">
                <div style={{ display: "flex" }}>
                  <Img src={list.postImg} />
                  <TextArea>
                    <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                      {list.title}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        padding: "5px",
                        color: "#AAAAAA",
                      }}
                    >
                      {list.userLocation}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {list.tradeState === "1" && <span>예약중</span>}
                      {Number(list.price).toLocaleString("ko-KR")}원
                    </span>
                  </TextArea>
                </div>

                <AiOutlineMenu />
                {/* 거래완료 API */}
              </CardBox>
              <CardButton>
                {list.tradeState === "0" && (
                  <button
                    onClick={() => {
                      dispatch(changeTradeStateDB(list._id, "1")); // 예약으로 바꾸기
                    }}
                  >
                    예약중
                  </button>
                )}
                {list.tradeState === "1" && (
                  <button
                    onClick={() => {
                      dispatch(changeTradeStateDB(list._id, "0"));
                    }}
                  >
                    거래중
                  </button>
                )}
                {(list.tradeState === "0" || list.tradeState === "1") && (
                  <button
                    onClick={() => {
                      dispatch(changeTradeStateDB(list._id, "2"));
                    }}
                  >
                    거래완료
                  </button>
                )}
              </CardButton>
              <Modal open={modalOpen} close={closeModal} header="">
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
            </Card>
          ))}
      </div>
    </div>
  );
}


const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardButton = styled.div`
  display: flex;

  button {
    width: 50%;
    height: 50px;
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #ffffff;
    cursor: pointer;
  }

  button + button {
    border-left: 1px solid #ddd;
  }
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  padding: 15px;
  align-items: flex-start;
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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
`;

const SellMenu = styled.div`
  display: flex;

  button {
    border: none;
    width: 50%;
    box-sizing: border-box;
    display: block;
    padding: 20px 0;
    font-weight: bold;
    font-size: 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #ddd;
    color: #999;
    cursor: pointer;
  }

  // NOW_SELL
  ${(props) =>
    props.active === 0 &&
    css`
      button:first-of-type {
        border-bottom: 3px solid #333;
        color: #333;
      }
    `}

  // COMPLETE_SELL
  ${(props) =>
    props.active === 1 &&
    css`
      button:last-of-type {
        border-bottom: 3px solid #333;
        color: #333;
      }
    `}
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
