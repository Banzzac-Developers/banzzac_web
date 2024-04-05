import { HeaderIcon } from "@models/index";

const IconButton = ({ icon }: { icon: HeaderIcon }) => {
  switch (icon) {
    case "search":
      return <button>검색</button>;
    case "friendAdd":
      return <button>친구추가</button>;
    case "setting":
      return <button>설정</button>;
    default:
      return <div />;
  }
};

const Title = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const Header = { IconButton, Title };

export default Header;
