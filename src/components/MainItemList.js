import "../public/css/listForm.css";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMainposts } from "../redux/modules/post";

function MainItemList() {
  const dispatch = useDispatch();
  const [boardList, setBoardList] = useState();

  const mainPostList = useSelector((state) => state.post.postList);
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(loadMainposts());
  }, [boardList]);

  const navigate = useNavigate();
  return (
    <div className="MainListBox">
      {mainPostList.posts &&
        mainPostList.posts.map((list, index) => (
          <div key={index}>
            {user.userLocation === list.userLocation ? (
              <CardBox className="card">
                <div
                  style={{ display: "flex" }}
                  onClick={() => {
                    navigate("/detail/" + list.postId);
                  }}
                >
                  <Img src={list.postImg} />
                  <TextArea>
                    <span
                      style={{
                        fontSize: "15px",
                        marginBottom: "5px",
                      }}
                    >
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
                      {Number(list.price).toLocaleString("ko-KR")}원
                    </span>
                  </TextArea>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  ❤️ {list.likeNum}
                </div>
              </CardBox>
            ) : (
              ""
            )}
          </div>
        ))}

      <FixedButton>
        <AiFillPlusCircle
          size="60"
          color="#ff7E36"
          onClick={() => {
            navigate("/add");
          }}
        />
      </FixedButton>
    </div>
  );
}

const CardBox = styled.div`
  display: flex;
  padding: 15px;
  height: 130px;
  justify-content: space-around;
  border-bottom: 1px solid #aaaaaa;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 10px;
`;

const FixedButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 13%;
  right: 5%;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 10px;
`;

export default MainItemList;
