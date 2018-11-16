

/**
 * @param latLngInDeg array of arrays with latitude and longtitude
 *   pairs in degrees. e.g. [[latitude1, longtitude1], [latitude2
 *   [longtitude2] ...]
 *
 * @return array with the center latitude longtitude pairs in 
 *   degrees.
 */


window.onload = function(){
document.getElementById("block_view").addEventListener("click", displayBlock);
document.getElementById("activity_view").addEventListener("click", displayActivity);
document.getElementById("total_view").addEventListener("click", displayTotal);


function dataLoaded() {
	console.log("Data loaded");
}


function displayTotal() {
    document.getElementById("myChart").style.display="none";
    document.getElementById("myChart2").style.display="none";
    document.getElementById("myChart3").style.display="block";
    myChart3.update();
}


function displayBlock() {
	document.getElementById("myChart").style.display="none";
	document.getElementById("myChart2").style.display="block";
    document.getElementById("myChart3").style.display="none";
	myChart2.update();
	const Http = new XMLHttpRequest();
	const url='http://hinckley.cs.northwestern.edu/~rbi054/dm_info.txt';
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
	}
}

function displayActivity() {
	document.getElementById("myChart").style.display="block";
	document.getElementById("myChart2").style.display="none";
    document.getElementById("myChart3").style.display="none";
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

var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    // labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [100,114,106,106,107,171,173,191,180, 170],
        label: "NUDM Committee Members",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Number of Committee Members in Tent'
    }
  }
});







}