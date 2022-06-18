import styled from "styled-components";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosArrowForward, IoIosCamera } from "react-icons/io";
import { useState } from "react";

function Profile() {
  return (
    <Wrap>
      <Header>
        <div>
          <BiLeftArrowAlt size="25" />
        </div>
        <div>
          <p>프로필 수정</p>
        </div>
      </Header>
      <Article>
        <File>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5c9f919e94d71a2bab6d18d8/1578604998045-HYULPFF63SR5H2OZSDQ3/portrait-placeholder.png" />
          </div>
          <label htmlFor="file">
            <IoIosCamera className="camera" />
          </label>
          <input type="file" id="file" />
        </File>
        <Name>
          <input type="text" placeholder="닉네임" />
          <p>프로필 사진과 닉네임을 입력해주세요.</p>
        </Name>

        <Locate>
          <div>지역</div>
          <IoIosArrowForward />
        </Locate>
      </Article>
      <Footer>
        <button>완료</button>
      </Footer>
    </Wrap>
  );
}

const Wrap = styled.div`
  box-sizing: border-box;
  font-size: 14px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 15px;
  border-bottom: 1px solid #dadada;

  & div:last-child {
    width: 85%;
    text-align: center;
  }
`;

const Article = styled.article`
  padding: 16px;
`;

const File = styled.div`
  padding: 30px 0px;
  //border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: center;
  position: relative;

  & img {
    width: 130px;
    border-radius: 50%;
  }

  .camera {
    font-size: 35px;
    color: grey;
    background-color: white;
    border: 1px solid #dadada;
    border-radius: 50%;
    position: absolute;
    bottom: 35px;
    right: 110px;
  }

  & label {
    cursor: pointer;
  }
  & input[type="file"] {
    display: none;
  }
`;

const Name = styled.div`
  & input {
    border: 1px solid #dadada;
    outline: none;
    border-radius: 5px;
    text-align: center;
    margin: 10px 0;
    padding: 15px;
    width: 100%;
  }
  & p {
    text-align: center;
    margin-top: 10px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  position: absolute;
  width: 100%;
  bottom: 0;

  & button {
    width: 100%;
    height: 100%;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const Locate = styled.div`
  padding: 20px 0px;
  margin: 20px;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
  display: flex;
  justify-content: space-between;
`;

export default Profile;
