---
title: O ponteiro salta ou atrasa sobre o desenho
summary: O que fazer quando a cruz não acompanha o mouse com suavidade, em um computador mais antigo ou mais lento.
keywords: cursor salta, atraso do ponteiro, cruz lenta, cursor travado, computador antigo, placa de vídeo antiga, gráficos integrados, aceleração de hardware, ponteiro mais suave, notebook lento
from: 39dc9057
---

O CadCraft roda no navegador (o CadCraft Studio também é uma visualização no navegador), então nada nele é feito para uma ou outra placa de vídeo. A cruz é desenhada pelo aplicativo, o que significa que ela só pode se mover tão rápido quanto o aplicativo consegue desenhar um quadro.

## Deixe o CadCraft reduzir os extras

1. Abra {{ui:Configurações}} (a engrenagem no canto superior direito) e permaneça na guia {{ui:CadCraft}}.
2. Escolha {{ui:Ponteiro mais suave em computadores mais lentos}}.
3. Selecione {{ui:Ligado}}.

Com essa opção ativada, o ponteiro de cruz do próprio computador é usado no lugar da cruz e da caixa de seleção desenhadas (inclusive a cruz em tela cheia), e o objeto sob o ponteiro acende quando o ponteiro para, em vez de enquanto se move. Snaps de objeto, rastreamento e elástico funcionam como antes.

{{ui:Automática}} é como o CadCraft inicia: ele observa quanto tempo levam os quadros enquanto você move o ponteiro e liga essa opção sozinho quando eles permanecem lentos por alguns segundos. Ele avisa uma vez quando faz isso. {{ui:Desligar}} mantém a cruz desenhada, qualquer que seja a velocidade.

## Se ainda estiver lento

- Verifique se a aceleração de hardware está ativada no navegador: abra `chrome://gpu` (ou `edge://gpu`) em uma nova guia. Se as primeiras linhas disserem "Apenas software" ou "Desativado", o navegador está desenhando sem a placa de vídeo. Atualizar o driver de vídeo costuma resolver.
- Feche outras guias e programas pesados e tente uma janela de navegador menor.
- Informe-nos por meio de {{ui:Ajuda}}, {{ui:Relatar um problema}}: diga se você usa o navegador ou o CadCraft Studio, a versão e o que a página gpu mostra.
