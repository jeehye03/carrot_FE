import React from "react";
import '../public/css/listForm.css';
import styled from "styled-components";


function SalesList () {
    const [boardList, setBoardList] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
    dispatch(loadMainposts());
    }, [boardList])
  


    return (
        <div className="ContentsBox"> 
        <SubTitle>판매 내역</SubTitle>
            <CardBox className='card'>
            <div style={{display:'flex'}}>
                <Img src="https://i.pinimg.com/564x/83/6b/5f/836b5fbea54ad957fbc397600ea072de.jpg"/>
                <TextArea>
                    <span style={{fontSize : '15px', marginBottom: '5px'}}>귀엽고 깜찍한 죠르디에요</span>
                    <span style={{fontSize : '12px', padding:'5px', color:'#AAAAAA'}}>군자동</span>
                    <span style={{fontSize : '13px', padding:'5px', fontWeight: 'bold'}}>30,000원</span>
                </TextArea>
            </div>

            <CBtn>거래완료</CBtn>
                     {/* 거래완료 API */}
            </CardBox>

            {/* 판매 리스트가 없을 때 삼항연산자로 표시하여 랜더   */}
      </div>
    )
}

const CardBox = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
height : 130px;
padding: 15px;
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

const CBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40px;
width: 70px;
border-radius: 10px;
background-color: #ff7E36;
color: white;
font-size: 12px;
font-weight: bold;

`;


export default SalesList;