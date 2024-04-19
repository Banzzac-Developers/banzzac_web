import MatchingTicket from "@components/matchingTicket";
import styled from "@emotion/styled";

function Payment() {
  const quantity: number[] = [1, 5, 10, 20, 30, 50];
  quantity.reverse();
  return (
    <>
      {quantity.map((v, i) => (
        <MatchingTicket
          key={i}
          quantity={v}
          isClcik={true}
          semiTitle={`매칭권 ${v}개`}
        ></MatchingTicket>
      ))}
    </>
  );
}

const Text = styled.div``;
export default Payment;
