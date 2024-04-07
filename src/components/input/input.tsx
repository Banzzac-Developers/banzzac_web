import styled from "@emotion/styled";

type Props = {
  title: string;
  placeholder: string;
  id: string;
  width: string;
};

export default function InputDefault({ title, id, placeholder, width }: Props) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <InputItem type="text" id={id} placeholder={placeholder} width={width} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #212121;
  line-height: 22px;
  padding: 0px 30px;
`;

const InputItem = styled.input<{ width: string }>`
  border: none;
  border-bottom: 2px solid #e0e0e0;
  width: ${({ width }) => {
    return width;
  }};
  line-height: 22px;
  font-size: 14px;
`;
