$(document).ready( () => {

  let mesi = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


// --------------------------------------CHIAMATA AJAX--------------------------------------
  $.ajax({
    url: 'http://localhost:8889/Esercizi_Boolean/22-04-2020/php-adv-charts/server.php',
    method: 'GET',
    success: function (data) {
      // console.log(JSON.parse(data));
      var dataGrafico1 = JSON.parse(data).milestone1;
      var dataGrafico2 = JSON.parse(data).milestone2;
      var dataGrafico3 = JSON.parse(data).milestone3;

      // GRAFICO 1
      const graficoMilestone1 = new Grafico('primo-grafico', 'line', mesi, dataGrafico1, '#273c75', 'vendite');
      graficoMilestone1.creaGrafico();
      // GRAFICO 1

      // GRAFICO 2
      var agenti = [];
      var fatturati = [];
      for (var agente in dataGrafico2.fatturato_by_agent.data) {
        agenti.push(agente);
        fatturati.push(dataGrafico2.fatturato_by_agent.data[agente]);
      }
      const graficoMilestone2 = new Grafico('secondo-grafico', dataGrafico2.fatturato_by_agent.type, agenti, fatturati, '#273c75', 'vendite');
      graficoMilestone2.creaGrafico();
      console.log(dataGrafico2);
      // GRAFICO 2
    },
    error: function (err) {
      alert("Qualcosa è andato storto!");
    }
  });
// --------------------------------------CHIAMATA AJAX--------------------------------------



























// ------------------------------------CONSTRUCTOR GRAFICO------------------------------------
  function Grafico(DOM, tipologia, asseX, dati, colors, labelTitle) {
    this.DOM = DOM;
    this.tipologia = tipologia;
    this.asseX = asseX;
    this.dati = dati;
    this.colors = colors;
    this.labelTitle = labelTitle;
    this.creaGrafico = function () {
      var ctx = document.getElementById(this.DOM).getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: this.tipologia,

          // The data for our dataset
          data: {
              labels: this.asseX,
              datasets: [{
                  label: this.labelTitle,
                  backgroundColor: this.colors,
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
