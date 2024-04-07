import KakaoMap from "@containers/search/KakaoMap";
import Navigator from "@layouts/Navigator";
import RoundHeader from "@layouts/RoundHeader";

export default function Search() {
  return (
    <>
      <RoundHeader />
      <KakaoMap />
      <Navigator />
    </>
  );
}
