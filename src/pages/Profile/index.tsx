import Navigator from "@layouts/Navigator";
import WalkingHistory from "@containers/Profile/WalkingHistory";
import MyProfile from "@containers/Profile/Profile";
import DividerDefault from "@components/Divider/divider";

export default function Profile() {
  return (
    <>
      <MyProfile />
      <DividerDefault width={"90%"} />
      <WalkingHistory />
      <Navigator />
    </>
  );
}
