---
title: Primeiros pasos con CadCraft
summary: Para que serve a aplicación de debuxo CadCraft, onde funciona e o seu primeiro debuxo, desde unha pantalla en branco ata un ficheiro gardado.
keywords: comezar, primeiro debuxo, nova, abrir, gardar, gardar como, iniciar, titorial, introdución, inicio rápido
from: 1a56c575
---

CadCraft é unha aplicación de debuxo 2D. Debuxa e edita liñas, arcos, polilíñas, textos, cotas e bloques, prepara follas con cartelas e viewports, e tráceas a PDF. Abre debuxos DWG e DXF e gárdaos como DWG ou DXF.

Funciona no seu navegador web. Non hai nada que instalar: o sitio dáelle o enderezo, e toda a aplicación se carga na páxina. Os seus debuxos ábrense desde o seu propio ordenador e gárdanse de volta nel. **Non se envía nada.**

Se xa debuxou antes, lea [Se vén doutro programa de debuxo](topic:coming-from) despois desta páxina. A maioría dos hábitos valen igual, e os poucos que non se enumeran alí.

## Prefire que o guíen?

Escriba `TOUR` (ou prema {{ui:Faga o percorrido}} na tarxeta de inicio, ou {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Facer o percorrido de novo}}). Seis pasos curtos nunha caixa sobre o debuxo: debuxar unha liña e un círculo, movela, recortala, borrar algo e cotalo. Cada paso remata cando o fai, e pode saltar un paso ou todo o percorrido. Só arranca por si mesmo a primeira vez. A [folla de referencia](topic:cheat-sheet) ten os 40 comandos que máis vai usar, e o [mapa de comandos](topic:command-map), todos os comandos que hai.

## Do que precisa

- Un Chrome, Edge, Firefox ou Safari recente nun ordenador Mac, Windows ou Linux. Vexa [Navegadores e plataformas](common:browsers).
- Un rato con roda é o máis cómodo. Un panel táctil tamén funciona; vexa [Rato, panel táctil e tacto](topic:mouse-trackpad-touch).
- Un teclado. CadCraft manexase con comandos escritos, como a maioría dos programas de debuxo.

## A idea nun parágrafo

Escriba un comando (ou prema o seu botón), e a liña de comandos de abaixo fai preguntas unha a unha: «Seleccione o primeiro punto», «Seleccione o seguinte punto». Responde a cada pregunta facendo clic no debuxo ou escribindo un valor, e logo prema {{key:Enter}}. Premer {{key:Esc}} cancela. Ese é todo o modelo de interacción; o resto son detalles.

## O seu primeiro debuxo

Vai debuxar un rectángulo de 4000 por 3000 con liñas, pór un círculo no centro e gardar o ficheiro.

1. Abra CadCraft. A liña de comandos de abaixo amosa `Command:` e a área de debuxo amosa unha breve tarxeta «Comezar debuxo».
2. Escriba `L` e prema {{key:Enter}}. Non necesita facer clic antes na liña de comandos: escribir en calquera lugar vai alí.
3. O indicador cambia a `Specify first point:`. Escriba `0,0` e prema {{key:Enter}}.
4. Escriba `@4000,0` e prema {{key:Enter}}. Aparece unha liña que vai cara á dereita. O `@` significa «desde o último punto».
5. Escriba `@0,3000` e prema {{key:Enter}}.
6. Escriba `@-4000,0` e prema {{key:Enter}}.
7. Escriba `C` e prema {{key:Enter}}. `C` é a opción Pechar (C): a última liña volve ao primeiro punto e o comando remata.
8. Prema en {{ui:Extensións}} no grupo Vista da barra de ferramentas. O rectángulo enche a pantalla.

Agora debería ver catro liñas que forman un rectángulo, e o historial enriba da liña de comandos enumera o que escribiu.

9. Escriba `C` e prema {{key:Enter}} para iniciar o comando de círculo.
10. Escriba `2000,1500` e prema {{key:Enter}} para o centro.
11. Escriba `500` e prema {{key:Enter}} para o raio.

Aparece un círculo no centro do rectángulo.

12. Prema {{key:Mod+S}}, ou prema en {{ui:Gardar}} no grupo Ficheiro.

O navegador descarga `Drawing1.dwg` na súa carpeta habitual de Descargas, e o historial di que gardou unha copia como DWG. Ese ficheiro ábrese de novo en CadCraft, e na maioría dos outros programas CAD. (Se antes escolleu DXF en {{ui:Gardar como}} neste navegador, un debuxo novo gárdase como `Drawing1.dxf` no seu lugar.)

:::tip
Prema {{key:Enter}} nunha liña de comandos baleira para repetir o último comando. Prema {{key:Space}} no lugar de {{key:Enter}} se o prefire: fóra do texto, fai o mesmo.
:::

## Abrir un debuxo existente

1. Prema {{key:Mod+O}}, ou prema en {{ui:Abrir}}.
2. Escolla un ficheiro `.dwg` ou `.dxf` no selector de ficheiros.

Tamén pode arrastrar un ficheiro DWG ou DXF desde {{pick:mac=Finder|windows=File Explorer|linux=o seu xestor de ficheiros}} e soltalo na área de debuxo. O ficheiro lese na páxina; nunca sae do seu ordenador.

Vexa [Ficheiros: que se abre, que se garda](topic:files) para saber o que se conserva e o que se converte.

## Gardar: o que esperar

Gardar nun navegador funciona de xeito distinto a un programa de escritorio:

- {{ui:Gardar}} sempre **descarga unha copia nova**. Non sobrescribe o ficheiro que abriu. Se xa hai un ficheiro co mesmo nome na carpeta de Descargas, o navegador adoita engadir un número, como `Drawing1 (1).dwg`.
- {{ui:Gardar}} usa o formato do debuxo: DWG se abriu un DWG, DXF se abriu un DXF. Para escoller, prema {{key:Mod+Shift+S}} ou prema en {{ui:Gardar como}}, e logo escolla {{ui:DWG}} (e a súa versión), {{ui:DXF R12}} ou {{ui:DXF 2000}}. Vexa [Gardar](topic:files#saving).
- O ficheiro que abriu nunca se modifica.
- Abrir outro ficheiro, ou {{ui:Nova}}, pono na súa propia pestana sobre o debuxo, así que non se pecha nada do que ten aberto. Se pecha a pestana dun debuxo ou sae da páxina con cambios sen gardar, CadCraft pregunta antes: {{ui:Gardar unha copia primeiro}}, descartar ou {{ui:Cancelar}}. Pechar a pestana do navegador amosa en troques a pregunta propia do navegador «Saír do sitio?».

O gardado na nube aínda non está dispoñible. Onde van os seus ficheiros e por que seguen privados explícase en [Os seus ficheiros e a súa privacidade](common:your-files).

## Onde ir despois

Prema {{key:F1}} ou prema en {{ui:Axuda}} na barra superior para abrir esta axuda xunto ao debuxo en calquera momento. Funciona sen conexión.

- [A pantalla de CadCraft](topic:workspace) nomea cada barra e panel.
- [Debuxar con coordenadas](topic:draw-with-coordinates) é o mellor primeiro percorrido.
- [Teclado e rato](topic:keyboard) enumera cada tecla.
- Escriba `HELP` na liña de comandos para ver a lista de todos os comandos, ou lea a [Referencia de comandos](topic:commands).
