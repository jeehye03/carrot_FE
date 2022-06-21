import '../public/css/listForm.css';
import styled from "styled-components";


import React, { useState } from "react";
import { loadSalseposts } from '../redux/modules/post'
import { useSelector,  useDispatch } from 'react-redux';


function ConcernsList () {
    const [boardList, setBoardList] = useState();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
  
    React.useEffect(() => {
    dispatch(loadSalseposts());
    }, [boardList])

    const mainPostList = useSelector((state) => state.post.postList);

    console.log(mainPostList);

    return (
        <div className="ContentsBox"> 
        <SubTitle>관심 목록</SubTitle> 
        {!(boardList) ? <NotFound> 관심 목록이 없어요</NotFound> :
            <CardBox className='card'>
            <div style={{display:'flex'}}>
                <Img src="https://velog.velcdn.com/images/eppo/post/2e1a14ff-f6cd-4f63-9cd1-330722065e62/image.png"/>
                <TextArea>
                    <span style={{fontSize : '15px', marginBottom: '5px'}}>귀엽고 깜찍한 춘식이 팔아요</span>
                    <span style={{fontSize : '12px', padding:'5px', color:'#AAAAAA'}}>군자동</span>
                    <span style={{fontSize : '13px', padding:'5px', fontWeight: 'bold'}}>30,000원</span>
                </TextArea>
            </div>
            <div style={{display:'flex', alignItems: 'center', width:'25px'}}>❤️</div>
            </CardBox>
        }

            {/* 관심목록이 없을 때 삼항연산자로 표시하여 랜더 */}

      </div>

        
    )
}


const CardBox = styled.div`
display:flex;
height : 130px;
padding: 15px 0px 15px 0px;
justify-content: space-around;
border-bottom: 1px solid  #AAAAAA;
`;

const Img = styled.img` width:100px; border-radius: 10px; `;


const TextArea = styled.div`
display: flex;
flex-direction: column;
padding: 10px
`;

const SubTitle = styled.div`
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px dotted #AAAAAA;
font-weight: bold;

`;


const NotFound = styled.div`
display: flex;
height: 100px;
align-items: center;
justify-content: center;
`;


export default ConcernsList;