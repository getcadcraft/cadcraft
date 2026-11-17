---
title: Utilitza CadCraft amb un assistent d'IA
summary: Deixeu que el vostre propi assistent d'IA o script treballi amb CadCraft: què pot fer, com connectar qualsevol client MCP i com en manteniu el control (permisos, desfer, registre d'activitat, Desconnecta).
keywords: ia, assistent, agent, mcp, protocol de context del model, script, automatització, línia d'ordres, cli, json, token, permisos, desconnecta, activitat, carpetes, rutes, svg, lots
from: 06ba4ef6
---

## Què aprendreu

Com deixar que un assistent d'IA (o un script que hàgiu escrit) miri un dibuix, executi les ordres de CadCraft, faci traçats i desi, i com decidir què pot tocar.

CadCraft **no té IA pròpia** i no envia res enlloc. Vosaltres porteu l'assistent: qualsevol programa que parli el Protocol de context del model (MCP). CadCraft només li dona eines, i vosaltres en trieu quines.

Hi ha dues maneres d'entrar:

- **El dibuix que teniu obert.** L'assistent hi treballa en aquesta finestra, al vostre costat, a través de CadCraft Studio al vostre ordinador. Això és per al que serveix {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Assistents}}.
- **Dibuixos del vostre ordinador, sense obrir l'aplicació.** El servidor MCP de CadCraft i la línia d'ordres `cadcraft` llegeixen i escriuen fitxers DWG i DXF en carpetes que indiqueu. Vegeu "Treballa amb fitxers sense obrir CadCraft" més avall.

## Activeu-ho

1. Obriu {{ui:Configuració}} (la roda d'engranatges de la barra d'aplicacions, o {{key:Mod+,}}) i aneu a la pestanya {{ui:CadCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts facin servir CadCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer. **Lectura** ve marcada des del principi; marqueu la resta només quan les necessiteu.

| Permís | Què pot fer l'assistent |
|---|---|
| Lectura | Mirar el dibuix: descriure'l, llistar i trobar objectes, veure la selecció, descriure la vista i fer-ne una imatge, comprovar-lo amb les regles de capes i de dibuix |
| Edició | Executar ordres al dibuix i canviar la selecció. Cada acció és un pas que podeu desfer |
| Desa | Desar el dibuix (a l'escriptori, al seu fitxer; en un navegador, com a baixada) |
| Exportació | Traçar a PDF i crear altres fitxers |

## Deixeu que faci servir fitxers de les carpetes que trieu

A CadCraft Studio, un assistent pot obrir, desar i traçar fitxers pel nom en lloc d'usar els diàlegs de fitxers, però només dins de les carpetes que afegiu a {{ui:Assistents}} › {{ui:Carpetes que pot fer servir}}:

1. Trieu {{ui:Afegeix una carpeta…}} i seleccioneu la carpeta al diàleg propi de Studio.
2. L'assistent ara pot llistar-hi els fitxers (`files_list`), obrir un dibuix (`drawing_open`), desar-lo allà en una versió DWG o com a DXF, traçar a un fitxer PDF o SVG, carregar un fitxer LISP, i donar a una ordre el fitxer que demana (`INSERT` `F`, `XATTACH`, un fitxer de punts) o indicar on va el fitxer d'una ordre (el CSV de `COUNT`, `PUBLISH`).
3. {{ui:Elimina (R)}} treu una carpeta a l'instant. Les rutes de qualsevol altre lloc es rebutgen, i un fitxer que ja hi és només se substitueix quan l'assistent ho demana o quan ell mateix l'ha escrit.

Obrir encara necessita **Lectura**; escriure un dibuix necessita **Desa**; qualsevol altre fitxer necessita **Exportació**.

Les eines fora dels permisos que heu marcat no s'ofereixen a l'assistent, i si en demana una igualment, CadCraft la rebutja i ho escriu al registre d'activitat. Desactivar el commutador talla totes les connexions de cop. {{ui:Restableix la configuració de CadCraft}} també el desactiva.

## Connecteu el vostre assistent

Els assistents es connecten a través de **CadCraft Studio** al vostre ordinador: executa un servidor petit que només aquest ordinador pot assolir (adreça `127.0.0.1`), protegit per un token que Studio genera cada vegada que s'inicia. Obriu Studio, trieu {{ui:Connecta un assistent}} i copieu l'adreça i el token.

- Al vostre assistent, afegiu un servidor MCP de tipus HTTP amb l'adreça (té aquest aspecte: `http://127.0.0.1:47615/mcp`) i la capçalera `Authorization: Bearer <token>`. Studio mostra la configuració per enganxar.

{{ui:Nou token}} a Studio fa que tots els assistents connectats es tornin a connectar amb el token nou. No compartiu mai el token: qualsevol que el tingui pot fer servir les aplicacions que heu activat, mentre Studio estigui en marxa.

:::note
Una pestanya del navegador no pot obrir una connexió per a un assistent: a les aplicacions del navegador el commutador no té efecte fins que feu servir CadCraft Studio al vostre ordinador.
:::

## Vosaltres mantenint el control

- **Cada acció és un sol pas per desfer**, amb el nom que li dona l'assistent, per exemple "Assistent: LINE". Premeu {{key:Mod+Z}} per desfer l'última acció de l'assistent sencera.
- **Veieu què fa.** Les seves ordres apareixen a l'historial d'ordres amb **[Assistant]** davant, i el dibuix es redibuixa mentre treballa.
- **Espera per vosaltres.** Mentre esteu a mig fer una ordre, l'assistent pot llegir però no canviar el dibuix; se li diu que ho torni a provar quan acabeu.
- **Sabeu quan n'hi ha un de connectat.** Un botó de la barra d'aplicacions indica l'assistent mentre està connectat. Feu-hi clic per veure què pot fer, o per **Desconnecta-lo**.
- **Activitat.** {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Assistents}} › {{ui:Activitat}} llista cada crida: quan, quina eina, si s'ha fet o s'ha rebutjat, i el pas per desfer que ha creat. {{ui:Desa el registre}} en guarda una còpia.

## Què pot demanar un assistent

| Eina | Permís | Què fa |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lectura | El nom del dibuix, les unitats, les capes, els blocs, els fulls; què hi ha a la pantalla |
| `files_list`, `drawing_open` | Lectura | Studio: els fitxers de les vostres carpetes; n'obre un a aquesta finestra |
| `objects_list`, `object_get`, `selection_get` | Lectura | Objectes amb la seva geometria, longitud i àrea (o només quants, per tipus i capa); la selecció |
| `drawing_check` | Lectura | Regles com les capes permeses, res a la capa 0, colors PerCapa, alçades de text |
| `view_screenshot` | Lectura | Una imatge del dibuix tal com es mostra |
| `command_run` | Edició | Escriu a la línia d'ordres: `LINE 0,0 @100,0 @0,50 ` es llegeix com ho escriuríeu (un espai acaba una resposta), o una llista amb una resposta cada una. Pot deixar una ordre oberta i continuar a la seva crida següent |
| `script_run` | Edició | Un script (`.scr`) o un fitxer LISP, tal com el carrega {{ui:APPLOAD}} |
| `block_insert` | Edició | Col·loca un bloc amb els valors dels seus atributs en un sol pas |
| `selection_set`, `undo` | Edició | Selecciona objectes per a la següent ordre; desfà els seus propis passos |
| `drawing_save` | Desa | El {{ui:Desa}} propi de CadCraft, o {{ui:Anomena i desa}} en una de les vostres carpetes |
| `drawing_plot` | Exportació | Un PDF o SVG d'un full o del model, a una escala o ajustat (els subjacents PDF encara no s'imprimeixen d'aquesta manera) |

Mentre un assistent executa una ordre, CadCraft fa les seves preguntes a la línia d'ordres en lloc de fer-ho en un diàleg (per exemple, si cal inserir tot un dibuix o un sol bloc), perquè l'assistent les pugui respondre. La biblioteca i Cerca encara us necessiten; a l'assistent se li diu que us pregunti.

## Treballa amb fitxers sense obrir CadCraft

El servidor MCP de CadCraft (`cadcraft-mcp`) i la línia d'ordres (`cadcraft`) executen el mateix codi de dibuix de CadCraft en Node.js, sense finestra. Necessiten Node.js 20 o posterior.

- **El servidor MCP** només funciona dins de les carpetes que indiqueu, i només amb els permisos que li doneu: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sense `--root` no pot obrir cap fitxer; sense `--allow` només pot llegir. També pot llegir models IFC, amidaments i les anotacions de conjunts PDF.
- **La línia d'ordres** és per als vostres propis scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Diversos fitxers alhora: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Afegiu `--json` per obtenir una sortida que un programa pugui llegir.

:::note
Si `npx @getcadcraft/mcp` diu que no es troba el paquet, encara no s'ha publicat. Les notícies de getcadcraft.com diran quan ho sigui.
:::

## Si alguna cosa no funciona

- **L'assistent no veu les eines de CadCraft:** comproveu que el commutador és activat en aquesta finestra i que la finestra és oberta a Studio.
- **"cal el permís d'edició":** marqueu **Edició** sota {{ui:Assistents}} i torneu a demanar-ho.
- **"fora de les carpetes que poden usar els assistents":** afegiu aquesta carpeta a {{ui:Assistents}} › {{ui:Carpetes que pot fer servir}}, o demaneu a l'assistent que faci servir un fitxer d'una carpeta que ja heu afegit.
- **Errors "401" o de "token":** el token ha canviat (Studio s'ha reiniciat, o {{ui:Nou token}}). Copieu el nou a la configuració de l'assistent.
- **El seu canvi era incorrecte:** premeu {{key:Mod+Z}}. Una sola pressió desfà una acció sencera de l'assistent.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
