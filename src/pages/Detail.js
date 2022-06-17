import { BiLeftArrowAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

function Detail() {
  return (
    <Wrap>
      <Header>
        <div>
          <BiLeftArrowAlt />
          <AiOutlineHome />
        </div>
        <div>
          <MdOutlineIosShare />
          <FiMoreVertical />
        </div>
      </Header>

      <div>
        <div>
          <img src="https://i.pinimg.com/564x/5d/37/c5/5d37c523b86d696f6210edd8c522365a.jpg" />
        </div>
      </div>

      <div>
        <Profile>
          <BsPersonCircle />
          <div>
            <span>모모로</span>
            <br />
            <span>성수동</span>
          </div>
        </Profile>
        <div>매너온도</div>
      </div>

      <div>
        <p>맥북</p>
        <span>새 상품 입니다.</span>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  box-sizing: border-box;

  & img {
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 16px 16px;
  color: white;
  font-size: 23px;
  position: absolute;
`;

const Profile = styled.div`
  display: flex;
`;

export default Detail;
