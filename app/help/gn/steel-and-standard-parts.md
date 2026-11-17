---
title: Omoĩ acero perfiles ha piezas normalizadas
summary: Ojapo acero perfiles, elevaciones ha 3D elementos publicado tablas rupi, omoĩ pernos, tuercas, arandelas, pasadores, rodamientos, chavetas ha engranajes estándar rupi, ha ojapo lista piezas-pe.
keywords: acero, sección, perfil, forma, perfil W, ala ancha, viga doble T, canal, ángulo, hss, tubo, caño, ipe, hea, heb, upn, viga, columna, elemento, elevación, aisc, en 10365, perno, tornillo, tuerca, arandela, pasador, rodamiento, chaveta, ranura, engranaje, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, piezas normalizadas, lista de piezas, lista de materiales, bom, steelmember, partslist
from: 547c1048
---

Biblioteca-pe {{ui:Standard}} pestaña-pe oguereko mokõi tipo, publicado tablas rupi ojapóva (nada ndojeheka):

- **Acero perfiles**: 1.335 tamaño. W, S, C, L, HSS ha Pipe AISC Shapes Database v16.0 rupi; IPE, HEA, HEB ha UPN EN 10365:2017 rupi. DetailCraft tabla ojeporu.
- **Piezas normalizadas**: tornillo cabeza hexagonal (ISO 4017), perno hexagonal (ISO 4014), tuerca hexagonal (ISO 4032), arandela simple (ISO 7089), perno y tuerca hexagonal pulgada (ASME B18.2.1 ha B18.2.2), pasador paralelo (ISO 2338), rodamiento de bolas (ISO 15), chaveta paralela (DIN 6885-1) ha engranaje recto (módulos ISO 54 rupi).

Opavave CC0 rupi compartido: ojeporu mba'e rehegua, ndaikatúi ojerovia.

## Peteĩ acero perfil omoĩ

1. Eñepyrũ biblioteca ({{ui:Biblioteca}} Bloques grupo-pe, térã emoĩ `LIB`) ha eiporavo {{ui:Standard}} pestaña.
2. Eiporavo familia primer lista-pe, ejemplo {{ui:W perfiles}}. Emoĩ búsqueda caja-pe tamaño ojeheka hag̃ua: `W12` ohechauka opavave W12.
3. {{ui:Omoĩ rupi}}-pe, eiporavo:
   - {{ui:Corte}}: sección transversal, centro inserción puntos-pe.
   - {{ui:Elevación}}: elemento lado-gui, {{ui:Longitud (mm)}} oñemoĩmbáva, izquierda punta medio-pe.
   - {{ui:3D elemento}}: sólido 3D pestaña-pe (ko ári).
4. Eiporavo {{ui:Colocar}} tamaño tarjeta-pe, upe rire eiporavo mba'épe oñemoĩ, biblioteca mba'e ambue ramo.

Sección térã elevación peteĩ bloque ojapo. Atributos oguereko tamaño, tabla oñeheja, longitud (elevación-pe) ha material, eikuaáva.

:::note
S perfil, canal ha UPN oñemoĩ ala paralelo promedio grosor-pe, ángulos esquina cuadrada-pe: ala verdadera inclinada ha esquinas redondeadas. W, IPE, HEA ha HEB oguereko raíz filete, HSS esquina radio.
:::

## 3D elemento ojapo

Eiporavo {{ui:3D elemento}} ha eiporavo {{ui:Colocar}}, térã emoĩ {{cmd:STEELMEMBER}} (`SMEMBER`) comando línea-pe:

1. `Tamaño de sección`-pe, eprese {{key:Enter}} ohechaukáva tamaño-pe, térã emoñe'ẽ peteĩ, ejemplo `HSS6x6x1/4` térã `IPE300`.
2. Eiporavo punto inicial, upe rire punto final. Elemento ojehai ambue apytépe, suelo-pe oñemoĩ.
3. Columna-pe, emoĩ `C`, eiporavo base punto ha emoñe'ẽ altura.

Elemento peteĩ sólido cerrado 3D pestaña-pe. Ojeity térã ojepe'a ojeporu sólido ramo. {{key:Mod+Z}} ojeheja jey.

## Peteĩ pieza normalizada omoĩ

1. {{ui:Standard}} pestaña-pe, eiporavo familia, ejemplo {{ui:Tornillo cabeza hexagonal}}.
2. Tornillo, perno, pasador térã chaveta-pe, emoñe'ẽ {{ui:Longitud (mm)}} (pulgada familia-pe pulgada). Engranaje-pe, emoñe'ẽ {{ui:Diente}}, {{ui:Cara ancho (mm)}} ha {{ui:Diámetro interior (mm)}}. Caja hasýva ojapo ojeporúva ohechaukáva ojehechauka.
3. Eiporavo {{ui:Colocar}} tamaño-pe ha eiporavo mba'épe oñemoĩ.

Tornillo, perno ha pasador lado-gui ojapo ha cabeza rostro punto inserción-pe; tuerca, arandela, rodamiento ha engranaje rostro ári; chaveta arriba-gui. Roscas usual modo-pe ojapo: raíz línea hasy, rosca punta línea gruesa. Engranajes ojapo punta círculo, paso círculo ha raíz círculo, diente diente ndaha'éi.

Pieza bloque oguereko tipo, normativa, tamaño, longitud ha material atributos, ha peso acero forma nominal-gui. Material ojeambue **Propiedades** panel-pe.

Mismo piezas biblioteca-pe avei oĩ, ha PartCraft paramétrico pieza-gui ojepyrũ (PartCraft Archivo grupo-pe {{ui:Pieza normalizada}}).

## Lista de piezas ojapo

- Biblioteca-pe, eiporavo {{ui:Lista de piezas}}: opavave pieza normalizada ha acero sección dibujo-pe, tipo, normativa, tamaño, longitud ha material rehe agrupado, cantidad ha número ítem ndive. {{ui:Descargar CSV}} omboguapy planilla-pe.
- Dibujo-pe ojapo hag̃ua, emoĩ {{cmd:PARTSLIST}} (`PLIST`), eiporavo tabla ángulo superior izquierda, ha eprese {{key:Enter}} texto altura usual-pe térã emoñe'ẽ peteĩ.

Lista bloques atributos-gui ojeheka, upévare DWG térã DXF-pe guardado ha jeyva ojepyrũ jave oikove ojapo.

## Mba'e ojapóva ndaporãiva

- **"No steel section is called …"**: emoĩ tamaño {{ui:Standard}} pestaña-pe ohechaukáva: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Elemento oĩ 3D pestaña-pe, ndaha'éi plano-pe.** {{cmd:STEELMEMBER}} sólido ojapo; 3D pestaña ehecha. Acero plano-pe ehechauka hag̃ua, {{ui:Corte}} térã {{ui:Elevación}} avei omoĩ.
- **Longitud rangorehegua.** Perno ojeikuaa cabeza-gui mbovy, chaveta ojeikuaa ancho-gui mbovy. Línea tarjeta mboyve ohechauka mba'e valor oñemboguejy.
