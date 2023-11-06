const records = require('./data.js')
const main = () => {

    const { data } = records;

  function diaMenosTitanes (data) {

    let frecuencia = {};

    for (let i = 0; i < data.length; i++) {

      let inicio = data[i][0];
      let fin = data[i][1];

      for (let dia = inicio; dia <= fin; dia++) {

        frecuencia[dia] = frecuencia[dia] ? frecuencia[dia] + 1 : 1;
      }
    }

    let minimo = {dia: null, frec: Infinity};

    for (let dia in frecuencia) {

      if (frecuencia[dia] < minimo.frec) {
        minimo.dia = dia;
        minimo.frec = frecuencia[dia];
      }
    }

    return minimo.dia;
  }
  console.log (diaMenosTitanes (data));
}
main();