import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Chat() {
  return (
    <>
      <Navigator>
        <SquareHeader title="채팅" headerIcons={["search", "setting"]} />
        chat
      </Navigator>
    </>
  );
}
