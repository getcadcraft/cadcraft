---
title: CadCraft'ı bir yapay zekâ asistanıyla kullanın
summary: Kendi yapay zekâ asistanınızın ya da betiğinizin CadCraft ile çalışmasına izin verin: neler yapabileceği, herhangi bir MCP istemcisinin nasıl bağlanacağı ve kontrolü nasıl elinizde tutacağınız (izinler, geri alma, etkinlik günlüğü, Bağlantıyı kes).
keywords: yapay zekâ, asistan, ajan, mcp, model bağlam protokolü, betik, otomasyon, komut satırı, cli, json, belirteç, izinler, bağlantıyı kes, etkinlik, klasörler, yollar, svg, toplu
from: 06ba4ef6
---

## Neleri öğreneceksiniz

Bir yapay zekâ asistanının (ya da yazdığınız bir betiğin) bir çizime bakmasına, CadCraft'ın komutlarını çalıştırmasına, çıktı alıp kaydetmesine izin vermeyi ve neye dokunabileceğine nasıl karar vereceğinizi.

CadCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Bağlam Protokolü'nü (MCP) kullanan herhangi bir program. CadCraft yalnızca ona araçlar sunar, hangilerinin sunulacağını siz seçersiniz.

İki yolla bağlanabilirsiniz:

- **Açık olan çizim.** Asistan, bilgisayarınızdaki CadCraft Studio üzerinden, bu pencerede, yanınızda çalışır. Bunun için {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Asistanlar}} kullanılır.
- **Bilgisayarınızdaki çizimler, uygulamayı açmadan.** CadCraft MCP sunucusu ve `cadcraft` komut satırı, sizin adlandırdığınız klasörlerdeki DWG ve DXF dosyalarını okur ve yazar. Aşağıdaki "CadCraft'ı açmadan dosyalarla çalışma" bölümüne bakın.

## Etkinleştirin

1. {{ui:Ayarlar}} simgesini açın (uygulama çubuğundaki dişli ya da {{key:Mod+,}}) ve {{ui:CadCraft}} sekmesine gidin.
2. {{ui:Asistanlar}} altında **Yapay zekâ asistanlarının ve betiklerin CadCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz işaretleyene kadar kapalıdır.
3. Neler yapabileceğini seçin. **Oku** başlangıçta işaretlidir; diğerlerini yalnızca ihtiyacınız olduğunda işaretleyin.

| İzin | Asistanın yapabilecekleri |
|---|---|
| Oku | Çizime bakar: çizimi tanımlar, nesneleri listeler ve bulur, seçimi görür, görünümü tanımlar ve bunun resmini çeker, katman ve çizim kurallarına göre denetler |
| Düzenle | Çizimde komut çalıştırır ve seçimi değiştirir. Her işlem geri alınabilen bir adımdır |
| Kaydet | Çizimi kaydeder (masaüstünde dosyasının üzerine; tarayıcıda indirme olarak) |
| Dışa aktar | PDF'e çıktı alır ve başka dosyalar oluşturur |

## Seçtiğiniz klasörlerdeki dosyaları kullanmasına izin verin

CadCraft Studio'da bir asistan, dosya iletişim kutularını kullanmak yerine dosyaları adlarıyla açabilir, kaydedebilir ve çıktı alabilir; ancak bu yalnızca {{ui:Asistanlar}} › {{ui:Asistanların kullanabileceği klasörler}} altına eklediğiniz klasörlerin içinde geçerlidir:

1. {{ui:Bir klasör ekle…}} seçeneğini belirleyin ve klasörü Studio'nun kendi iletişim kutusunda seçin.
2. Asistan artık oradaki dosyaları listeleyebilir (`files_list`), bir çizim açabilir (`drawing_open`), çizimi orada bir DWG sürümünde ya da DXF olarak kaydedebilir, bir PDF ya da SVG dosyasına çıktı alabilir, bir LISP dosyası yükleyebilir ve bir komuta istediği dosyayı verebilir (`INSERT` `F`, `XATTACH`, bir nokta dosyası) ya da bir komutun dosyasının nereye gideceğini belirtebilir (`COUNT`'un CSV'si, `PUBLISH`).
3. {{ui:Kaldır}} bir klasörü hemen geri alır. Başka her yerdeki yollar reddedilir; orada zaten bulunan bir dosya yalnızca asistan bunu istediğinde ya da dosyayı asistan kendisi yazdığında değiştirilir.

Açma işlemi yine **Oku** izni gerektirir; çizim yazmak **Kaydet** izni gerektirir; diğer dosyalar için **Dışa aktar** izni gerekir.

İşaretlediğiniz izinlerin dışındaki araçlar asistana hiç sunulmaz; yine de birini isterse CadCraft bunu reddeder ve etkinlik günlüğüne yazar. Anahtarı kapatmak tüm bağlantıları hemen sonlandırır. {{ui:CadCraft ayarlarını sıfırla}} de onu kapatır.

## Asistanınızı bağlayın

Asistanlar bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır: Studio, yalnızca bu bilgisayarın erişebildiği küçük bir sunucu çalıştırır (adres `127.0.0.1`); bu sunucu, Studio her başlatıldığında oluşturduğu bir belirteçle korunur. Studio'yu açın, {{ui:Asistan bağla}} seçeneğini belirleyin ve adresi ile belirteci kopyalayın.

- Asistanınızda, adresi (`http://127.0.0.1:47615/mcp` gibi görünür) ve `Authorization: Bearer <token>` başlığını içeren, HTTP türünde bir MCP sunucusu ekleyin. Studio, yapıştırmanız gereken ayarları gösterir.

Studio'daki {{ui:Yeni belirteç}}, bağlı her asistanın yeni belirteçle yeniden bağlanmasını sağlar. Belirteci asla paylaşmayın: belirteci bilen herkes, Studio çalıştığı sürece açtığınız uygulamaları kullanabilir.

:::note
Bir tarayıcı sekmesi asistan için bağlantı açamaz: tarayıcı uygulamalarında anahtarın bir etkisi olmaz; bilgisayarınızdaki CadCraft Studio'yu kullanana kadar.
:::

## Kontrol sizde kalır

- **Her işlem tek bir geri alma adımıdır**; asistanın bu işlem için verdiği adla etiketlenir, örneğin "Asistan: LINE". Asistanın son işlemini bütün olarak geri almak için {{key:Mod+Z}} tuşuna basın.
- **Ne yaptığını görürsünüz.** Komutları komut geçmişinde önünde **[Asistan]** ile görünür ve çizim çalıştıkça yeniden çizilir.
- **Sizi bekler.** Bir komutun ortasındayken asistan çizimi okuyabilir ama değiştiremez; siz bitirdiğinizde yeniden denemesi söylenir.
- **Bağlı olduğunu bilirsiniz.** Uygulama çubuğundaki bir düğme, asistan bağlıyken onu adıyla gösterir. Neler yapabileceğini görmek ya da onun **bağlantısını kesmek** için düğmeye tıklayın.
- **Etkinlik.** {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Asistanlar}} › {{ui:Etkinlik}} her çağrıyı listeler: ne zaman, hangi araç, tamamlandı mı reddedildi mi ve oluşturduğu geri alma adımı. {{ui:Günlüğü kaydet}} bir kopyasını tutar.

## Bir asistanın isteyebilecekleri

| Araç | İzin | Ne yapar |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Oku | Çizimin adı, birimleri, katmanları, blokları, sayfaları; ekranda görünenler |
| `files_list`, `drawing_open` | Oku | Studio: klasörlerinizdeki dosyalar; birini bu pencerede açar |
| `objects_list`, `object_get`, `selection_get` | Oku | Nesneler, geometrileri, uzunlukları ve alanlarıyla (ya da yalnızca türe ve katmana göre kaç tane olduğu); seçim |
| `drawing_check` | Oku | İzin verilen katmanlar, 0 katmanında hiçbir şey olmaması, renklerin ByLayer olması, metin yükseklikleri gibi kurallar |
| `view_screenshot` | Oku | Çizimin gösterildiği hâliyle bir resmi |
| `command_run` | Düzenle | Komut satırına yazar: `LINE 0,0 @100,0 @0,50 ` sizin yazacağınız gibi okunur (bir boşluk bir yanıtı bitirir) ya da her biri bir yanıtlı bir liste. Bir komutu açık bırakıp sonraki çağrısında devam edebilir |
| `script_run` | Düzenle | Bir betik (`.scr`) ya da bir LISP dosyası; {{ui:APPLOAD}} nasıl yüklüyorsa öyle |
| `block_insert` | Düzenle | Bir bloğu öznitelik değerleriyle birlikte tek adımda yerleştirir |
| `selection_set`, `undo` | Düzenle | Sonraki komut için nesneleri seçer; kendi adımlarını geri alır |
| `drawing_save` | Kaydet | CadCraft'ın kendi {{ui:Kaydet}} komutu ya da klasörlerinizden birine {{ui:Farklı kaydet}} |
| `drawing_plot` | Dışa aktar | Bir sayfanın ya da modelin PDF ya da SVG'si, bir ölçekte ya da sığdırılmış olarak (PDF altlıkları henüz bu yolla çıktı alınmaz) |

Bir asistan bir komut çalıştırırken CadCraft sorularını bir iletişim kutusu yerine komut satırında sorar (örneğin tüm bir çizimi mi yoksa tek bir bloğu mu ekleyeceği gibi); böylece asistan bunları yanıtlayabilir. Kütüphane ve Bul yine sizi gerektirir; asistana sizi sorması söylenir.

## CadCraft'ı açmadan dosyalarla çalışın

CadCraft MCP sunucusu (`cadcraft-mcp`) ve komut satırı (`cadcraft`), CadCraft'ın kendi çizim kodunu Node.js içinde pencere olmadan çalıştırır. Node.js 20 veya daha yeni bir sürüm gerekir.

- **MCP sunucusu** yalnızca adlandırdığınız klasörlerde ve yalnızca verdiğiniz izinlerle çalışır: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. `--root` olmadan hiçbir dosyayı açamaz; `--allow` olmadan yalnızca okuyabilir. Ayrıca IFC modellerini, metrajları ve PDF setlerindeki işaretlemeleri de okuyabilir.
- **Komut satırı** kendi betikleriniz içindir: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Birden çok dosyayı birlikte: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Bir programın okuyabileceği çıktı için `--json` ekleyin.

:::note
`npx @getcadcraft/mcp` paketin bulunamadığını söylerse, paket henüz yayımlanmamıştır. getcadcraft.com'daki haberler ne zaman yayımlandığını bildirecektir.
:::

## Bir şey çalışmıyorsa

- **Asistan hiçbir CadCraft aracını görmüyor:** bu pencerede anahtarın açık olduğunu ve pencerenin Studio'da açık olduğunu denetleyin.
- **"düzenleme iznine ihtiyaç var":** {{ui:Asistanlar}} altında **Düzenle** kutusunu işaretleyin, sonra yeniden isteyin.
- **"asistanların kullanabileceği klasörlerin dışında":** o klasörü {{ui:Asistanlar}} › {{ui:Asistanların kullanabileceği klasörler}} altına ekleyin ya da asistandan zaten eklediğiniz bir klasördeki bir dosyayı kullanmasını isteyin.
- **"401" ya da belirteç hataları:** belirteç değişti (Studio yeniden başlatıldı ya da {{ui:Yeni belirteç}}). Yeni belirteci asistanın ayarlarına kopyalayın.
- **Değişikliği yanlıştı:** {{key:Mod+Z}} tuşuna basın. Tek bir basış, asistanın bir bütün işlemini geri alır.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri çağırdığı araçlarla birlikte, çalışılmış örnekler.
