const context = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(context, {
  type: "doughnut",
  data: {
    labels: ["Credit Cards", "Home Loans", "Savings & Dividens", "Auto Loans", "Fees"], // Legends Names
    datasets: [
      {
        //Stats values
        data: [12.2, 6.4, 7.4, 29.4, 3.4],
        //Colors of the values:
        backgroundColor: [
          "rgba(242,213,77,255)",
          "rgba(245,190,63,255)",
          "rgba(159,31,126,255)",
          "rgba(155,219,217,255)",
          "rgba(31,159,148,255)"
        ]
      }
    ]
  },
  options: {
    plugins: {
      legend: false // Plugins object property to hide legends without hiding the labels
    },
    responsive: true,
    maintainAspectRatio: false,
      borderWidth : 0,
                hoverBorderWidth : 2,
                borderColor: 000000,
  }
});
