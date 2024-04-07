import styled from "@emotion/styled";

type Props = {
    width?: number;    
};

export default function DividerDefault( { width=342 } : Props){
    return <Container width={width} ></Container>;
};

const Container = styled.div<{width :number}>`
 width : ${({width})=>{return width+"px"}};
 border : 1px solid #E0E0E0 ;
`;