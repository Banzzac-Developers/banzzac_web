import { DoubleProfileImage, SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import Navigator from "@layouts/Navigator";
import mangu from '@assets/images/mangu.jpg'
import mangu2 from '@assets/images/mangu2.jpg'


export default function Matching() {
  return (
    <>
      <DoubleProfileImage size={42} border={3} img={mangu2} img2={mangu} left={30}/>
      <SingleProfileImage size={204} border={3.5} img={mangu2} borderColor="#ccc"/>
      <SingleProfileImage size={71} border={3} img={mangu} borderColor="#ccc"/>
      <Navigator>matching</Navigator>
    </>
  );
}
 