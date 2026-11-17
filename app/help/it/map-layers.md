---
title: Mostrare i layer cartografici sotto il disegno
summary: Mostrare mappe stradali, immagini aeree o un'immagine con un file world sotto lo spazio modello, collocate dal sistema di coordinate del disegno.
keywords: mappa, layer cartografici, maplayers, ml, geomap, mappa di base, aerea, satellite, tessere, xyz, wms, wmts, servizio di mappe, world file, sistema di coordinate, epsg, state plane, utm, georeferenziazione, planimetria, geolocalizzazione, posizione geografica, geodati, salvato, dwg, dxf
from: f103045f
---

## Cosa si realizza

Una planimetria del sito disegnata sopra un'immagine aerea o una mappa stradale, ciascuna nel punto giusto.

## Indicare a CadCraft dove si trova il disegno

1. Impostare le unità del disegno in {{ui:Proprietà}} › {{ui:Unità}} (per esempio piedi o metri).
2. Digitare {{cmd:MAPLAYERS}} (o `ML`) e premere {{key:Enter}}.
3. Sotto {{ui:Dove si trova il disegno}}, digitare un nome o un codice EPSG in {{ui:Trova un sistema}} (per esempio `2277` o `Texas Central`) e sceglierlo in {{ui:Sistema}}.
4. Se il disegno è tracciato nelle coordinate proprie di quel sistema, lasciare il posizionamento a 0. In caso contrario, indicare un punto del disegno ({{ui:X del disegno}}, {{ui:Y del disegno}}), dove si trova quel punto sulla griglia della mappa ({{ui:Est}}, {{ui:Nord}}), e di quanto il disegno è ruotato rispetto a est ({{ui:Ruotato (°)}}).
5. Fare clic su {{ui:Usa questo sistema}}.

## Aggiungere un layer

1. Attivare {{ui:Layer cartografici da internet}} in alto nella finestra. Finché non è attivo, non viene richiesto nulla a nessun server; quando è attivo, i server aggiunti vedono l'area sullo schermo e l'indirizzo internet, mai il disegno.
2. In {{ui:Aggiungi un layer}}, scegliere la provenienza:
   - **Tessere (XYZ)**: un indirizzo di tessera con `{z}`, `{x}` e `{y}`, un nome e l'attribuzione richiesta dal suo fornitore.
   - **WMS**, **WMTS** o **ArcGIS**: l'indirizzo del servizio, poi {{ui:Ottieni layer}} e scegliere uno di essi.
   - **Un'immagine**: un PNG o JPEG con il suo file world (e il suo `.prj`, se presente).
3. Il layer viene mostrato sotto il disegno. La sua attribuzione compare in basso a destra del disegno.

Ogni layer nell'elenco può essere nascosto, reso più o meno trasparente, spostato su o giù, o rimosso.

Ogni modifica al sistema o ai layer è un passo di {{cmd:UNDO}}.

## Salvati con il disegno

Il sistema di coordinate e l'elenco dei layer vengono salvati nel disegno quando si salva come DWG o DXF, e ritornano quando lo si riapre, su qualsiasi computer. Le immagini da file non vengono salvate: aggiungerle di nuovo dopo l'apertura. L'interruttore {{ui:Layer cartografici da internet}} non viene salvato nel disegno: appartiene a questo browser, quindi un disegno inviato da un altro utente non chiede nulla a nessun server finché non lo si attiva manualmente.

Ciò che vedono gli altri programmi:

| Salvato come | Posizione del disegno | Layer cartografici |
|---|---|---|
| DWG 2010, 2013 o 2018, DXF 2000 | Scritta nel modo standard con cui i programmi leggono la posizione geografica di un disegno: il codice EPSG del sistema, un punto del disegno e la sua posizione sulla griglia della mappa, le unità e il nord. | Solo CadCraft |
| DWG 2000, 2004 o 2007, DXF R12 | Solo CadCraft (CadCraft lo segnala al salvataggio) | Solo CadCraft |

- **Verificato:** l'ODA File Converter legge la posizione senza errori, e una libreria DXF (ezdxf) legge il codice EPSG e il posizionamento esattamente.
- **Non ancora verificato:** se gli altri programmi di disegno riconoscono il sistema dal suo codice EPSG. Un programma che conserva un proprio elenco di sistemi con nomi diversi potrebbe mostrare il disegno senza posizione.
- Gli altri programmi mostrano un blocco chiamato `CADCRAFT_GEO` nell'elenco dei blocchi. È la copia di CadCraft del sistema e dei layer; non viene mai posizionato nel disegno. Lasciarlo lì.

## Disegni provenienti da altri programmi

Quando un disegno proveniente da un altro programma ha una posizione geografica, CadCraft la legge:

- Se indica un codice EPSG, {{ui:Dove si trova il disegno}} mostra quel sistema e i layer cartografici vengono posizionati da esso.
- Se CadCraft non conosce il sistema (un nome proprio dell'altro programma, una griglia locale o un fattore di scala), la posizione non viene usata, ma viene conservata e salvata di nuovo com'era, così l'altro programma la trova ancora. Scegliere un sistema in {{ui:Dove si trova il disegno}} per sostituirla.

:::note
I layer cartografici vengono disegnati solo sullo schermo: non vengono stampati. Usare solo servizi di mappe le cui condizioni lo consentano, e mantenere visibile la loro attribuzione.
:::
