import RoundButton from "@components/Button/RoundButton";
import SquareButton from "@components/Button/SquareButton";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Chat() {
  return (
    <>
      <Navigator>
        <SquareHeader title="채팅" headerIcons={["search", "setting"]} />
        chat
        <SquareButton title="버튼" fill={false} state={2} />
        <RoundButton title="버튼" fill={true} state={0} />
      </Navigator>
    </>
  );
}
