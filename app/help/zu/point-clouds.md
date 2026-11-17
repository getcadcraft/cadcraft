---
title: Landela imigqa yokwakhiwe phezu kwefu lamaphoyinti
summary: Hambisa ifayela loskeni lwelaser (LAS, LAZ, E57, PLY, PCD, PTX, PTS noma XYZ) ngaphansi komdwebo, sika isiqephu sepulani kulo, bese udweba udonga, iminyango nezinsika ngokubamba amaphoyinti alo nge-object snap.
keywords: ifu lamaphoyinti, pointcloudattach, pcattach, pointcloud, pc, uskeni lwelaser, uskeni, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, okwakhiwe, okwakhiwe ngempela, ukuhlola umhlaba, isiqephu, ukusika ipulani, inodi, snap, landela, izimo ezikhona
from: b0e0aae5
---

## Okuzokwakhiwa

Ipulani yesakhiwo esakhiwe ngempela: udonga lwesakhiwo esiskenwe ludwetshwe njengemigqa nama-polyline ngokuphelele phezu kwamaphoyinti oskeni.

## Ngeza ifu

1. Setha amayunithi omdwebo kuqala uma engawanaso ({{ui:Amayunithi}} kwi-{{ui:Izakhiwo}}, noma {{cmd:UNITS}}): CadCraft iguqula ifu kusuka kumayunithi alo siye kumayunithi omdwebo.
2. Thayipha {{cmd:POINTCLOUDATTACH}} (noma `PCATTACH`) bese ucindezela {{key:Enter}}. Khetha ifayela `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` noma `.xyz` (isihloko sezinhlobo zefu lamaphoyinti sitshela ukuthi ngalinye lilethani, nokuthi yini okufanele uyithumele ngaphandle kwesofthiwe yomskeni). Ungavula ifayela nge-{{ui:Vula}}, uliphonse ekhasini, noma ulithumele ku-{{ui:Landela ku-CadCraft}} kusibukeli se-BIM.
3. `Ikhona elingaphansi kwesobunxele lefu lamaphoyinti`: cindezela {{key:Enter}} ukugcina izixhumanisi zefayela lalo (uskeni oluhlelwe kuphrojekthi luhambisana nomdwebo), noma chofoza lapho ikhona elingaphansi kwesobunxele lifika khona.
4. Umugqa womyalo utshela ukuthi amaphoyinti angaki akhombisiwe. Umbono usondela efwini; liphansi kwemigqa, futhi lonke iphoyinti libonakala lisuka phezulu.

## Sika isiqephu sepulani bese ulandela

1. Thayipha {{cmd:POINTCLOUD}} (noma `PC`), bese uthayipha `[Isiqephu (S)]`. Kuboniswa kuphela ibhendi elincane elingu-1.2 m phezu kwephoyinti eliphansi kakhulu lefu: udonga, izimbobo zeminyango nezinsika kufundeka njengepulani lesakhiwo.
2. `[Ukuphakama (H)]` isetha ukuphakama kokusika, `[Ubukhulu (T)]` ubukhulu bakho (ngamayunithi omdwebo). {{key:Enter}} iyaqeda umyalo.
3. Vula object snap ({{key:F3}}) ngo-{{ui:Inodi}} phakathi kwama-snap. Dweba nge-{{cmd:LINE}} noma {{cmd:PLINE}}: ikhesa lihlanganisa namaphoyinti esiqephu, libhalwe ngokuthi "Ifu lamaphoyinti". Amaphoyinti wokugcina, amaphakathi nezikhungo zomdwebo wakho uwona aphezulu kunefu, ngakho ukuvala i-polyline kufika esiqalweni sayo.
4. Shintsha ukuphakama kokusika ukuze ulandele elinye izinga, bese uvala isiqephu (`[Isiqephu (S)]` futhi) ukuze ubone lonke ifu.

## Okunye okukhethwayo

Ku-{{cmd:POINTCLOUD}}: `[Imibala (C)]` ifaka imibala amaphoyinti ngemibala yefayela, ngokuphakama, ngokukhanya, ngesigaba se-LiDAR noma ngumbala oyodwa; `[Usayizi wephoyinti (SI)]` isetha usayizi wephoyinti; `[Fihla noma bonisa (V)]` ifihla noma ibonise ifu; `[Sondeza (Z)]` isondeze kulo; `[Hlukanisa (D)]` ilihlukanise.

Ithebhu ye-3D nayo iboniza ifu, iphoyinti laliphansi kakhulu lisezansi, nesiqephu esifanayo.

:::note
Ifu alisiyona ingxenye yomdwebo: alilondolozwa ku-DWG noma ku-DXF, futhi ukuhlehlisa akulishintshi. Lihlanganise futhi uma uvula umdwebo kamuva. Amafayela afundwa kulolu komputha; akukho okulayishwa. Uskeni olukhulu kakhulu luyancishwa ngokulinganayo luye kumaphoyinti ayi-2 million. Amafayela e-E57 avulwa kuze kube ngamaphoyinti ayi-6 million futhi kuze kube ngu-512 MB okwamanje: thumela uskeni olukhulu njenge-LAS noma LAZ.
:::

## Phrinta

{{cmd:PLOT}} iphrinta ifu kanye nomdwebo, ngaphansi kwemigqa: ekuphrinteni kwemodeli ({{ui:Konke}} ifaka indawo yefu) nakuyo yonke imibono yesakhiwo, ku-PDF, PNG, SVG nakho okuthunyelwa emshinini wokuphrinta. Iphrinta lokho okubonakalayo esikrinini: isiqephu uma sivulekile, imibala oyikhethile, futhi ayiboniswa uma uyifihlile. Ephepheni amaphoyinti aba izikwele ezincane, iphoyinti eliphezulu kakhulu linqoba kuyo ngayinye, futhi ukuphrinta okukodwa kugcina cishe amaphoyinti angu-400,000 kuphela (ifu elijiyile kakhulu liphrintwa ngezikwele ezinkulu). Ifu liphrintwa kuphela emdwebeni lapho lahlanganiswa khona; alikaze liphrintwe ngqo ku-paper space, kodwa kuphela ngombono.

## Uskeni oluningi

Uskeni olwenziwe kuzindawo ezahlukene lungahlanganiswa lube uhlaka olulodwa, luthuthukiswe nge-ICP bese luthunyelwa njenge-LAS noma E57 eyodwa: bheka [Hlanganisa uskeni oluningi lube olulodwa](topic:register-scans).
