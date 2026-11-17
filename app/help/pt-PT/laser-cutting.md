---
title: Enviar um desenho para um laser
summary: Abra o painel Laser, escolha o que faz cada camada (cortar, marcar, gravar, preencher, imagem), pré-visualize os movimentos da cabeça, guarde o G-code em modo laser GRBL, ou envie-o a partir do navegador depois de enquadrar o trabalho.
keywords: laser, cortadora laser, gravadora laser, GRBL, G-code, gcode, gravar, preencher, dither, gravação de imagem, marcar, cortar, Web Serial, enquadrar o trabalho, potência, velocidade, passagens, LASER, LASERCUT, CNC
from: 72b56db0
---

O painel {{ui:Laser}} transforma as camadas de um desenho num programa para um laser que funciona com GRBL (a maioria dos controladores amadores e de pequenas oficinas, de díodo e de CO2). Escreva `LASER` (ou `LASERCUT`) e prima {{key:Enter}}, ou escolha {{ui:Laser…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. Nos estilos de friso, está no menu {{ui:Ficheiro}} e ao lado de {{ui:Imprimir}}. O painel abre por cima do desenho e fica aberto enquanto desenha: a pré-visualização acompanha cada alteração.

:::warning
Teste todas as definições primeiro numa sobra, use proteção ocular adequada ao seu laser, mantenha a tampa fechada onde existir uma, e nunca deixe um laser em funcionamento sem vigilância. Os números com que uma camada começa são valores de exemplo, não recomendações para qualquer material.
:::

## O que é enviado

O painel lê o modelo (não as folhas), nas camadas que estão ligadas e descongeladas:

- Linhas, arcos, círculos, polilinhas (os segmentos de arco continuam arcos), elipses e splines. Uma forma que termina onde começa conta como fechada.
- Os blocos são desmontados: um objeto na camada 0 dentro de um bloco vai com a camada da referência de bloco.
- Uma trama envia o seu contorno, por isso um logótipo tramado numa camada **Preencher** fica preenchido.
- Uma imagem (`IMAGEATTACH`) é gravada numa camada definida como **Gravar imagem**, quando está alinhada (não rodada nem inclinada) e o seu ficheiro está aberto no CadCraft.
- Texto, cotas, linhas de chamada, pontos e linhas de construção não são enviados; o painel indica quantos deixou de fora. Para gravar texto, desenhe as letras como formas ou faça-as tramas.

Os tamanhos são enviados em milímetros a partir das unidades do desenho (`UNITS`): um desenho em polegadas é multiplicado por 25.4. Um desenho sem unidades definidas é enviado com uma unidade para um milímetro. Marque {{ui:Apenas os objetos selecionados}} para enviar apenas parte do desenho.

## Escolher o que faz cada camada

Cada camada com algo nela é uma linha. {{ui:Faz}} define-a como **Cortar**, **Marcar**, **Gravar linhas**, **Preencher formas**, **Gravar imagem** ou **Não enviado**, com uma {{ui:Potência %}}, uma {{ui:Velocidade mm/min}} e um número de {{ui:Passagens}}. Cada alteração é um passo de anulação e fica guardada no desenho: DWG (todas as versões que o CadCraft guarda) e DXF mantêm as definições, por isso o desenho abre com elas da próxima vez. Outros programas abrem o ficheiro como antes e veem um bloco não utilizado chamado CADCRAFT_LASER (purgá-lo aí remove as definições).

- **Preencher** queima o interior das formas fechadas em linhas, espaçadas de {{ui:Espaçamento entre linhas}}, num {{ui:Ângulo}}, nos dois sentidos ou num só, com um excesso de percurso para que a cabeça esteja na velocidade quando o laser liga; o preenchimento cruzado acrescenta uma segunda passagem a 90°. Uma forma com um furo fica aberta nesse furo.
- **Gravar imagem** transforma uma imagem em pontos (Floyd–Steinberg, Atkinson, ordenado, ou simples preto e branco com um limiar) ou, com *Níveis de cinzento*, em potência variável.
- Ordem: primeiro imagens e preenchimentos, depois gravação de linhas, depois marcas e por fim cortes, para que uma peça recortada não se mova enquanto é gravada. Dentro de uma camada, os percursos são feitos **de dentro para fora** (um furo antes da chapa em que está), com o mais próximo a seguir.

## Pré-visualizar e guardar

A pré-visualização desenha o que a cabeça faz: linhas de gravação a cores, movimentos rápidos a cinzento, e uma caixa verde à volta de tudo o que queima. Por baixo estão o tamanho, o comprimento de queima e uma estimativa de tempo (sem aceleração; uma máquina real demora mais). {{ui:Guardar G-code…}} escreve G-code de modo laser GRBL: `$32=1`, `M4` (ou `M3`) com valores S, movimentos `G0` e `G1`, e `M5` no fim. X0 Y0 é o canto inferior esquerdo do trabalho, a menos que escolha a origem do desenho: defina aí o zero de trabalho da sua máquina.

## Enviar a partir do navegador

No Chrome e no Edge, {{ui:Ligar…}} pede que escolha a porta USB do laser. Nada se liga nem envia até premir um botão. Prima primeiro {{ui:Enquadrar o trabalho}}: a cabeça traça a caixa do trabalho com o laser **desligado** (ou com a potência baixa que definir para um apontador), para ver onde vai queimar. Só então {{ui:Enviar trabalho}} fica ativo, e volta a desligar-se se alterar alguma coisa. {{ui:Pausa}} mantém a cabeça parada, {{ui:Parar}} também a imobiliza, reinicia o controlador (o laser desliga-se) e envia `M5`. Onde o Web Serial não existe (Firefox, Safari, e o CadCraft Studio, que ainda não tem Web Serial) o painel oferece apenas guardar: guarde o G-code e envie-o com o programa do seu laser.

## Ainda não implementado

Ainda não implementado: formatos de outros controladores (Ruida, lasers Marlin, ficheiros de fabricantes), separadores e entradas e saídas de percurso, compensação de kerf, bibliotecas de materiais, eixos rotativo e Z, alinhamento por câmara, texto como contornos.
