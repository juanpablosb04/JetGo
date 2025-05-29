document.addEventListener("DOMContentLoaded", function () {
  const cardBogota = document.getElementById("cardBogota");
  const cardNewYork = document.getElementById("cardNewYork");
  const cardDublin = document.getElementById("cardDublin");
  const cardValencia = document.getElementById("cardValencia");
  const buttonBogota = cardBogota.querySelector(".card-button");
  const buttonNewYork = cardNewYork.querySelector(".card-button");
  const buttonDublin = cardDublin.querySelector(".card-button");
  const buttonValencia = cardValencia.querySelector(".card-button");
  const buttonClassB = cardBogota.querySelector(".card-button i");
  const buttonClassN = cardNewYork.querySelector(".card-button i");
  const buttonClassD = cardDublin.querySelector(".card-button i");
  const buttonClassV = cardValencia.querySelector(".card-button i");

  let isExpanded = false;


  buttonBogota.addEventListener("click", function(){

    if(!isExpanded){

      cardNewYork.classList.add("collapsed");
      cardDublin.classList.add("collapsed");
      cardValencia.classList.add("collapsed");
      cardBogota.classList.add("expanded");
      buttonClassB.classList.remove("fa-arrow-right");
      document.getElementById("pBogota").innerHTML="<h4>Bogotá, la capital de Colombia, es una ciudad fascinante enclavada a 2.640 metros sobre el nivel del mar, en el altiplano andino. Con su mezcla de historia colonial, modernidad vibrante y cultura urbana, Bogotá es un destino turístico imprescindible para quienes buscan una experiencia auténtica, diversa y enriquecedora.</h4>";
      buttonClassB.classList.add("fa-arrow-left");

    } else{

      cardNewYork.classList.remove("collapsed");
      cardDublin.classList.remove("collapsed");
      cardValencia.classList.remove("collapsed");
      cardBogota.classList.remove("expanded");
      buttonClassB.classList.remove("fa-arrow-left");
      document.getElementById("pBogota").innerHTML="";
      buttonClassB.classList.add("fa-arrow-right");

    }

    isExpanded = !isExpanded;

  });

  buttonNewYork.addEventListener("click", function(){
    
    if(!isExpanded){

      cardBogota.classList.add("collapsed");
      cardDublin.classList.add("collapsed");
      cardValencia.classList.add("collapsed");
      cardNewYork.classList.add("expanded");
      buttonClassN.classList.remove("fa-arrow-right");
      document.getElementById("pNewYork").innerHTML="<h4>New York es una ciudad vibrante que nunca duerme, famosa por sus rascacielos, el Central Park y la Estatua de la Libertad. Es un centro global de arte, cultura, moda y gastronomía, ideal para quienes buscan energía urbana y diversidad en cada rincón.</h4>";
      buttonClassN.classList.add("fa-arrow-left");

    } else{

      cardBogota.classList.remove("collapsed");
      cardDublin.classList.remove("collapsed");
      cardValencia.classList.remove("collapsed");
      cardNewYork.classList.remove("expanded");
      buttonClassN.classList.remove("fa-arrow-left");
      document.getElementById("pNewYork").innerHTML="";
      buttonClassN.classList.add("fa-arrow-right");

    }

    isExpanded = !isExpanded;

  });

  buttonDublin.addEventListener("click", function(){
    
    if(!isExpanded){

      cardBogota.classList.add("collapsed");
      cardNewYork.classList.add("collapsed");
      cardValencia.classList.add("collapsed");
      cardDublin.classList.add("expanded");
      buttonClassD.classList.remove("fa-arrow-right");
      document.getElementById("pDublin").innerHTML="<h4>Dublín combina la calidez de su gente con una rica herencia cultural. Sus calles están llenas de historia, pubs tradicionales y música en vivo, mientras lugares como el Trinity College y el río Liffey aportan un aire literario y encantador a la ciudad.</h4>";
      buttonClassD.classList.add("fa-arrow-left");

    } else{

      cardBogota.classList.remove("collapsed");
      cardNewYork.classList.remove("collapsed");
      cardValencia.classList.remove("collapsed");
      cardDublin.classList.remove("expanded");
      buttonClassD.classList.remove("fa-arrow-left");
      document.getElementById("pDublin").innerHTML="";
      buttonClassD.classList.add("fa-arrow-right");

    }

    isExpanded = !isExpanded;

  });

  buttonValencia.addEventListener("click", function(){
    
    if(!isExpanded){

      cardBogota.classList.add("collapsed");
      cardNewYork.classList.add("collapsed");
      cardDublin.classList.add("collapsed");
      cardValencia.classList.add("expanded");
      buttonClassV.classList.remove("fa-arrow-right");
      document.getElementById("pValencia").innerHTML="<h4>Valencia es una joya mediterránea que mezcla modernidad y tradición. Con playas doradas, la futurista Ciudad de las Artes y las Ciencias, y su famosa paella, es un destino soleado perfecto para explorar, relajarse y saborear la cultura española.</h4>";
      buttonClassV.classList.add("fa-arrow-left");

    } else{

      cardBogota.classList.remove("collapsed");
      cardNewYork.classList.remove("collapsed");
      cardDublin.classList.remove("collapsed");
      cardValencia.classList.remove("expanded");
      buttonClassV.classList.remove("fa-arrow-left");
      document.getElementById("pValencia").innerHTML="";
      buttonClassV.classList.add("fa-arrow-right");

    }

    isExpanded = !isExpanded;

  });
  
});