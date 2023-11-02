import { Pie, PieChart } from "recharts";
import styles from "./PieChart.module.scss";
import crossLines from "./assets/crossLines.svg";
import clockDial from "./assets/clockDial.svg";

export default ({ data }) => {
  return (
    <section className={styles.container}>
      <img className={styles.crossLines} src={crossLines} />
      <img className={styles.clockDial} src={clockDial} />
      <PieChart width={180} height={180}>
        <Pie
          data={[{ value: 100 }]}
          dataKey="value"
          innerRadius={70}
          outerRadius={90}
          fill="#454545"
          stroke="none"
          isAnimationActive={false}
        />
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={90}
          cornerRadius={16}
          startAngle={90}
          endAngle={-270}
          fill="transparent"
          stroke="none"
        />
      </PieChart>
    </section>
  );
};
