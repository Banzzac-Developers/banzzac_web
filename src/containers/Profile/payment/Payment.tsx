import MatchingTicket from "@components/matchingTicket";

function Payment() {
  const quantity: number[] = [1, 5, 10, 20, 30, 50];
  return (
    <>
      {quantity.map((v, i) => (
        <MatchingTicket
          key={i}
          quantity={v}
          isClcik={true}
          text1={`매칭권 ${v}개`}
        ></MatchingTicket>
      ))}
    </>
  );
}

export default Payment;
