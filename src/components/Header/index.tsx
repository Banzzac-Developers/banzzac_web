import SvgSelector from "@components/Svg/SvgSelector";
import { HeaderIcon } from "@models/index";

const IconButton = ({ icon }: { icon: HeaderIcon }) => {
  switch (icon) {
    case "search":
      return (
        <button>
          <SvgSelector width={24} height={24} stroke="#212121" svg={"search"} />
        </button>
      );
    case "friendAdd":
      return (
        <button>
          <SvgSelector
            width={24}
            height={24}
            stroke="#212121"
            svg={"userAdd"}
          />
        </button>
      );
    case "setting":
      return (
        <button>
          <SvgSelector
            width={24}
            height={24}
            stroke="#212121"
            svg={"setting"}
          />
        </button>
      );
    default:
      return <div />;
  }
};

const Title = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const Header = { IconButton, Title };

export default Header;
