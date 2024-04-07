
import Navigator from "@layouts/Navigator";
import MultiSlider from "@components/Slider/Slider";
import Twinkle from "@components/Twinkle/Twinkle";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";


export default function Matching() {

  return (
    <>
      <MultiSlider />
      <Twinkle avg={30} isClick={true}/>
      <TemperatureBar point={35.6}/>
      <Navigator/>
    </>
  );
}
