import '../public/css/listForm.css';
import styled from "styled-components";


import React, { useState } from "react";
import { loadConcernsposts } from '../redux/modules/post'
import { useSelector,  useDispatch } from 'react-redux';


function ConcernsList () {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
  
    React.useEffect(() => {
    dispatch(loadConcernsposts());
    })

    const postList = useSelector((state) => state.post.postList);
    console.log(postList);


    return (
        <div>
            <SubTitle>관심 목록</SubTitle>
            {!(postList) ? <NotFound> 판매내역이 없어요 </NotFound> : ""}
            {postList.likeList && postList.likeList.map((list, index) => (
                <div key={index}>
                    <><CardBox className="card" >
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
                    </CardBox></>
                </div>
            ))}
        </div>

    )
}


const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;;
  height: 130px;
  padding: 15px;
  align-items: flex-start;
  border-bottom: 1px solid #AAAAAA;
`;

const Img = styled.img`
  width: 100px;
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



export default ConcernsList;