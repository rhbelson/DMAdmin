

window.onload = function(){
document.getElementById("block_view").addEventListener("click", displayBlock);
document.getElementById("activity_view").addEventListener("click", displayActivity);


function displayBlock() {
	document.getElementById("myChart").style.display="none";
	document.getElementById("myChart2").style.display="block";
	myChart2.update();
}

function displayActivity() {
	document.getElementById("myChart").style.display="block";
	document.getElementById("myChart2").style.display="none";
	myChart.update();
}



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
var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Block 1", "Block 2", "Block 3", "Block 4", "Block 5","Block 6", "Block 7", "Block 8", "Block 9", "Block 10"],
        datasets: [{
            label: 'Committee Member Attendance By Activity',
            data: [25, 19, 13, 25, 14, 17,25, 19, 13, 25, 14, 17],
            //Red:
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
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
                'rgba(255, 99, 132, 0.2)',
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