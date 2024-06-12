import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../Circles";
import ServiceSlider from "../../ServiceSlider";
import { fadeIn } from "../../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <Bulb />
    </div>
  );
};

export default Services;