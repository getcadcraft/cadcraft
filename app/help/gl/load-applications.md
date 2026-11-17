---
title: Cargar aplicacións (APPLOAD)
summary: Cargue rutinas LISP e os seus ficheiros de diálogo, descárgueas, cárguas de novo desde o historial e manteña as que usa na Suite de arranque.
keywords: appload, ap, cargar aplicación, lisp, lsp, dcl, rutina, suite de arranque, descargar, historial, soltar, cargar, personalizar, xestionar
from: 89e0ee95
---

## O que vai aprender

Como cargar unha rutina LISP (un ficheiro `.lsp`) para que os seus comandos funcionen en CadCraft, como descargala e como facer que se cargue cada vez que CadCraft arranque.

## Cargar unha rutina

1. Abra {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, ou escriba {{cmd:APPLOAD}} (ou `AP`) e prema {{key:Enter}}.
2. Prema {{ui:Load a file…}} e escolla un ou máis ficheiros `.lsp`. Unha rutina que abre un diálogo adoita traer un ficheiro `.dcl`: escóllao tamén.
3. O diálogo indica o que creou cada ficheiro, por exemplo "Cargado delblocks.lsp: 1 comando, DELBLOCKS."
4. Prema {{ui:Close}}, escriba o comando da rutina e prema {{key:Enter}}.

Tamén pode soltar ficheiros `.lsp` e `.dcl` sobre o debuxo ou sobre o diálogo {{ui:Load applications}}: cárganse de inmediato.

O ficheiro lese aquí, no seu navegador. Non se envía nada.

:::tip
Prema {{key:Enter}} nunha liña de comandos baleira para executar de novo o comando da rutina, igual que calquera outro comando. Os seus alias de comandos tamén poden chegar a el: vexa "Editar alias de comandos".
:::

## Descargar unha rutina

En {{ui:Load applications}}, baixo {{ui:Loaded applications}}, prema {{ui:Unload}} xunto ao ficheiro. Os comandos que creou desaparecen ata que o cargue de novo.

## Cargar unha rutina cada vez que CadCraft arranque

1. Cargue a rutina.
2. Baixo {{ui:Loaded applications}}, prema {{ui:Add to Startup Suite}} xunto a ela.

A partir de agora cárgase soa cada vez que CadCraft arranca neste navegador. Para deixalo, prema {{ui:Remove}} xunto a ela baixo {{ui:Startup Suite}}.

A {{ui:Startup Suite}} garda unha copia de cada ficheiro no almacenamento deste navegador. Se cambia a rutina, cargue o novo ficheiro e engádao de novo.

## Cargar acad.lsp e acaddoc.lsp desde unha carpeta de apoio (Studio)

En CadCraft Studio, {{ui:Support folder}} no diálogo {{ui:Load applications}} toma unha carpeta do seu ordenador. Prema {{ui:Choose folder…}}. Cando CadCraft arranca, le `acad.lsp` e despois `acaddoc.lsp` desa carpeta (sexa cal sexa a maiúscula dos nomes), cárgaos e logo carga a {{ui:Startup Suite}}. `acaddoc.lsp` lese de novo cada vez que se abre unha nova lapela de debuxo. Non se le nada máis da carpeta, e un ficheiro de máis de 2 MB sáltase cunha mensaxe.

Se un ficheiro define unha función chamada `S::STARTUP`, execútase unha vez despois de cargar os ficheiros (tamén despois da {{ui:Startup Suite}}). {{ui:Load now}} fai o mesmo a petición; {{ui:Clear}} esquece a carpeta.

No navegador unha páxina non pode gardar unha carpeta, así que non hai carpeta de apoio: use a {{ui:Startup Suite}} de arriba. Os ficheiros compilados `.fas` e `.vlx` e os programas nativos seguen rexeitados.

## Cargar de novo un ficheiro desde o historial

{{ui:History}} lista os ficheiros que cargou neste navegador, do máis recente ao máis antigo. Prema {{ui:Load}} xunto a un deles para cargalo de novo, sen buscalo no seu ordenador.

## Ficheiros que CadCraft non pode cargar

| Ficheiro | Que é | Que facer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado ou protexido | cargue o código fonte `.lsp` no seu lugar |
| `.arx`, `.crx`, `.dbx` | programas nativos de Windows | non hai xeito de executar estes en CadCraft |
| `.dvb` | un proxecto VBA | non hai xeito de executar estes en CadCraft |
| `.craft`, `.lua`, `.py` | scripts de CraftScript | ábraos na área de scripts de PartCraft |

O diálogo {{ui:Load applications}} indica cal destes é un ficheiro cando o escolle.

## Deter unha rutina

Prema {{key:Esc}}. Nunha das indicacións da rutina, {{key:Esc}} cancela o comando como espera a rutina (execútase a súa propia limpeza). Se está ocupada e non pide nada, {{key:Esc}} deténa por completo e di que o fixo; as rutinas cargadas seguen cargadas.

:::note
Todo o que unha rutina cambia no debuxo é un só paso: un {{key:Mod+Z}} desfai todo.
:::
