const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');

const relogio = setInterval(function time() {
    debugger
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDay();
    let m = dateToday.getMonth();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (d == 0) d = 'Domingo';

    if (d == 1) d = 'Segunda-feira';

    if (d == 2) d = 'Terça-feira';

    if (d == 3) d = 'Quarta-feira';

    if (d == 4) d = 'Quinta-feira';

    if (d == 5) d = 'Sexta-feira';

    if (d == 6) d = 'Sábado';

    if (m == 0) m = 'Janeiro';

    if (m == 1) m = 'Fevereiro';

    if (m == 2) m = 'Março';

    if (m == 3) m = 'Abril';

    if (m == 4) m = 'Maio';

    if (m == 5) m = 'Junho';

    if (m == 6) m = 'Julho';

    if (m == 7) m = 'Agosto';

    if (m == 8) m = 'Setembro';

    if (m == 9) m = 'Outubro';

    if (m == 10) m = 'Novembro';

    if (m == 11) m = 'Dezembro';

    if (hr == '13' && min == '30' || hr == '15' && min == '00' || hr == '06' && min == '10') {
        m = 'VAI ORAR DAVI'

         }
    
    if (dia != d && mes != m) {
        dia.textContent = d;
        mes.textContent = m;
    }
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    
    
}
)
