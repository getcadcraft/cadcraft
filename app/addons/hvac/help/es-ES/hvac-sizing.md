---
title: Climatización: dimensionado de conductos
summary: Dimensionado de conductos por pérdida de carga constante a partir del caudal, las fórmulas que usa el complemento y su origen, y la calculadora de conductos.
keywords: dimensionado, pérdida de carga constante, pérdida unitaria, caudal, cfm, velocidad, colebrook, darcy, diámetro equivalente, huebscher, oval plano, ashrae, calculadora
from: c739aec8
---

## Pérdida de carga constante

Cada sección se dimensiona para la misma pérdida de presión por longitud: la pérdida unitaria. Fíjela en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Climatización}}: 0.1 in. w.g. por 100 ft o 0.8 Pa/m para empezar (una pérdida unitaria habitual de partida, no una norma). Dé a una sección su caudal ({{cmd:DUCT}} › {{ui:Caudal}}, o {{cmd:DUCTSIZE}}) y el complemento:

1. calcula el diámetro circular que pierde exactamente esa pérdida unitaria con ese caudal;
2. lo redondea **hacia arriba** a un tamaño de catálogo, para que el conducto no pierda más que la pérdida unitaria: conductos redondos en pasos de 1 in hasta 10 in, y después en pasos de 2 in; métricos 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm y siguientes;
3. en un conducto rectangular o oval plano, mantiene la altura que haya fijado (12 in o 300 mm salvo que la cambie) y lo ensancha en pasos de 2 in o 50 mm hasta que su diámetro equivalente sea al menos el del redondo.

Después indica el tamaño, la velocidad y la pérdida unitaria que tiene realmente. Un conducto rectangular con lados de más de 4 a 1 se marca.

## Las fórmulas

El método y las cifras son las públicas del capítulo de diseño de conductos del ASHRAE Handbook—Fundamentals (2021):

- Pérdida por rozamiento (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- El factor de fricción procede de la ecuación de Colebrook: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), resuelta por iteración.
- Aire estándar: densidad 1.204 kg/m³ y viscosidad cinemática 1.51 × 10⁻⁵ m²/s (20 °C, nivel del mar); Re = V × D / ν.
- Rugosidad: liso 0.03 mm (aluminio, PVC, acero inoxidable), medio liso 0.09 mm (acero galvanizado), medio rugoso 0.9 mm (conducto de fibra de vidrio), rugoso 3.0 mm (conducto flexible, totalmente extendido). Elija el material en {{ui:Ajustes}} o en {{ui:Propiedades}}.
- Conductos rectangulares: el equivalente circular para igual pérdida y caudal, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Conductos ovales planos: Heyt y Diaz (1975): De = 1.55 A^0.625 / P^0.25, con A = πb²/4 + b(a − b) y P = πb + 2(a − b).

Ejemplos resueltos con los que se prueba el complemento: 1000 cfm en un conducto redondo de 12 in circulan a 1273 fpm y pierden 0.189 in. w.g. por 100 ft; 24 × 12 in equivale a 18.3 in redondo; 1000 cfm a 0.1 in. w.g. por 100 ft necesitan exactamente 13.66 in, así que 14 in redondo o 14 × 12 in rectangular.

## La calculadora de conductos

{{cmd:DUCTCALC}} pide un caudal y una pérdida unitaria, y enumera el diámetro circular exacto, después los tamaños de catálogo redondo, rectangular y oval plano con su velocidad y su pérdida. No cambia nada en el dibujo.

## Lo que el dimensionado no hace

No suma pérdidas en accesorios, no equilibra derivaciones ni comprueba el ventilador: dimensiona cada sección por separado según la pérdida unitaria. Compruebe las velocidades con los límites de ruido de su proyecto.
