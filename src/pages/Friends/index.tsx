
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Friends() {
  return (
    <>
      <SquareHeader
        title="친구"
        headerIcons={["search", "friendAdd", "setting"]}
      />
     
      <Navigator />
      
      
    </>
  );
}
