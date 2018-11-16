

window.onload = function(){
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Food", "Security", "Bathroom Runner", "Free", "Foot Massage"],
        datasets: [{
            label: 'Committee Member Attendance By Activity',
            data: [25, 19, 13, 25, 14, 17],
            //Red:
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(255,99,132,1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}