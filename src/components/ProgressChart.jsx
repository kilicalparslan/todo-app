import { useProgressChart } from "../hooks/useProgressChart";

const ProgressChart = ({ completed, total }) => {
  useProgressChart(completed, total, "progressChart");
  return <div id="progressChart" className="w-32 h-32" />;
};

export default ProgressChart;
