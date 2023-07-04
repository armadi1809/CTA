import { FC } from "react";
import { useQuery } from "react-query";
import { Loader2 } from "lucide-react";

interface RoutePredictionProps {
  rt: string;
  stpid: string;
  stopName: string;
  busName: string;
}

const RoutePrediction: FC<RoutePredictionProps> = ({
  rt,
  stpid,
  stopName,
  busName,
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [rt + stpid],
    queryFn: async () => {
      const res = await fetch(
        "/api?" +
          new URLSearchParams({
            key: import.meta.env.VITE_API_KEY,
            rt: rt,
            stpid: stpid,
            format: "json",
          })
      );
      return await res.json();
    },
  });

  const response = data && data["bustime-response"];
  const prediction =
    response && response.prd ? response.prd[0].prdctdn : undefined;
  const errorMsg =
    response && response.error ? response.error[0].msg : undefined;
  return (
    <div className="flex justify-between items-center gap-2">
      <span>{busName + " " + stopName}</span>
      {isLoading ? <Loader2 /> : <span>{prediction || errorMsg}</span>}
    </div>
  );
};

export default RoutePrediction;
