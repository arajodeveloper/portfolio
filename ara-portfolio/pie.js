window.onload = function() {
  var ctx = document.getElementById('chart-area').getContext('2d');
  var config = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [
          2,2,3,3,2

        ],
        backgroundColor: [
          'rgba(121, 220, 201, 1)',
          'rgba(240, 148, 214, 1)',
          'rgba(220, 121, 174, 1)',
          'rgba(179, 116, 180, 1)',
          'rgba(196, 228, 68, 1)',
        ],
        label: 'Dataset 1',
        pointStyle: 'circle',
      }],
      labels: [
        'Javascript',
        'CSS',
        'HTML',
        'React JS',
        'Ruby'
      ]

    },
    options: {
      responsive: true,
      legend: {
        labels: {
          usePointStyle: true,
          fontFamily: "BM YEONSUNG OTF",
          fontSize: 15,
          fontStyle: "bold"
        },
        position: 'right',
      },
      title: {
        display: true,
        text: "What I can do for you",
        fontFamily: "BM YEONSUNG OTF",
        fontSize: 30,
        fontStyle: "bold"


      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  };
  window.myDoughnut = new Chart(ctx, config);
};

// var ctx = document.getElementById('myChart').getContext('2d');
// var myDoughnutChart = new Chart(ctx, );
