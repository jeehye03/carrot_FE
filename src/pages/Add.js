import styled from "styled-components";
import { IoIosClose, IoIosCamera, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Header>
        <IoIosClose
          size="25"
          onClick={() => {
            navigate("/");
          }}
        />
        <h4>중고거래 글쓰기</h4>
        <h5>완료</h5>
      </Header>

      {/* 사진업로드 */}
      <Container>
        <File>
          <label htmlFor="file">
            <IoIosCamera className="camera" />
          </label>
          <input type="file" id="file" />
        </File>

        <div>
          <Title>
            <input placeholder="글 제목" />
          </Title>

          <Kategorie>
            <div>카테고리 선택</div>
            <IoIosArrowForward />
          </Kategorie>

          <Locate>
            <div>지역</div>
            <IoIosArrowForward />
          </Locate>
        </div>

        <Price>
          <input type="text" placeholder="가격 [선택사항]" />
          <label htmlFor="price">
            <input type="radio" id="price" />
            가격 제안받기
          </label>
        </Price>

        <textarea
          cols="40"
          rows="5"
          placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될
          수 있어요.)"
        />
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  box-sizing: border-box;
  font-size: 13px;

  & input {
    font-size: 13px;
  }

  & textarea {
    margin-top: 45px;
    border: none;
    outline: none;
    resize: none;
  }
  & textarea::placeholder {
    color: #dadada;
    font-size: 13px;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 15px;
  border-bottom: 1px solid #dadada;

  & h4 {
    font-weight: 800;
  }
  & h5 {
    color: #ff7e36;
  }
`;
const Container = styled.div`
  padding: 0 16px;
`;

const File = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid #dadada;

  .camera {
    font-size: 35px;
  }
  & label {
    cursor: pointer;
  }
  & input[type="file"] {
    display: none;
  }
`;

const Title = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dadada;
  outline: none;
  & input {
    border: none;
    outline: none;
  }

  & input::placeholder {
    color: #dadada;
  }
`;
const Kategorie = styled(Title)`
  display: flex;
  justify-content: space-between;
`;

const Locate = styled(Title)`
  display: flex;
  justify-content: space-between;
`;

const Price = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Add;
