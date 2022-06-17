import HeaderBack from "../components/HeaderBack";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register () {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/start");
    }
  }, [])
  return (
    <Box>
      <HeaderBack />
      <Content>
        <em>안녕하세요!<br/>휴대폰 번호로 가입 해주세요.</em>
        <p>휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요</p>
        <Form>
          <input type="text" placeholder="휴대폰 번호 (- 없이 숫자만 입력)" autoComplete="phone"/>
          <input type="password" placeholder="비밀번호" autoComplete="current-password" />
          <input type="password" placeholder="비밀번호 확인" autoComplete="current-password" />
          <button>회원가입</button>
        </Form>
      </Content>
    </Box>
  )
}

const Box = styled.div``;

const Content = styled.div`
  padding: 40px 20px 0;

  em {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
  }

  p {
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    border: 1px solid #BBB;
    height: 50px;
    border-radius: 5px;
    padding: 0 10px;

    &::placeholder {
      color: #ccc;
    }
  }

  input + input {
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    height: 80px;
    border-radius: 5px;
    border: none;
    background-color: #DDD;
    font-size: 20px;
    color: #FFF;
  }
`;

export default Register;