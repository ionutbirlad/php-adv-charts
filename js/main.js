$(document).ready( () => {

// -------------prova-------------
  let arr = ["january"];
  let arr2 = ["8"];
// -------------prova-------------

  const grafico1 = new Grafico('primo-grafico', 'line', arr, arr2);
  grafico1.creaGrafico();

// ------------------------------------CONSTRUCTOR GRAFICO------------------------------------
  function Grafico(DOM, tipologia, asseX, dati) {
    this.DOM = DOM;
    this.tipologia = tipologia;
    this.asseX = asseX;
    this.dati = dati;
    this.creaGrafico = function () {
      var ctx = document.getElementById(this.DOM).getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: this.tipologia,

          // The data for our dataset
          data: {
              labels: this.asseX,
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: this.dati
              }]
          },

          // Configuration options go here
          options: {}
      });
    }
  }
// ------------------------------------CONSTRUCTOR GRAFICO------------------------------------







});
