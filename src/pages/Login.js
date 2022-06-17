import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import { carrotLoginStatus } from "../redux/modules/user";
import { login } from "../shared/axios";
import { saveToken } from "../shared/localStorage";

function Login () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ref = {
    phone: useRef(null),
    password: useRef(null)
  }

  return (
    <Box>
      <HeaderBack />
      <Content>
        <em>안녕하세요!<br/>휴대폰 번호로 로그인 해주세요.</em>
        <p>휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요</p>
        <Form onSubmit={
          (e) => {
            e.preventDefault();
            const phoneNum = ref.phone.current.value;
            const password = ref.password.current.value;

            const data = {
              phoneNum, password
            };

            login(data).then((response) => {
              if (response.data.result) {
                alert("로그인 성공!");
                saveToken(response.data.token);
                dispatch(carrotLoginStatus(true));
                navigate("/");
              } else {
                alert("로그인 실패!");
              }
            });
          }
        }>
          <input type="text" placeholder="휴대폰 번호 (- 없이 숫자만 입력)" autoComplete="phone" ref={ref.phone} />
          <input type="password" placeholder="비밀번호" autoComplete="current-password" ref={ref.password} />
          <button>로그인</button>
        </Form>
      </Content>
    </Box>
  );
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

export default Login;