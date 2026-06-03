document.addEventListener("DOMContentLoaded", () => {
  //
  const listingsLineChart = document
    .getElementById("listingsLineChart")
    .getContext("2d");
  new Chart(listingsLineChart, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Postings",
          data: [120, 190, 300, 250, 400, 500, 450],
          borderColor: "#198754",
          backgroundColor: "rgba(25, 135, 84, 0.06)",
          borderWidth: 3,
          pointBackgroundColor: "#198754",
          pointRadius: 4,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", align: "end" },
      },
      scales: {
        y: { min: 100, max: 500 },
      },
    },
  });

  //
  const claimsDoughnutChart = document
    .getElementById("claimsDoughnutChart")
    .getContext("2d");
  new Chart(claimsDoughnutChart, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [
        {
          data: [65, 35],
          backgroundColor: ["#0d6efd", "#ffc107"],
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", align: "start" },
      },
      cutout: "65%",
    },
  });

  //
  const sellersBarChart = document
    .getElementById("sellersBarChart")
    .getContext("2d");
  new Chart(sellersBarChart, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Listings Metric",
          data: [12000, 19000, 15000, 22000, 18000, 25000],
          backgroundColor: "#0d6efd",
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", align: "end" },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
});
