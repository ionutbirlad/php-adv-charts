$(document).ready( () => {

  let mesi = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


// --------------------------------------CHIAMATA AJAX--------------------------------------
  $.ajax({
    url: 'http://localhost:8889/Esercizi_Boolean/22-04-2020/php-adv-charts/server.php',
    method: 'GET',
    success: function (data) {
      const grafico1 = new Grafico('primo-grafico', 'line', mesi, JSON.parse(data));
      grafico1.creaGrafico();
    },
    error: function (err) {
      alert("Qualcosa è andato storto!");
    }
  });
// --------------------------------------CHIAMATA AJAX--------------------------------------



























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
