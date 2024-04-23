import ChatContainer from "@containers/chat";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Chat() {
  // const setSessionObject = (key: string, value: any) => {
  //   const serializedValue = JSON.stringify(value);
  //   sessionStorage.setItem(key, serializedValue);
  // };

  // // 세션 스토리지에서 객체를 가져오는 함수
  // const getSessionObject = (key: string) => {
  //   const serializedValue = sessionStorage.getItem(key);
  //   return JSON.parse(serializedValue!) as any; // 타입 단언을 사용하여 null이 아님을 보장
  // };

  // // 사용 예시
  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "john@example.com",
  // };

  // // 객체를 세션에 저장
  // setSessionObject("user", user);

  // // 세션에서 객체를 가져와서 사용
  // const storedUser = getSessionObject("user");
  // console.log(storedUser.name); // { id: 1, name: "John Doe", email: "john@example.com" }

  return (
    <>
      <SquareHeader
        title="채팅"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => {},
          },
        ]}
      />
      <ChatContainer />
      <Navigator />
    </>
  );
}
