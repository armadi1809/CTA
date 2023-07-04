import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import RouteCard from "./RouteCard";
import { Route } from "./interfaces/route";
import {
  B77_WEST_ID,
  B9_SOUTH_ID,
  B77_EAST_ID,
  B9_NORTH_ID,
  BX9_NORTH_ID,
  BX9_SOUTH_ID,
} from "./interfaces/stopIds";

const routesDetails: Route[] = [
  {
    name: "Home To Work",
    options: [
      {
        buses: [
          {
            busName: "77 West Bound",
            busStopId: B77_WEST_ID,
            busStopName: "Belmont/Broadway",
            lineNumber: "77",
          },
          {
            busName: "9 South Bound",
            busStopId: B9_SOUTH_ID,
            busStopName: "Lincoln/Ashland",
            lineNumber: "9",
          },
        ],
      },

      {
        buses: [
          {
            busName: "77 West Bound",
            busStopId: B77_WEST_ID,
            busStopName: "Belmont/Broadway",
            lineNumber: "77",
          },
          {
            busName: "X9 South Bound",
            busStopId: BX9_SOUTH_ID,
            busStopName: "Lincoln/Ashland",
            lineNumber: "X9",
          },
        ],
      },
    ],
  },
  {
    name: "Work To Home",
    options: [
      {
        buses: [
          {
            busName: "9 North Bound",
            busStopId: B9_NORTH_ID,
            busStopName: "Webster/Ashland",
            lineNumber: "9",
          },
          {
            busName: "77 East Bound",
            busStopId: B77_EAST_ID,
            busStopName: "Lincoln/Ashland",
            lineNumber: "77",
          },
        ],
      },
      {
        buses: [
          {
            busName: "X9 North Bound",
            busStopId: BX9_NORTH_ID,
            busStopName: "Ashland Fullerton",
            lineNumber: "X9",
          },
          {
            busName: "77 East Bound",
            busStopId: B77_EAST_ID,
            busStopName: "Lincoln/Ashland",
            lineNumber: "77",
          },
        ],
      },
    ],
  },
];

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h3 className="border rounded-md bg-slate-400 m-10 h-16 flex justify-center items-center">
          Hello Zizo, Select the route you are following to get estimates of the
          bus arrival times
        </h3>
        <div className="container mx-auto grid grid-cols-2 justify-items-center gap-3">
          {routesDetails.map((route) => (
            <RouteCard key={route.name} route={route}></RouteCard>
          ))}
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
