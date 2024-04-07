import styled from "@emotion/styled"

type Props = {
    point ?: number,
}

export default function TemperatureBar({point=36.5}:Props){


    return(
        <>
            <Background>
                <Temperature point={point} />
                <VerticalDivider point={point} />
                <TemperatureText point={point}>{point}˚</TemperatureText>
            </Background>
        </>
    )
}



const Background = styled.div`
    position: relative;
    background-color: #D0D0D0;
    width: 90%;
    border-radius: 5px;
    height: 10px;
`

const Temperature = styled.div<{point:number;}>`
    position: absolute;
    width: ${({point})=> point+"%"};
    background-color: #000;
    border-radius: 5px;
    height: 10px;
    z-index: 2;
`

const TemperatureText = styled.p<{point:number}>`
    position: absolute;
    left: ${({point})=>(point-5)+"%"};
    top: 300%;
    font-weight: 600;
`

const VerticalDivider = styled.div<{point:number}>`
    position: absolute;
    left: ${({point})=> (point-1)+"%"};
    height: 200%;
    top: 100%;
    border: 1px solid #000;
`