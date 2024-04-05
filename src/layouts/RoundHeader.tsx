import SvgSelector from "@components/Svg/SvgSelector";
import TagDefault from "@components/Tag/TagDefault";
import styled from "@emotion/styled";

export default function RoundHeader() {
  return (
    <Header>
      <Wrapper>
        <SvgSelector svg={"dogFace"} width={24} height={24} stroke="#212121" />
        <div>
          <TagDefault txt="적용된 필터 없음" />
        </div>
      </Wrapper>
      <Wrapper>
        <SvgSelector svg={"face"} width={24} height={24} stroke="#212121" />
        <div>
          <TagDefault txt="적용된 필터 없음" />
        </div>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #212121;
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 4px 4px 0px #00000026;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;
