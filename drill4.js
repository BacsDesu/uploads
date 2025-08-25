let t = new Date();
document.write("<span style='color: white'>Todays Date" + t);

function calculateAverageGrade() {
  var subject1 = parseFloat(document.getElementById("subject1").value);
  var subject2 = parseFloat(document.getElementById("subject2").value);
  var subject3 = parseFloat(document.getElementById("subject3").value);
  var subject4 = parseFloat(document.getElementById("subject4").value);
  var subject5 = parseFloat(document.getElementById("subject5").value);

  if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
    alert("Please enter valid numeric values for all subjects.");
    return;
  }

  var sum = subject1 + subject2 + subject3 + subject4 + subject5;
  var averageGrade = sum / 5;

  
  alert("The average of the subjects is: " + averageGrade.toFixed(2));
}