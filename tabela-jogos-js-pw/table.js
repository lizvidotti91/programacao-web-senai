// TABELA
var table = window.document.createElement('table');

table.style.margin = '0 auto';
table.style.width = '90vw';

var line = window.document.createElement('tr');

// TÍTULOS DA TABELA
var title1 = window.document.createElement('th');

title1.style.borderBottom = '3px solid white';
title1.style.color = 'white';
title1.style.fontFamily = 'Arial';
title1.style.fontSize = '4vh';
title1.style.letterSpacing = '4px';

var title2 = window.document.createElement('th');

title2.style.borderBottom = '3px solid white';
title2.style.color = 'white';
title2.style.fontFamily = 'Arial';
title2.style.fontSize = '4vh';
title2.style.letterSpacing = '4px';

var title3 = window.document.createElement('th');

title3.style.borderBottom = '3px solid white';
title3.style.color = 'white';
title3.style.fontFamily = 'Arial';
title3.style.fontSize = '4vh';
title3.style.letterSpacing = '4px';

var title4 = window.document.createElement('th');

title4.style.borderBottom = '3px solid white';
title4.style.color = 'white';
title4.style.fontFamily = 'Arial';
title4.style.fontSize = '4vh';
title4.style.letterSpacing = '4px';

var title5 = window.document.createElement('th');

title5.style.borderBottom = '3px solid white';
title5.style.color = 'white';
title5.style.fontFamily = 'Arial';
title5.style.fontSize = '4vh';
title5.style.letterSpacing = '4px';

var title6 = window.document.createElement('th');

title6.style.borderBottom = '3px solid white';
title6.style.color = 'white';
title6.style.fontFamily = 'Arial';
title6.style.fontSize = '4vh';
title6.style.letterSpacing = '4px';

// CRIANDO TÍTULOS DA TABELA
var nomeTime = window.document.createTextNode('TIME');
var siteOficial = window.document.createTextNode('SITE OFICIAL');
var vitorias = window.document.createTextNode('VITÓRIAS');
var derrotas = window.document.createTextNode('DERROTAS');
var empates = window.document.createTextNode('EMPATES');
var pontos = window.document.createTextNode('PONTOS');

title1.appendChild(nomeTime);
title2.appendChild(siteOficial);
title3.appendChild(vitorias);
title4.appendChild(derrotas);
title5.appendChild(empates);
title6.appendChild(pontos);

line.appendChild(title1);
line.appendChild(title2);
line.appendChild(title3);
line.appendChild(title4);
line.appendChild(title5);
line.appendChild(title6);

table.appendChild(line);

app.appendChild(table);