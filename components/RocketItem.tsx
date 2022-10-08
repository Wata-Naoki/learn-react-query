import React from "react";
import { Rocket } from "../types/types";

type Props = {
  rocket: Rocket;
};

export const RocketItem: React.FC<Props> = ({ rocket }) => {
  return (
    <li key={rocket.id}>
      <p className="my-3 font-bold">{rocket.name}</p>
      <span>
        {"->"}
        {rocket.mass.kg}
        {"[kg]"}
        {rocket.height.meters}
        {"[m]"}
        {rocket.diameter.meters}
        {"[m]"}
      </span>
    </li>
  );
};
