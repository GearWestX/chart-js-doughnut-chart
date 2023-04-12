# Doughnut chart | Kronoscode Financial Benefits

* Basic Doughnut graph using Chart.Js, JavaScript ES7 and custom CSS for sizing and centering

# To use it

* git clone this main repository and *badam tuss* see for yourself the chart with values and animations
* If you want to change the values take a look at the following code in the *script.js* file:
```

const myChart = new Chart(context, {
  type: "doughnut",
  data: {
    labels: ["Credit Cards", "Home Loans", "Savings & Dividens", "Auto Loans", "Fees"], 
    // This above assigns name to labels, each position with the following value
    datasets: [
      {
        //This below asigns the values to each label please refer to positions above
        data: [12.2, 6.4, 7.4, 29.4, 3.4],
        //To assign colors:
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
      legend: false // this Plugins object property hides legends without hiding the labels
    },
    responsive: true,
    maintainAspectRatio: false,
      borderWidth : 0,  // Customized to erase the default white border between values
                hoverBorderWidth : 2, // To asign a custom border when hovering to each value
                borderColor: 000000, // Color of the custom border , black btw
  }
});
```

# Additional Note

* Is not a complete page, the main purpose is to use the chart as a boiler plate or template to play around and for own purposes.


