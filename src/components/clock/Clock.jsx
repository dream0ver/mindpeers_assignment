import PieChart from "../piechart/PieChart";
import "./Clock.scss";
import { chartData } from "../../util";

export default function Clock() {
  return (
    <section className="container-card">
      <h1>
        Flow Peaks <i className="info-icon" />
      </h1>
      <div className="chart-container">
        <span className="night">Night</span>
        <span className="morning">Morning</span>
        <span className="afternoon">Afternoon</span>
        <span className="evening">Evening</span>
        <PieChart data={chartData} />
      </div>
      <button>April</button>
    </section>
  );
}
