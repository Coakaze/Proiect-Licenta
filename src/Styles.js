import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 98%;
bottom: 40px;
height: 20px;
font-size: 1.8rem;
opacity: 0.5;
z-index: 1;
cursor: pointer;
color: #0d6efd;
&:hover{
    color:#1c84e3;
    opacity: 0.9;
}
`;
