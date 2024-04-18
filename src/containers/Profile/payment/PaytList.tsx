import { TEST_EMAIL } from "@constants/index";
import styled from "@emotion/styled";
import { PaymentList } from "@models/profile";
import SvgSelector from "@components/Svg/SvgSelector";

type Props = {
  payList: PaymentList[];
};

function PayList({ payList }: Props) {
  return (
    <>
      {payList.map((data, i) => {
        return (
          <>
            <Container key={i}>
              <SvgSelector
                svg="payment"
                height={30}
                width={30}
                stroke={"#A86EFA"}
              />
              <Content>
                <Text fontSize={15} isTitle={true}>
                  매칭권{data.quantity}개
                </Text>
                <Date>{data.approvedAtStr}</Date>
              </Content>
            </Container>
          </>
        );
      })}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 47%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p<{ fontSize: number; isTitle: boolean }>`
  font-size: ${({ fontSize }) => fontSize + "px"};
  font-weight: 700;
  margin: ${({ isTitle }) => (isTitle ? "16px 0px 14px" : "0px 0px 3px")};
`;
const Date = styled.span`
  font-size: 12px;
  color: #424242;
  font-weight: 600;
`;

export default PayList;
