import * as echarts from "echarts";
import { useEffect } from "react";

export const useProgressChart = (completed, total, chartId) => {
  useEffect(() => {
    const chartDom = document.getElementById(chartId);
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);
    const progressPercentage = (completed / total) * 100;

    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: "#8b5cf6",
            },
          },
          axisLine: {
            lineStyle: {
              width: 15,
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [
            {
              value: progressPercentage,
              detail: {
                show: false,
              },
            },
          ],
          title: {
            show: false,
          },
          detail: {
            show: false,
          },
          animation: false,
        },
      ],
    };

    myChart.setOption(option);

    const handleResize = () => myChart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [completed, total, chartId]);
};
