function bmiCalculator() {
  var feet = document.getElementById("feet").value;
  var inches = document.getElementById("inches").value;
  var lb = document.getElementById("lb").value;
  var result = ((parseFloat(lb)/(((parseFloat(feet) * 12) + parseFloat(inches)) * ((parseFloat(feet) * 12) + parseFloat(inches)))) * 703).toFixed(1);
  var h3 = document.createElement('h3');
  var answer = document.createTextNode(result);

  if(!isNaN(result)) {
       //set h5's id attribute to result variable
       h3.setAttribute('id', 'result');
       //append answer variable 
       h3.appendChild(answer);
       //grab flex box results and appenchild(h1)
       document.getElementById('flex-box-results').appendChild(h3);
  }
}

function reset() {
  document.getElementById('result').remove();
}