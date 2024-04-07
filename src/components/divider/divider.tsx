import styled from "@emotion/styled";

type Props = {

    width?: string;
        
};

export default function DividerDefault( { width="342px" } : Props){
    return <Container width={width}></Container>;
};

const Container = styled.div<{width :string}>`
 width : ${({width})=>{return width}};

 border : 1px solid #E0E0E0 ;
`;