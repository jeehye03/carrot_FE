import styled from "styled-components";

function StateTag (props) {
  return (
    <Span>태그</Span>
  )
}

const Span = styled.div`
  display: inline-block;
  padding: 10px;
  font-size: 24px;
  background-color: #444444;
  color: #FFFFFF;
`;

export default StateTag;