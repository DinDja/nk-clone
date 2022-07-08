new Chart(document.getElementById("myChart_a"), {
    type: "doughnut",
    data: {
      labels: [
        "Team",
        "Advisors & Strategies",
        "Private sale",
        "IDO sale",
        "Liquidity",
        "Game incentives"
      ],
      datasets: [
        {
          data: [15, 10, 35, 15, 5, 20],
          backgroundColor: [
            "#ed804e",
            "#e14251",
            "#d047e4",
            "#77075d",
            "#ff457a",
            "#ff258b",
          ]

        }
      ]
    }
  });