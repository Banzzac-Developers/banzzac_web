import RoundButton from "@components/Button/RoundButton";
import SquareButton from "@components/Button/SquareButton";
import Collapsible from "@components/Collapsible/Collapsible";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Chat() {
  return (
    <>
      <Navigator>
        <SquareHeader title="채팅" headerIcons={["search", "setting"]} />
        chat
        <SquareButton title="버튼" fill={false} backgroundColor="#212121" />
        <RoundButton title="버튼" fill={true} backgroundColor="#757575" />
        <Collapsible dogProfile={{ 
          name: "멍멍이", 
          profileImg: "/src/assets/images/mangu.jpg",
          age: "2살",
          weight: "5kg",
          gender: "수컷",
          neutered: false,
          size: "소형",
          breed: "푸들",
          personality: "활발함",
          activityLevel: "높음"
        }} />
      </Navigator>
    </>
  );
}
