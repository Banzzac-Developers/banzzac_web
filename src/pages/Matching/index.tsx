
import Navigator from "@layouts/Navigator";import RoundHeader from "@layouts/RoundHeader";
import useFetchCondition from "@hooks/mathcing/useFetchCondition";


export default function Matching() {
  const { data : conditionData, setData : setConditionData} = useFetchCondition();
  return (
    <>
      <RoundHeader conditionData={conditionData} setConditionData={setConditionData} />
      <Navigator/>
    </>
  );
}
