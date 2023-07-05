import { FC } from "react";
import { Route } from "./interfaces/route";
import RoutePrediction from "./RoutePrediction";
import { Button } from "./components/ui/button";

interface RouteModalProps {
  closeModal: () => void;
  route: Route;
}

const RouteModal: FC<RouteModalProps> = ({ route, closeModal }) => {
  return (
    <div className="fixed h-screen bg-black backdrop-blur-sm bg-opacity-30  z-10 inset-0 flex justify-center items-center">
      <div className="bg-white h-fit w-fit container mx-auto p-8 ">
        {route.options.map((option, i) => (
          <>
            <p className="col-span-2">Option {i + 1} </p>
            {option.buses.map((bus, i) => (
              <RoutePrediction
                key={i}
                stpid={bus.busStopId}
                stopName={bus.busStopName}
                rt={bus.lineNumber}
                busName={bus.busName}
              ></RoutePrediction>
            ))}
          </>
        ))}
        <Button className="mt-8" onClick={closeModal}>
          Close Modal
        </Button>
      </div>
    </div>
  );
};

export default RouteModal;
