import styled from "styled-components";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosArrowForward, IoIosCamera } from "react-icons/io";
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { storage } from "../shared/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { instance, loadProfile } from "../shared/axios";
import { useDispatch, useSelector } from "react-redux";
import { getCarrotUserInfo } from "../redux/modules/user";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userRedux = useSelector((state) => state.user);

  const [user, setUser] = useState({});

  const nickRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    if (userRedux.isLogin && userRedux.nickname !== "") {
      load();
    }
  }, [userRedux]);

  const load = async () => {
    try {
      const data = userRedux;
      nickRef.current.value = data.nickname;
      if (location.state) { // location.state 값이 있으면 data의 location 값을 바꿔준다
        data.location = location.state;
      }
      setUser(data);
    } catch (err) {
      console.log("에러 " + err);
    }
  }

  const selectFile = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      var img = document.getElementById("previewImage");
      img.setAttribute("src", e.target.result);
    }

    reader.readAsDataURL(e.target.files[0]);
  }

  const send = async () => {
    let data = {};

    const image = fileRef.current?.files[0];

    const _upload = ref(storage, `images/${image.name}`);

    const snapshot = await uploadBytes(_upload, image);
    const url = await getDownloadURL(_upload);

    data = {
      nickname: nickRef.current.value,
      userLocation: user.userLocation,
      userImg: url
    }
    console.log(data);

    const response = await instance.put("/api/user/edit", data);
    navigate("/");
  }

  const onClick = (e) => {
    send();
  }

  return (
    <Wrap>
      <Header>
        <div>
          <BiLeftArrowAlt size="25" onClick={() => navigate("/")} />
        </div>
        <div>
          <p>프로필 수정</p>
        </div>
      </Header>
      <Article>
        <File>
          <div>
            <img id="previewImage" src={user?.image} alt="profile" />
            {/* <img src="https://images.squarespace-cdn.com/content/v1/5c9f919e94d71a2bab6d18d8/1578604998045-HYULPFF63SR5H2OZSDQ3/portrait-placeholder.png" alt="profile" /> */}
          </div>
          <label htmlFor="file">
            <IoIosCamera className="camera" />
          </label>
          <input type="file" id="file" onChange={selectFile} ref={fileRef} />
        </File>
        <Name>
          <input type="text" placeholder="닉네임" ref={nickRef} />
          <p>프로필 사진과 닉네임을 입력해주세요.</p>
        </Name>

        <Link to={"/profile/location"}>
          <Locate>
            <div>{user?.userLocation}</div>
            <IoIosArrowForward />
          </Locate>
        </Link>
      </Article>
      <Footer>
        <button onClick={onClick}>완료</button>
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
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
  }

  .camera {
    font-size: 35px;
    color: grey;
    background-color: white;
    border: 1px solid #dadada;
    border-radius: 50%;
    position: absolute;
    bottom: 35px;
    left: 53%;
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
    padding: 20px;
    width: 100%;
  }
  
  & p {
    text-align: center;
    margin-top: 10px;
    color: #AAAAAA;
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
    background-color: ${props => props.theme.color.orange};
    color: ${props => props.theme.color.white};
  }
`;

const Locate = styled.div`
  padding: 30px 20px;
  margin-top: 50px;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default Profile;
