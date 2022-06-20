import '../public/css/listForm.css';
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { loadMainposts } from '../redux/modules/post'


function MainItemList() {
  const dispatch = useDispatch();
  const [boardList, setBoardList] = useState();

  const mainPostList = useSelector((state) => state.post.postList);

  React.useEffect(() => {
    dispatch(loadMainposts());
  }, [boardList])

  console.log(mainPostList.posts);

  const navigate = useNavigate();
  return (
    <div className="MainListBox">
      {mainPostList.posts.map((list, index) => (
        <div key={index}>
          <CardBox className='card'>
            <div style={{ display: 'flex' }} onClick={() => { navigate("/detail"); }} >
              <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRYyqe0UK-hgDlo9JqT9oQJoVqiHCI3eQehb_HCgp8Q&s" />
              <TextArea>
                <span style={{ fontSize: '15px', marginBottom: '5px' }}>{list.title}</span>
                <span style={{ fontSize: '12px', padding: '5px', color: '#AAAAAA' }}>{list.userLocation}</span>
                <span style={{ fontSize: '13px', padding: '5px', fontWeight: 'bold' }}>{list.price}</span>
              </TextArea>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>❤️ {list.likeNum}</div>
          </CardBox>
        </div>
      ))}

      <FixedButton>
        <AiFillPlusCircle size="60" color="#ff7E36" onClick={() => { navigate("/add"); }}
        />
      </FixedButton>
    </div>
  );
}

const CardBox = styled.div`
display:flex;
padding: 15px;
height : 130px;
justify-content: space-around;
border-bottom: 1px solid  #AAAAAA;
`;

const TextArea = styled.div`

display: flex;
flex-direction: column;
width: 200px;
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
