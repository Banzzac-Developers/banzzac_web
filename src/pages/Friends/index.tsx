import DividerDefault from "@components/divider/divider";
import InputDefault from "@components/input/input";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Friends() {
  return (
    <>
      <Navigator>
        <SquareHeader
          title="친구"
          headerIcons={["search", "friendAdd", "setting"]}
        />
        
        
        <InputDefault title={"아이디"} id={"name"} placeholder="8~30자리 영문" width="100%"/>
      </Navigator>
    </>
  );
}
