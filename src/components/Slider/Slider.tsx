import { Box, Slider } from "@mui/material"
import { useState } from "react";

function valuetext(value: number) {
    return `${value}살`;
  }
const minDistance = 10;

type Props ={
    width : number,
    min?:number,
    max?:number
}

export default function MultiSlider( {width, max=100, min=0} :Props ){
    const [value1, setValue1] = useState<number[]>([min, max]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    const MIN = 0;
    const MAX = 100;
    const marks= [
        {
            value: MIN,
            label : '0세'
        },
        {
            value: MAX,
            label : '100세'
        }
    ]

    return(
    <Box sx={{width : {width}}}>
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color = "#000"
            step={10}
            marks = {marks}
            disableSwap
        />
    </Box>
    )
}
