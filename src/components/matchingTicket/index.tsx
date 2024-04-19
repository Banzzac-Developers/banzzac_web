import SvgSelector from "@components/Svg/SvgSelector";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import styled from "@emotion/styled";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import axios from "axios";

type Props = {
  semiTitle: String;
  eventDate?: String;
  afterPay?: boolean;
  quantity?: number;
  isClcik?: boolean;
};

function MatchingTicket({
  semiTitle,
  eventDate,
  afterPay = false,
  quantity = 1,
  isClcik = false,
}: Props) {
  const price: number = 1000;

  return (
    <>
      <StyledDiv>
        <Container>
          <SvgSelector
            svg="payment"
            height={30}
            width={30}
            stroke={"#A86EFA"}
          />
          <Content>
            <Text {...FontStyle(13, 670, 23, "#212121")}>{semiTitle}</Text>
            {afterPay && (
              <Text {...FontStyle(11, 600, 20, "#333")}>{eventDate}</Text>
            )}
          </Content>
        </Container>
        {isClcik && (
          <ButtonContainer
            onClick={() => {
              axios
                .post("http://localhost/api/payment/ready", {
                  quantity: quantity,
                  totalAmount: quantity * price,
                })
                .then(({ data }) => {
                  location.href = data.data.next_redirect_pc_url;
                });
            }}
          >
            ₩{quantity * price}
          </ButtonContainer>
        )}
      </StyledDiv>
      <Seperator height={3} />
      <DividerDefault width={"100%"} />
      <Seperator height={6} />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 50vw;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
  width: max-content;
`;

const ButtonContainer = styled.button`
  width: 15%;
  height: 25px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0.8px solid;
`;

export default MatchingTicket;
