---
title: O ponteiro salta ou fica atrasado sobre o desenho
summary: O que fazer quando a cruz não segue o rato com suavidade, num computador mais antigo ou mais lento.
keywords: cursor a saltar, atraso do ponteiro, cruz lenta, cursor entrecortado, computador antigo, placa gráfica antiga, gráficos integrados, aceleração por hardware, ponteiro mais suave, portátil lento
from: 39dc9057
---

O CadCraft funciona no navegador (o CadCraft Studio também é uma vista de navegador), por isso nada nele é feito para uma placa gráfica ou outra. A cruz é desenhada pela aplicação, o que significa que só se pode mover tão depressa quanto a aplicação consegue desenhar uma imagem.

## Deixar o CadCraft reduzir os extras

1. Abra {{ui:Definições}} (a engrenagem no canto superior direito) e fique no separador {{ui:CadCraft}}.
2. Escolha {{ui:Ponteiro mais suave em computadores lentos}}.
3. Escolha {{ui:Ligado}}.

Com a opção ativa, é usada a cruz do próprio computador em vez da cruz desenhada e da caixa de seleção (e também a cruz de ecrã inteiro), e o objeto sob o ponteiro acende-se quando o ponteiro para, em vez de se acender enquanto se move. Os acertos a objetos, o rastreio e o elástico funcionam como antes.

{{ui:Automática}} é como o CadCraft começa: observa quanto tempo demoram as imagens enquanto move o ponteiro e liga esta opção sozinho quando se mantêm lentas durante alguns segundos. Avisa uma vez quando o faz. {{ui:Desligar}} mantém a cruz desenhada, seja qual for a velocidade.

## Se continuar lento

- Verifique se a aceleração por hardware está ativa no navegador: abra `chrome://gpu` (ou `edge://gpu`) num novo separador. Se as primeiras linhas disserem "Software only" ou "Disabled", o navegador está a desenhar sem a placa gráfica. Atualizar o controlador gráfico costuma resolver.
- Feche outros separadores e programas pesados, e experimente uma janela do navegador mais pequena.
- Diga-nos através de {{ui:Ajuda}}, {{ui:Comunicar um problema}}: indique se usa o navegador ou o CadCraft Studio, a versão, e o que a página gpu mostra.
