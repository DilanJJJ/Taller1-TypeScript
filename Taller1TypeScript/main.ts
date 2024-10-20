import { series } from './data.js'; 
import { Serie } from './serie.js';  


const seriesTbody: HTMLElement = document.getElementById('series-table')!;

function renderSeriesInTable(series: Serie[]): void {
  let totalSeasons = 0;


  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td class="series-name">${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    totalSeasons += s.seasons;  
  });


  const seasonsAverage = totalSeasons / series.length;


  let averageElement = document.createElement("tr");
  averageElement.innerHTML = `<td colspan="4" class="text-center"><strong>Seasons average: ${seasonsAverage.toFixed(2)}</strong></td>`;
  

  seriesTbody.appendChild(averageElement);
}


renderSeriesInTable(series);