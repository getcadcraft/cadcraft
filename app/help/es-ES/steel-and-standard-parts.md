---
title: Colocar perfiles de acero y piezas estándar
summary: Dibuje perfiles de acero, alzados y miembros 3D a partir de las tablas de perfiles publicadas, coloque tornillos, tuercas, arandelas, pasadores, rodamientos, chavetas y engranajes según sus normas, y enumérelos en una lista de piezas.
keywords: acero, perfil, sección, forma, perfil W, ala ancha, doble T, canal, ángulo, HSS, tubo, tubería, IPE, HEA, HEB, UPN, viga, pilar, miembro, alzado, AISC, EN 10365, tornillo, perno, tuerca, arandela, pasador, espiga, rodamiento, chaveta, chavetero, engranaje, ISO 4017, ISO 4014, ISO 4032, ISO 7089, ISO 2338, ISO 15, DIN 6885, ASME, piezas estándar, lista de piezas, lista de materiales, LdM, steelmember, partslist
from: 547c1048
---

La pestaña {{ui:Estándar}} de la biblioteca tiene dos tipos de elementos, creados aquí mismo a partir de tablas publicadas (no se descarga nada):

- **Perfiles de acero**: 1,335 tamaños. W, S, C, L, HSS y Pipe de la AISC Shapes Database v16.0; IPE, HEA, HEB y UPN de EN 10365:2017. DetailCraft usa la misma tabla.
- **Piezas estándar**: tornillos de cabeza hexagonal (ISO 4017), tornillos hexagonales (ISO 4014), tuercas hexagonales (ISO 4032), arandelas planas (ISO 7089), tornillos y tuercas hexagonales en pulgadas (ASME B18.2.1 y B18.2.2), pasadores cilíndricos (ISO 2338), rodamientos rígidos de bolas (ISO 15), chavetas paralelas (DIN 6885-1) y engranajes rectos (módulos de ISO 54).

Todo esto se comparte bajo CC0: puede usarlo para cualquier fin, sin necesidad de citar su autoría.

## Colocar un perfil de acero

1. Abra la biblioteca ({{ui:Biblioteca}} en el grupo Bloques, o escriba `LIB`) y haga clic en la pestaña {{ui:Estándar}}.
2. Elija la familia en la primera lista, por ejemplo {{ui:Perfiles W}}. Escriba en el cuadro de búsqueda para acotar los tamaños: `W12` muestra todos los W12.
3. En {{ui:Colocar como}}, elija:
   - {{ui:Sección}}: la sección transversal, con su centro en el punto de inserción.
   - {{ui:Elevación}}: el miembro visto de lado, con la {{ui:Longitud (mm)}} que indique, desde el centro de su extremo izquierdo.
   - {{ui:Miembro 3D}}: un sólido en la pestaña 3D (más abajo).
4. Haga clic en {{ui:Colocar}} en la tarjeta del tamaño, y luego en el lugar donde va, como con cualquier elemento de la biblioteca.

Una sección o un alzado se convierte en un bloque. Sus atributos contienen el tamaño, la tabla de la que procede, la longitud (en un alzado) y un material que puede completar.

:::note
Los perfiles S, los canales y los UPN se dibujan con alas paralelas de espesor medio, y los ángulos con esquinas rectas: las alas reales son inclinadas y las esquinas redondeadas. Los W, IPE, HEA y HEB tienen sus radios de acuerdo en la raíz, y los HSS sus radios de esquina.
:::

## Crear un miembro 3D

Elija {{ui:Miembro 3D}} y haga clic en {{ui:Colocar}}, o escriba {{cmd:STEELMEMBER}} (`SMEMBER`) en la línea de comandos:

1. En `Tamaño de sección`, pulse {{key:Enter}} para el tamaño mostrado, o escriba uno, por ejemplo `HSS6x6x1/4` o `IPE300`.
2. Haga clic en el punto inicial y luego en el final. El miembro va entre ellos, apoyado en el suelo.
3. Para un pilar, escriba `C`, haga clic en su punto base y escriba su altura.

El miembro es un sólido cerrado en la pestaña 3D. Muévalo o cópielo allí como cualquier otro sólido. {{key:Mod+Z}} lo vuelve a quitar.

## Colocar una pieza estándar

1. En la pestaña {{ui:Estándar}}, elija la familia, por ejemplo {{ui:Tornillos de cabeza hexagonal}}.
2. Para un tornillo, perno, pasador o chaveta, escriba su {{ui:Longitud (mm)}} (en pulgadas para las familias en pulgadas). Para un engranaje, escriba los {{ui:Dientes}}, el {{ui:Ancho de cara (mm)}} y el {{ui:Diámetro interior (mm)}}. Deje un campo vacío para el valor habitual que muestra.
3. Haga clic en {{ui:Colocar}} en el tamaño y haga clic donde va.

Los tornillos, pernos y pasadores se dibujan de lado, con la cara de apoyo de la cabeza en el punto de inserción; las tuercas, arandelas, rodamientos y engranajes se dibujan de frente; las chavetas, desde arriba. Las roscas se dibujan de la forma habitual: la raíz como línea fina y el final de la rosca como línea gruesa. Los engranajes se dibujan como su círculo de cabeza, su círculo primitivo y su círculo de raíz, no diente a diente.

Cada bloque de pieza lleva como atributos su tipo, norma, tamaño, longitud y material, y su peso a partir de la forma nominal en acero. Cambie el material en el panel {{ui:Propiedades}}.

Los mismos elementos están también en la Biblioteca como elementos, y PartCraft los abre como piezas paramétricas ({{ui:Pieza estándar}} en su grupo Archivo).

## Crear una lista de piezas

- En la biblioteca, haga clic en {{ui:Lista de piezas}}: cada pieza estándar y perfil de acero del dibujo, agrupados por tipo, norma, tamaño, longitud y material, con la cantidad y los números de elemento. {{ui:Descargar CSV}} la guarda para una hoja de cálculo.
- Para dibujarla, escriba {{cmd:PARTSLIST}} (`PLIST`), haga clic en la esquina superior izquierda de la tabla y pulse {{key:Enter}} para la altura de texto habitual, o escriba una.

La lista se lee de los atributos de los bloques, así que sigue siendo correcta después de guardar el dibujo como DWG o DXF y volver a abrirlo.

## Errores comunes

- **"No existe ningún perfil de acero llamado …"**: escriba el tamaño tal como lo lista la pestaña {{ui:Estándar}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **El miembro está en la pestaña 3D, no en el plano.** {{cmd:STEELMEMBER}} crea un sólido; abra la pestaña 3D para verlo. Para mostrar el acero en el plano, coloque también una {{ui:Sección}} o una {{ui:Elevación}}.
- **Una longitud fuera de rango.** Un tornillo debe ser más largo que su cabeza, y una chaveta más larga que ancha. La línea bajo las tarjetas indica qué valor se rechazó.
