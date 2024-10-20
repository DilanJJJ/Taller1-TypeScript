import { series } from './data.js';
var seriesTbody = document.getElementById('series-table');
function renderSeriesInTable(series) {
    var totalSeasons = 0;
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td class=\"series-name\">").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        totalSeasons += s.seasons;
    });
    var seasonsAverage = totalSeasons / series.length;
    var averageElement = document.createElement("tr");
    averageElement.innerHTML = "<td colspan=\"4\" class=\"text-center\"><strong>Seasons average: ".concat(seasonsAverage.toFixed(2), "</strong></td>");
    seriesTbody.appendChild(averageElement);
}
renderSeriesInTable(series);
