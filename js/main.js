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
      console.log(dataGrafico3);

      // MILESTONE 1
      var dts1_1 = [{
        label: 'vendite',
        backgroundColor: '#273c75',
        data: dataGrafico1
      }];
      const graficoMilestone1 = new Grafico('primo-grafico', 'line', mesi, dts1_1);
      graficoMilestone1.creaGrafico();
      // MILESTONE 1

      // MILESTONE 2
      var agenti = [];
      var fatturati = [];
      var dts2_1 = [{
        label: 'vendite',
        backgroundColor: '#273c75',
        data: fatturati
      }];

      for (var agente in dataGrafico2.fatturato_by_agent.data) {
        agenti.push(agente);
        fatturati.push(dataGrafico2.fatturato_by_agent.data[agente]);
      }

      const grafico1Milestone2 = new Grafico('primo-grafico-m2', dataGrafico2.fatturato_by_agent.type, agenti, dts2_1);
      grafico1Milestone2.creaGrafico();

      const grafico2Milestone2 = new Grafico('secondo-grafico-m2', dataGrafico2.fatturato.type, agenti, dts2_1);
      grafico2Milestone2.creaGrafico();
      // MILESTONE 2

      // MILESTONE 3
      var dts3_1 = [{
        label: 'vendite',
        backgroundColor: '#273c75',
        data: dataGrafico3.fatturato.data
      }];
      const grafico1Milestone3 = new Grafico('primo-grafico-m3', dataGrafico3.fatturato.type, mesi, dts3_1);
      grafico1Milestone3.creaGrafico();

      var agenti3_2 = [];
      var fatturati3_2 = [];

      for (var agente in dataGrafico3.fatturato_by_agent.data) {
        agenti3_2.push(agente);
        fatturati3_2.push(dataGrafico3.fatturato_by_agent.data[agente]);
      }

      var dts3_2 = [{
        label: 'vendite',
        backgroundColor: '#273c75',
        data: fatturati3_2
      }];
      const grafico2Milestone3 = new Grafico('secondo-grafico-m3', dataGrafico3.fatturato_by_agent.type, agenti, dts3_2);
      grafico2Milestone3.creaGrafico();

      var dts3_3 = [{
        label: 'vendite',
        borderColor: '#273c75',
        data: dataGrafico3.team_efficiency.data.Team1
      },
      {
        label: 'vendite',
        borderColor: '#273c75',
        data: dataGrafico3.team_efficiency.data.Team2
      },
      {
        label: 'vendite',
        borderColor: '#273c75',
        data: dataGrafico3.team_efficiency.data.Team3
      }
    ];
    const grafico3Milestone3 = new Grafico('terzo-grafico-m3', dataGrafico3.team_efficiency.type, mesi, dts3_3);
    grafico3Milestone3.creaGrafico();
      // MILESTONE 3
    },
    error: function (err) {
      alert("Qualcosa è andato storto!");
    }
  });
// --------------------------------------CHIAMATA AJAX--------------------------------------



























// ------------------------------------CONSTRUCTOR GRAFICO------------------------------------
  function Grafico(DOM, tipologia, asseX, dts, colors, labelTitle) {
    this.DOM = DOM;
    this.tipologia = tipologia;
    this.asseX = asseX;
    this.dts = dts;
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
              datasets: this.dts
          },

          // Configuration options go here
          options: {}
      });
    }
  }
// ------------------------------------CONSTRUCTOR GRAFICO------------------------------------







});
