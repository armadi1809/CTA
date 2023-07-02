import { FC } from "react";
import { Route } from "./interfaces/route";
import { useQuery } from "react-query";
import RoutePrediction from "./RoutePrediction";

interface RouteModalProps {
  closeModal: () => void;
  route: Route;
}

const RouteModal: FC<RouteModalProps> = ({ route }) => {
  return (
    <div className="fixed h-screen bg-black backdrop-blur-sm bg-opacity-30  z-10 inset-0 flex justify-center items-center">
      <div className="bg-white h-3/4 w-3/4">
        {route.options.map((option, i) => (
          <>
            <h1>Option {i} </h1>
            {option.buses.map((bus, i) => (
              <RoutePrediction
                key={i}
                stpid={bus.busStopId}
                stopName={bus.busStopName}
                rt={bus.lineNumber}
              ></RoutePrediction>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default RouteModal;
