import styled from "@emotion/styled";
import { navList } from "@models/index";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Navigator({ children }: Props) {
  return (
    <>
      {children}
      <Container>
        <ul>
          {navList.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.route}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.nav`
  border: 1px solid #212121;
  padding: 5px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  position: absolute;
  width: calc(100% - (24px * 2));
  left: 24px;
  bottom: 7px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 600;
      color: #212121;
    }
  }
`;
