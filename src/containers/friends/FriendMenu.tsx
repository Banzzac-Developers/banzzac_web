import MenuPopup from "@components/Modal/MenuPopup";
import SvgSelector from "@components/Svg/SvgSelector";
import Text from "@components/Text";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";
import { SvgIcon } from "@models/index";
import { FontStyle } from "@utils/StyleUtil";
import EditFriendList from "./EditFriendList";
import { Friend } from "@models/friends";

const MenuItem = ({ txt, icon }: { txt: string; icon: SvgIcon }) => {
  return (
    <MenuItemContainer>
      <Text {...FontStyle(16, 500, 24, "#212121")}>{txt}</Text>
      <SvgSelector svg={icon} width={24} height={24} stroke="#212121" />
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  friendList: Friend[];
};

export default function FriendMenu({ friendList }: Props) {
  const { addModal } = useModal();

  const handleEditList = () => {
    addModal({
      type: "fullscreen",
      props: {
        contents: <EditFriendList friendList={friendList} />,
      },
    });
  };

  return (
    <MenuPopup
      pos={{ right: 16, top: 40 }}
      menuList={[
        {
          menu: <MenuItem txt="리스트 편집" icon="sort" />,
          handleClick: handleEditList,
        },
        {
          menu: <MenuItem txt="삭제한 친구" icon="userRemove" />,
          handleClick: () => {},
        },
        {
          menu: <MenuItem txt="차단친구" icon="userClose" />,
          handleClick: () => {},
        },
      ]}
    />
  );
}
