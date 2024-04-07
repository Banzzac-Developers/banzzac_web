import InputDefault from "@components/Input";

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
        <InputDefault
          title={"아이디"}
          id={"name"}
          placeholder="8~30자리 영문"
          width="100%"
        />
      </Navigator>
    </>
  );
}
