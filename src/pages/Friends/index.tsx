import DividerDefault from "@components/divider/divider";
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
        friend
        <DividerDefault />
      </Navigator>
    </>
  );
}
