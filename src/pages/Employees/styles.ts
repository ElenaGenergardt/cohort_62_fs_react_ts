import styled from "@emotion/styled";

export const PageWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
flex: 1;
justify-content: center;
`;
export const Card = styled.div`
width: 590px;
height: 470px;
background-color:#ffffff;
border-radius: 4px;
padding: 60px;
display: flex;
flex-direction: column;
gap: 20px;
border: 1px solid #000000;
`;

export const Label = styled.p`
font-size: 14px;
color: #8f8f8f;
`;

export const Value = styled.p`
font-size: 16px;
color:black;
font-weight: bold;
`;