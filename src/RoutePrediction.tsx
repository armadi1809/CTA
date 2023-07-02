import { FC } from "react";
import { useQuery } from "react-query";
import { Loader2 } from "lucide-react";

interface RoutePredictionProps {
  rt: string;
  stpid: string;
  stopName: string;
}

const RoutePrediction: FC<RoutePredictionProps> = ({ rt, stpid, stopName }) => {
  const { isLoading, error, data } = useQuery([rt + stpid], () =>
    fetch(
      "/api" +
        new URLSearchParams({
          key: import.meta.env.VITE_API_KEY,
          rt: rt,
          stpid: stpid,
          format: "json",
        })
    ).then((res) => res.json())
  );
  console.log("Hereee", isLoading);
  const prediction =
    data["bustime-response"]?.prd.prdcdtn ||
    data["bustime-response"]?.error?.msg;
  return (
    <div className="flex justify-between items-center">
      <span>{stopName}</span>
      {isLoading ? <Loader2 /> : <span>{prediction}</span>}
    </div>
  );
};

export default RoutePrediction;
