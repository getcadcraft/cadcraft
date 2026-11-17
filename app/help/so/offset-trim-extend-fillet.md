---
title: Offset, gooy, fidi, fillet iyo chamfer darbiyada
summary: Ka dhig xarriiqyo keli ah darbiyo labo-jibbaaran oo leh Offset, nadiifi geesaha adigoo isticmaalaya Fillet, oo gooy oo fidi xarriiqyada adigoo isticmaalaya Trim iyo Extend.
keywords: offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen, darbiyada, geeska, gooy, fidi, dhinac-dhinac, radius, nadiifin
from: c6c5cbd0
---

## Waxa aad samayn doontid

Qol yar oo darbiyo 200 qaro leh: dhinaca gudaha ayaa la sawiraa, dhinaca dibadda ayaa la offset gareeyaa, geesaha ayaa la nadiifiyaa, daaq dariiqa ayaa laga gooyaa hal darbi.

## Sawir dhinaca gudaha

1. Ku qor `L` oo riix {{key:Enter}}.
2. Ku qor `0,0` oo riix {{key:Enter}}.
3. Ku qor `@5000,0` oo riix {{key:Enter}}.
4. Ku qor `@0,4000` oo riix {{key:Enter}}.
5. Ku qor `@-5000,0` oo riix {{key:Enter}}.
6. Ku qor `C` oo riix {{key:Enter}}.
7. Guji {{ui:Extents}}.

Waxaad leedahay afar xarriiqood oo kala go'an. (Polyline xiran ayaa hal mar la offset gareyn lahaa; xarriiqyo kala go'an ayaa muujinaya sida Fillet u nadiifiyo geesaha.)

## Offset dhinaca dibadda

1. Ku qor `O` oo riix {{key:Enter}}. Prompt-ku wuxuu akhrinayaa `Specify offset distance [Through] <Through>:`.
2. Ku qor `200` oo riix {{key:Enter}}.
3. Ku `Select object to offset`, guji xarriiqda hoose.
4. Ku `Specify point on side to offset`, guji meel kasta hoosta. Xarriiq la dhigan ayaa soo muuqda 200 hoosta.
5. Guji xarriiqda midig, kadibna guji xagga midig ee ka.
6. Guji xarriiqda sare, kadibna guji sare ee ka.
7. Guji xarriiqda bidix, kadibna guji xagga bidix ee ka.
8. Riix {{key:Enter}} si aad amarka u dhammeysid.

Waxaad arki doontaa afar xarriiqood oo dibadeed, mid kasta oo dherer u dhigma xarriiqda gudaha, sidaas darteed geesaha dibadda ma isku dhacaan.

:::tip
Riix {{key:Enter}} prompt-ka masaafada si aad masaafadii ugu dambeysay mar kale u isticmaasho. Ku qor `T` ee Through: markaas nuqul kasta wuxuu mara barta aad gujiso, masaafada kasta oo ay tahay.
:::

{{cmd:OFFSET}} wuxuu shaqeeyaa xarriiqyada, qaansooyinka, goobooyinka iyo polylines. Polyline xiran oo la offset gareeyo, wuxuu offset gareeyaa khadka oo dhan, geesaha ku jira.

## Nadiifi geesaha dibadda Fillet-ka

{{cmd:FILLET}} wuxuu isku xidhaa laba xarriiqood geesaha: wuu gooyaa ama fidiyaa labadaba si ay isu kulmaan. Radius 0 ayaa geesta ka dhigta mid toosan.

1. Ku qor `F` oo riix {{key:Enter}}. Prompt-ku wuxuu akhrinayaa `Select first line [Radius]:`.
2. Haddii fillet-kii ugu dambeeyay aad sameysay uu radius isticmaalay, ku qor `R`, riix {{key:Enter}}, ku qor `0` oo riix {{key:Enter}}.
3. Guji xarriiqda hoose ee dibadda oo u dhow dhamaadkeeda midig.
4. Ku `Select second line`, guji xarriiqda midig ee dibadda oo u dhow dhamaadkeeda hoose.

Labada xarriiqood hadda waxay isku kulmaan geesta xagaa, amarkana wuu dhammaadaa.

5. Riix {{key:Enter}} si aad {{cmd:FILLET}} dib ugu celiso, oo geeska xigta samee.
6. Ku celi ilaa geesaha dibadda afarta ay isku kulmaan.

Guji xarriiq kasta qaybta aad **rabto inaad ilaaliso**. Radius ka weyn 0, Fillet wuxuu u dhexeeyaa xarriiqyada qaanso halkii.

:::tip
Ku qor `M` prompt-ka koowaad si aad afarta geesood hal mar u samayso, ama sawir dhinaca dibadda polyline xiran oo ku qor `P`: geesaha oo dhan hal mar ayaa la sameeyaa. Hay {{key:Shift}} markaad gujinayso xarriiqda labaad si aad geesta xagaa u hesho adigoon radius-ka beddelin.
:::

## Geeska ku bevel gareeya Chamfer

{{cmd:CHAMFER}} wuxuu geeska ka gooyaa xarriiq toosan.

1. Ku qor `CHA` oo riix {{key:Enter}}.
2. Ku qor `D` oo riix {{key:Enter}}. Ku qor `300` oo riix {{key:Enter}} masaafada koowaad, kadibna riix {{key:Enter}} si aad 300 ugu isticmaasho masaafada labaad sidoo kale.
3. Guji xarriiqda gudaha ee sare oo u dhow dhamaadkeeda bidix, kadibna xarriiqda gudaha ee bidix oo u dhow dhamaadkeeda sare.

Geeska waxaa laga gooyaa 300 xarriiq kasta, xarriiq toosan ayaa labada isku xidhaa. Ku qor `A` halkii `D` si aad dherer ku siiso xarriiqda koowaad iyo xagal.

## Daaq dariiqa ku gooy Trim-ka

Marka hore sawir labada jamb ee darbiga hoose, kadibna gooy xarriiqyada darbiga inta u dhexaysa.

1. Ku qor `L` oo riix {{key:Enter}}.
2. Ku qor `1000,200` oo riix {{key:Enter}}.
3. Ku qor `@0,-600` oo riix {{key:Enter}}, kadibna riix {{key:Enter}} mar kale.
4. Riix {{key:Enter}} si aad {{cmd:LINE}} dib ugu celiso.
5. Ku qor `1900,200` oo riix {{key:Enter}}.
6. Ku qor `@0,-600` oo riix {{key:Enter}}, kadibna riix {{key:Enter}} mar kale.

Hadda waxaad leedahay laba xarriiqood oo gaaban oo gooxaya darbiga hoose, 900 kala fog.

7. Ku qor `TR` oo riix {{key:Enter}}. Taariikhdu waxay leedahay `Current settings: Quick mode, edges: No extend`.
8. Guji xarriiqda gudaha ee hoose ee u dhexaysa labada jamb. Qaybtaasi way baxdaa. (Marka hore mu'ashirka saar qaybta, inta ay baxayso waxay noqonaysaa mid cawl ah oo dashed ah.)
9. Guji xarriiqda dibadda ee hoose ee u dhexaysa labada jamb. Qaybtaasna way baxdaa.
10. Guji qaybta jamb kasta ee ka soo baxda darbiga sare, iyo qaybta ka hooseysa.
11. Riix {{key:Enter}} si aad amarka u dhammeysid.

Waxaad arki doontaa furitaan 900 ah darbiga hoose, jambs-ka oo xidhaya dhamaadka darbiga.

Quick mode-ka (default) Trim ma weydiiso inaad marka hore dooratid geesaha gooyaa: walx kasta oo muuqda waa gees gooyaa. Dooro qaybta aad rabto inay baxdo, ama jiid waddo dhexdeeda qaybo badan si aad dhammaan u gooyso mar hal. Ku qor `U` oo riix {{key:Enter}} si aad u soo celiso dooradii ama jiidkii ugu dambeeyay adigoon amarka ka baxin. Fence, crossing, geesaha la doortay iyo {{key:Shift}} si aad u fidiso waxaa ku jira [Gooy iyo fidi](topic:trim-and-extend).

## Fidi xarriiq si ay mid kale u gaarto

{{cmd:EXTEND}} wuxuu dherer ku daraa xarriiq, qaanso ama dhamaad polyline ilaa uu gaaro walxda xigta jihadaas.

1. Ku qor `L` oo riix {{key:Enter}}.
2. Ku qor `1000,2000` oo riix {{key:Enter}}.
3. Ku qor `@2000,0` oo riix {{key:Enter}}, kadibna riix {{key:Enter}} mar kale. Xarriiqdu waxay joogsanaysaa 2000 ka hor darbiga midig.
4. Ku qor `EX` oo riix {{key:Enter}}.
5. Guji xarriiqda cusub oo u dhow dhamaadkeeda midig.
6. Riix {{key:Enter}} si aad amarka u dhammeysid.

Xarriiqdu hadda waxay gaaraysaa dhinaca gudaha ee darbiga midig. Walx kasta oo muuqda waa xadka; dooro dhinaca u dhow ee loo baahan yahay inuu koraa. Gudaha {{cmd:TRIM}}, {{key:Shift}}+guji ayaa sidaas samaynaya.

## Jebi iyo dheeraysii

{{cmd:BREAK}} (`BR`, ama {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) wuxuu gooyaa god adigoo aan geesaha gooyo ku jirin: guji walxda meesha godku ka bilaabmayo (gujintaas waa barta koowaad), kadibna guji meesha uu ku dhammaanayo. Goobo dhexdeeda, qaybta saacadda ka soo horjeeda ee u dhexaysa barta koowaad iyo labaad ayaa baxda. `F` su'aasha labaad wuxuu kuu oggolaanayaa inaad mar kale siisid barta koowaad, {{cmd:BREAKATPOINT}} wuxuu kala jebiyaa walx laba qaybood hal barta, adigoon god ka dhigin.

{{cmd:LENGTHEN}} (`LEN`) wuxuu beddelaa dherer dhamaad kasta:

1. Ku qor `LEN` oo riix {{key:Enter}}. Guji xarriiq si aad u aragto dhererkeeda hadda; prompt-ku wuu mar kale weydiinayaa.
2. Dooro sida: `DE` (Delta: qadar lagu daro, taban si loo jaro; `A` xagalka qaansada), `P` (Percent: 50 wuxuu kala badhaa), `T` (Total: dherer ay noqotaa) ama `DY` (Dynamic: jiid dhamaadka).
3. Guji walx kasta oo dhamaadka u dhow ee u baahan in la dhaqaajiyo. `U` wuxuu ka noqdaa midka ugu dambeeya; {{key:Enter}} ayaa dhammeeya.

Xarriiqyada, qaansooyinka iyo polylines furan (qaybta dhamaadka) waa la dheereyn karaa.

## Khaladaadka caadiga ah

- **Xarriiq oo dhan ayaa baxay.** Waxba ma gooyin, sidaas darteed Quick mode wuu tirtiray. Ku qor `U` si aad u soo celiso; hubi in xarriiqda gooyaysa ay si dhab ah u gooyso (zoom gareey) oo aanay ku jirin lakab damaan.
- **"No boundary in that direction."** Extend ma helin wax uu ku dhacayo. Dooro dhinaca u dhow ee loo baahan yahay inuu koraa.
- **"Radius is too large."** Qaansadu waxay ka gudbi laheyd dhamaadka mid ka mid ah xarriiqyada. Isticmaal radius yar.
- **"Only the first or last segment of an open polyline can be cut back."** Dooro laba qaybood oo isku xiga oo polyline ah, ama ku qor `P` si aad geesaha oo dhan u wareejiso.
- **Offset-ku wuxuu u socday dhinac qaldan.** Dhinaca waa meesha aad gujiso kadib markaad doorato walxda. Ka noqo {{key:Mod+Z}} oo guji dhinaca kale.
- **"Cannot offset that far."** Offset-ku wuxuu rogi laheyd qaansada, goobada ama polyline-ka gudaha-dibadda. Isticmaal masaafo yar.
