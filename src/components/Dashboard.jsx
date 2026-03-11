import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Views",
            data: [10, 25, 18, 30, 22, 40],
            borderColor: "blue",
            backgroundColor: "lightblue",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main className="dashboard-body">
      <div className="dashboard-box p-3">
        <div className="d-flex justify-content-between align-items-center pt-2 pb-2 mb-3 border-bottom flex-wrap">
          <h2>Dashboard</h2>

          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-light">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-light">
              Export
            </button>
          </div>
        </div>

        <canvas ref={chartRef} className="my-4 w-100" height="100"></canvas>
      </div>
    </main>
  );
};

export default Dashboard;
