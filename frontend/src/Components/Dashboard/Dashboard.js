import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalliabilitiess,
    assetss,
    liabilitiess,
    totalassets,
    totalBalance,
    getassetss,
    getliabilitiess,
  } = useGlobalContext();

  useEffect(() => {
    getassetss();
    getliabilitiess();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Chart</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="assets">
                <h2>Assets</h2>
                <p>${totalassets()}</p>
              </div>
              <div className="liabilities">
                <h2>Liabilities</h2>
                <p>${totalliabilitiess()}</p>
              </div>
              <div className="balance">
                <h2>Total Profit</h2>
                <p>${totalBalance()}</p>
              </div>
            </div>
          </div>
         
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        margin-left: 5rem;
        display: flex;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 3rem;
        .assets,
        .liabilities {
          grid-column: span 2;
        }
        .assets,
        .liabilities,
        .balance {
          display: inline-block;
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          p {
            font-size: 32px;
            font-weight: 700;
            display: inline-block;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          display: inline-block;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 32px;
            display: inline-block;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
