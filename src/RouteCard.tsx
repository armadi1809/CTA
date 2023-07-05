import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import { Route } from "./interfaces/route";
import RouteModal from "./RouteModal";

interface RouteCardProps {
  route: Route;
}
const RouteCard: FC<RouteCardProps> = ({ route }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && (
        <RouteModal
          closeModal={() => setShowModal(false)}
          route={route}
        ></RouteModal>
      )}
      <Card className="w-28 md:w-48 lg:w-96">
        <CardHeader>
          <CardTitle>{route.name}</CardTitle>
          <CardDescription className="whitespace-pre-line">
            {route.options.map((option) =>
              option.buses.map(
                (bus, i) =>
                  bus.busName + (i === option.buses.length - 1 ? "\n" : " -> ")
              )
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          Click on the button below to see time predictions at your stops
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button
            onClick={async () => {
              setShowModal(true);
              // await onClickFetchTry();
            }}
          >
            Time Estimates
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default RouteCard;
