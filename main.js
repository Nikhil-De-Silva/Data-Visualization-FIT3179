// function declaration
function incrementCounter() {
    var spanElement= document.getElementById('counter');
    var count= spanElement.getAttribute('numberOfClicks');
    count++;
    spanElement.innerText= count;
    spanElement.setAttribute('numberOfClicks, count');
}
//script calls
document.getElementById('incrementButton').addEventListener('click', incrementCounter);

function toggleVisibility(){
    var chartImage=document.getElementById('Chart1')
    if (chartImage.style.display=='none'){
        chartImage.style.display= "block";
    }
    else {
        chartImage.style.display ="none";

    }
}