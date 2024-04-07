import styled from "@emotion/styled";

type Props = {
    width?: number;
    type? : string;    
};

export default function DividerDefault( { width=342, type="px" } : Props){
    return <Container width={width} type={type}></Container>;
};

const Container = styled.div<{width :number, type :string}>`
 width : ${({width,type})=>{return width+type}};
 border : 1px solid #E0E0E0 ;
`;