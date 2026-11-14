---
title: HVAC: dimensionamiento de ductos
summary: Dimensionamiento de ductos por fricción igual a partir del caudal, las fórmulas que usa el complemento y de dónde provienen, y la calculadora de ductos.
keywords: dimensionamiento, fricción igual, tasa de fricción, caudal, cfm, velocidad, colebrook, darcy, diámetro equivalente, huebscher, oval plano, ashrae, calculadora
from: c739aec8
---

## Fricción igual

Cada sección se dimensiona con la misma pérdida de presión por longitud: la tasa de fricción. Establezca la tasa en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:HVAC}}: 0.1 in. w.g. por 100 ft o 0.8 Pa/m para empezar (una tasa común de inicio, no una regla). Asigne a una sección su caudal ({{cmd:DUCT}} › {{ui:Aire (caudal)}}, o {{cmd:DUCTSIZE}}) y el complemento:

1. busca el diámetro redondo que pierde exactamente esa tasa con ese caudal;
2. lo redondea **hacia arriba** a un tamaño comercial, de modo que el ducto no pierda más que la tasa: ductos redondos en pasos de 1 in hasta 10 in, y luego de 2 in; en métrico 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm y así sucesivamente;
3. para un ducto rectangular u oval plano, mantiene la altura que usted fijó (12 in o 300 mm, salvo que la cambie) y lo ensancha en pasos de 2 in o 50 mm hasta que su diámetro equivalente sea al menos el del redondo.

Luego indica el tamaño, la velocidad y la tasa de fricción que tiene en realidad. Un ducto rectangular con lados de más de 4 a 1 se marca.

## Las fórmulas

El método y las cifras son los públicos del capítulo de diseño de ductos del ASHRAE Handbook—Fundamentals (2021):

- Pérdida por fricción (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- El factor de fricción de la ecuación de Colebrook: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), resuelto por iteración.
- Aire estándar: densidad 1.204 kg/m³ y viscosidad cinemática 1.51 × 10⁻⁵ m²/s (20 °C, nivel del mar); Re = V × D / ν.
- Rugosidad: lisa 0.03 mm (aluminio, PVC, acero inoxidable), medianamente lisa 0.09 mm (acero galvanizado), medianamente rugosa 0.9 mm (ducto de fibra de vidrio), rugosa 3.0 mm (ducto flexible, totalmente extendido). Elija el material en {{ui:Configuración}} o {{ui:Propiedades}}.
- Ductos rectangulares: el equivalente circular para fricción y caudal iguales, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Ductos ovales planos: Heyt y Diaz (1975): De = 1.55 A^0.625 / P^0.25, con A = πb²/4 + b(a − b) y P = πb + 2(a − b).

Ejemplos resueltos con los que se prueba el complemento: 1000 cfm en un ducto redondo de 12 in se mueven a 1273 fpm y pierden 0.189 in. w.g. por 100 ft; 24 × 12 in equivale a 18.3 in redondo; 1000 cfm a 0.1 in. w.g. por 100 ft requieren exactamente 13.66 in, así que 14 in redondo o 14 × 12 in rectangular.

## La calculadora de ductos

{{cmd:DUCTCALC}} pide un caudal y una tasa de fricción, y enumera el diámetro redondo exacto, luego los tamaños comerciales redondo, rectangular y oval plano, con su velocidad y su fricción. No cambia nada en el dibujo.

## Lo que el dimensionamiento no hace

No suma pérdidas de accesorios, no balancea derivaciones ni revisa el ventilador: dimensiona cada sección por separado según la tasa de fricción. Compare las velocidades con los límites de ruido de su proyecto.
