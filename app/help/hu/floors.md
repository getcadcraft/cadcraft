---
title: Szintek egymásra helyezése egy rajzon
summary: Rajzolja meg az első emeletet a földszint fölé ugyanazokkal a koordinátákkal, és kapcsolja ki az egyes szinteket, külső hivatkozások nélkül.
keywords: szint, szintek, FLOORS, FLR, FLOOR, FLOORLAYERS, emelet, magassági szint, egymásra helyezés, modelltér, aláhúzás, xref
from: 7440fc87
---

A szintek lehetővé teszik, hogy alaprajzokat helyezzen egymásra egyetlen modelltérben. Minden szintnek saját objektumai vannak, a rétegek pedig mindegyiken át működnek. A `P-Walls` rétegen lévő fal bármelyik szinten lehet.

## Indítás

Írja be a `FLOORS` (`FLR`) parancsot, vagy a {{ui:Nézet}} csoport {{ui:Továbbiak}} menüjében válassza a {{ui:Szintek…}} lehetőséget, majd a {{ui:Kezdés szintekkel}} lehetőséget. Ami eddig megrajzolt, a földszintre kerül.

## Rajzolás szinten

Válassza ki a szintet a panelen lévő kerek gombbal. Az új objektumok erre kerülnek.

A többi bekapcsolt szint halványan látszik alatta. Lehet rájuk fogni, így az első emelet a földszinttel egy vonalba esik, de nem módosíthatja őket, amíg aktív szintté nem teszi. A szem ikon kikapcsol egy szintet. A falak csak a saját szintjükön lévő falakhoz csatlakoznak.

Ha egy szintet az alatta lévőből szeretne kezdeni, jelölje ki a kívánt elemeket, válassza ki a szintet a panelen, és nyomja meg a {{ui:Másolás oda}} gombot.

## Szintek lapokon

Jelöljön ki egy nézetablakot a lapon, és a {{ui:Tulajdonságok}} panelen a {{ui:Megjelenített szint}} alatt válassza ki a szintjét. A szint nélküli nézetablak az összes bekapcsolt szintet mutatja.

## Fájl elküldése másnak

Más CAD-programok nem ismerik a szinteket, ezért minden szintet egyszerre mutatnak. Fájl küldése előtt válassza a panelen a {{ui:Szintek átalakítása rétegekké}} lehetőséget, vagy írja be a `FLOORLAYERS` parancsot. Minden objektum egy, a szintjéről elnevezett rétegre kerül, például `Ground floor-P-Walls`, így a címzett továbbra is ki tudja kapcsolni az egyes szinteket. A visszavonás visszaviszi. A CadCraft a szinteket a DWG- vagy DXF-fájlban is megőrzi, amelyet ment.
