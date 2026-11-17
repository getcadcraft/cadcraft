---
title: Tumatalon o nahuhuli ang pointer sa ibabaw ng drawing
summary: Ano ang gagawin kapag hindi maayos na sumusunod ang crosshair sa mouse, sa mas luma o mas mabagal na computer.
keywords: cursor tumatalon, pointer nahuhuli, crosshair mabagal, nanginginig na cursor, lumang computer, lumang graphics card, integrated graphics, hardware acceleration, mas makinis na pointer, mabagal na laptop
from: 39dc9057
---

Tumatakbo ang CadCraft sa browser (ang CadCraft Studio ay browser view din), kaya walang bahagi nito na ginawa para sa iisang graphics card o iba pa. Iginuguhit ng app ang crosshair, ibig sabihin ay makakagalaw lamang ito kasing bilis ng pagguhit ng app ng isang frame.

## Hayaan ang CadCraft na bawasan ang mga dagdag

1. Buksan ang {{ui:Mga setting}} (ang gear sa kanang itaas) at manatili sa tab na {{ui:CadCraft}}.
2. Piliin ang {{ui:Mas makinis na pointer sa mas mabagal na computer}}.
3. Piliin ang {{ui:On}}.

Kapag naka-on ito, ang sariling crosshair pointer ng iyong computer ang ginagamit kapalit ng iginuhit na crosshair at pick box (pati ang full-screen na crosshair), at ang object sa ilalim ng pointer ay umiilaw kapag nakapahinga ang pointer sa halip na habang gumagalaw ito. Gumagana pa rin ang object snap, tracking at rubber band gaya ng dati.

{{ui:Awtomatiko}} ang paraan ng pagsisimula ng CadCraft: binabantayan nito kung gaano katagal ang mga frame habang gumagalaw ka ng pointer, at kusa itong ina-on kapag nananatiling mabagal ang mga ito nang ilang segundo. Sasabihan ka nito nang minsan kapag nangyari iyon. Pinapanatili ng {{ui:Off}} ang iginuhit na crosshair anuman ang bilis.

## Kung mabagal pa rin

- Tiyakin na naka-on ang hardware acceleration sa iyong browser: buksan ang `chrome://gpu` (o `edge://gpu`) sa bagong tab. Kung ang mga unang linya ay nagsasabing "Software only" o "Disabled", ang browser ay nagguguhit nang walang graphics card. Kadalasang naibabalik ito ng pag-update ng graphics driver.
- Isara ang iba pang mabibigat na tab at programa, at subukan ang mas maliit na browser window.
- Sabihan kami sa pamamagitan ng {{ui:Tulong}}, {{ui:Mag-ulat ng problema}}: sabihin kung gumagamit ka ng browser o CadCraft Studio, ang bersyon nito, at ang nakasulat sa gpu page.
