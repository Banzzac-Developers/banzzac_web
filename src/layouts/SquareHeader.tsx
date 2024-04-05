import Header from "@components/Header";
import styled from "@emotion/styled";
import { HeaderIcon } from "@models/index";

type Props = {
  title: string;
  headerIcons: HeaderIcon[];
};

export default function SquareHeader({ title, headerIcons }: Props) {
  return (
    <Container>
      <Header.Title title={title} />
      <div>
        <ul>
          {headerIcons.map((icon) => (
            <li key={icon}>
              <Header.IconButton icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 8px 20px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
`;
