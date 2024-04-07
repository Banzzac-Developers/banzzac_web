import Navigator from "@layouts/Navigator";
import { Badge } from "@components/Badge/Badge";

export default function Profile() {
  return (
    <>
      <Badge txt="20대 중반" bold={true} />
      <Badge txt="많이걷는" bold={true} />
      <Badge txt="MBTI" />
      <Badge txt="39.5" gradient={true} />
      <Navigator />
    </>
  );
}
