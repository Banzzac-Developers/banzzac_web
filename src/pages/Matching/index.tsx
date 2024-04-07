
import Navigator from "@layouts/Navigator";
import MultiSlider from "@components/Slider/Slider";
import Twinkle from "@components/Twinkle/Twinkle";


export default function Matching() {

  return (
    <>
      <MultiSlider />
      <Twinkle avg={30} isClick={true}/>
      <Navigator>matching</Navigator>
    </>
  );
}
 