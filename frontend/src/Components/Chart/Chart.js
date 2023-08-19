import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const { assetss, liabilitiess } = useGlobalContext();

  const barData = {
    labels: assetss.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Assets",
        data: assetss.map((assets) => assets.amount),
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Liabilities",
        data: liabilitiess.map((liabilities) => liabilities.amount),
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  const pieData = {
    labels: ["Assets", "Liabilities"],
    datasets: [
      {
        data: [
          assetss.reduce((total, assets) => total + assets.amount, 0),
          liabilitiess.reduce((total, liabilities) => total + liabilities.amount, 0),
        ],
        backgroundColor: ["green", "red"],
      },
    ],
  };

  return (
    <ChartContainer>
      <ChartStyled
        style={{
          width: "680px",
          height: "350px",
          display: "flex",
        }}
      >
        <Bar data={barData} />
      </ChartStyled>
      <ChartStyled
        style={{
          display: "flex",
        }}
      >
        <Pie data={pieData} />
      </ChartStyled>
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ChartStyled = styled.div`
  padding: 1rem;
  width: 48%; /* Adjust width as needed */
`;


export default Chart;
