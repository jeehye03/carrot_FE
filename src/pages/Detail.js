import { BiLeftArrowAlt } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
// 이모티콘
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deletePost,
  postUnLike,
  carrotGetPost,
  postLike,
} from "../redux/modules/post";

import Modal from "../components/Modal";

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [heart, setHeart] = useState(false); // 찜하기
  const postDetail = useSelector((state) => state.post.post);
  const postPrice = Number(postDetail?.price);
  const params = useParams();
  const postId = params.postid;
  const user = useSelector((state) => state.user); // 유저 정보

  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //console.log(postDetail);
  // 금액 콤마(,) 찍어서 보여주기
  let carrotPrice = postPrice?.toLocaleString("ko-KR");

  useEffect(() => {
    dispatch(carrotGetPost(postId));
  }, [dispatch, postId]);

  const likeHeart = () => {
    if (postDetail.userLike) {
      dispatch(postUnLike(postId)); // userlike가 true면 false로 바꿔주라
    } else {
      dispatch(postLike(postId));
    }
  };

  return (
    <Wrap>
      <Header>
        <div>
          <BiLeftArrowAlt
            size={30}
            onClick={() => {
              navigate("/main");
            }}
          />
        </div>
        <div>
          <MdOutlineIosShare />
          {/* 모달창 열기 */}
          <FiMoreVertical onClick={openModal} />

          <Modal open={modalOpen} close={closeModal}>
            {user?.nickname === postDetail?.nickname ? (
              <ButtonWrap>
                <ButtonModify
                  onClick={() => {
                    navigate("/modify/" + postId);
                  }}
                >
                  수정
                </ButtonModify>
                <ButtonDelete
                  onClick={() => {
                    dispatch(deletePost(postId));
                    alert("삭제가 완료되었습니다. ");
                    navigate("/main");
                  }}
                >
                  삭제
                </ButtonDelete>
              </ButtonWrap>
            ) : (
              <Claim>신고하기</Claim>
            )}
          </Modal>
        </div>
      </Header>

      <div>
        <img src={postDetail?.postImg} alt="postImg" />
      </div>

      <Container>
        <ProfileBar>
          <Profile>
            <img src={postDetail?.userImg} alt="userImg" />
            <Nickname>
              <p>{postDetail?.nickname}</p>
              <p>{postDetail?.userLocation}</p>
            </Nickname>
          </Profile>

          <Ondo>
            <div>
              <p>{postDetail?.mannerOndo} °C </p>
              <FaRegSmile size={20} />
            </div>

            <p>매너온도</p>
          </Ondo>
        </ProfileBar>

        <Contents>
          <p>{postDetail?.title}</p>
          <p>{postDetail?.category}</p>
          <p>{postDetail?.content}</p>
          <p>관심 {postDetail?.likeNum}</p>
        </Contents>
      </Container>
      <Footer>
        <Heart>
          {postDetail?.userLike ? (
            <BsHeartFill size="35" color="red" onClick={likeHeart} />
          ) : (
            <BsHeart size="35" onClick={likeHeart} />
          )}
        </Heart>
        <Price>
          <div>
            <p>{carrotPrice}원</p>
            <p>가격 제안하기</p>
          </div>
          <button
            onClick={() => {
              navigate("/chatting/" + postId);
            }}
          >
            채팅하기
          </button>
        </Price>
      </Footer>
    </Wrap>
  );
}

const Wrap = styled.div`
  box-sizing: border-box;
  overflow-y:hidden;

  img {
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 16px 16px;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 16px 10px;
  color: gray;
  font-size: 23px;
  position: absolute;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #dadada;

  p {
    font-size: 13px;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //width: 180px;
  line-height: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  div > p:first-child {
    font-weight: 600;
    font-size: 16px;
  }
`;

const Nickname = styled.div`
  width: 180px;
  padding-left: 10px;
`;

const Ondo = styled.div`
  line-height: 20px;
  div {
    display: flex;
    justify-content: space-between;
    width: 80px;
    align-items: center;
  }
  & p:first-child {
    color: #6bb7e0;
    font-weight: 600;
    font-size: 15px;
  }
  & p:last-child {
    color: #aaa;
    text-decoration: underline;
  }
`;

const Contents = styled.div`
  padding-top: 35px;
  padding-bottom:70px;
  line-height: 30px;
  position:relative;
  

  & p:first-child {
    font-weight: 600;
  }
  & p:nth-child(2) {
    font-size: 13px;
    text-decoration: underline;
  }
  /* & p:nth-child(3) {
    margin-bottom: 50px;
  } */
  
  & p:last-child {
    font-size: 13px;
    
  }
`;

const Footer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  height: 70px;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #dadada;
`;

const Heart = styled.div`
  width: 20%;
  text-align: center;
  align-items: center;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 5px 16px;
  border-left: 1px solid #dadada;
  line-height: 25px;
  align-items: center;

  div :first-child {
    font-weight: 600;
  }
  div :last-child {
    color: #ff7e36;
    font-size: 14px;
  }
  button {
    background-color: #ff7e36;
    border: none;
    border-radius: 5px;
    width: 90px;
    height: 40px;
    color: white;
  }
`;

export default Detail;
