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
            label: "Sales",
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
    <main>
      <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3  border-bottom flex-wrap flex-md-nowrap">
        {/* Heading */}
        <h2 className="me-3">Dashboard</h2>

        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Share
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Export
          </button>
        </div>
      </div>
      <div className="container mt-4 ">
        <canvas ref={chartRef} className="my-4 w-100" height="100"></canvas>
      </div>
    </main>
  );
};

export default Dashboard;
