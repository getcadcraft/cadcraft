---
title: İki kişinin aynı çizimdeki düzenlemelerini birleştirme
summary: git, Fossil ya da Mercurial ile bir DWG ya da DXF'in iki kopyasını, CadCraft'ın her nesnede tuttuğu anahtar sayesinde nesne nesne birleştirin.
keywords: birleştir, git, fossil, mercurial, sürüm kontrolü, fark, çakışma, üç yönlü, cadcraft birleştirme, anahtar, gitattributes, DWG, DXF
from: 71482bf9
---

İki kişi aynı çizimi düzenler. Farklı nesneleri değiştirdilerse birleştirme otomatik olabilir: elle yeniden yapılacak bir şey yoktur.

## Nasıl çalışır

CadCraft, çizdiğiniz her nesneye asla değişmeyen ve hiçbir zaman iki nesneye verilmeyen kısa bir **anahtar** verir. Bu anahtar, nesneyle birlikte DWG ya da DXF içine kaydedilir (diğer programların sakladığı ek veri olarak). Birleştirme nesneleri dosyadaki konumlarına göre değil, bu anahtara göre arar; çünkü her program kaydederken konumları yeniden numaralandırır. Hiç birleştirme yapmıyorsanız, bunu {{ui:Ayarlar}} › CadCraft › Birleştirmeye uygun dosyalar bölümünden kapatın; dosyalar yaklaşık yüzde 10 küçülür.

Anahtarlar var olmadan önce kaydedilmiş bir çizim yine de birleşir: nesneleri, dosyadaki yerlerinden bir anahtar alır; bunu açan herkes için aynıdır.

## Kurulum

Git, depo başına bir kez iki satır ister:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# bir kez, her bilgisayarda
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan elle çalıştırın: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ve Mercurial aynı üç dosyayı kendi birleştirme aracı ayarlarında alır.

## Kurallar

- Yalnızca bir tarafta değiştirilmiş bir nesne alınır. Her iki tarafta da aynı olan değişiklik bir kez alınır.
- Aynı özelliğin iki farklı şekilde değiştirilmesi bir **çakışmadır**: sizin tarafınız kalır ve rapor iki değeri de listeler. Sonucu açın, o nesneye bakın ve elle düzeltin.
- İki taraftan birinde eklenen bir nesne korunur. Bir tarafta silinip diğer tarafta dokunulmamış bir nesne silinir. Bir tarafta silinip diğer tarafta değiştirilmiş olan: silinir ve rapor edilir.
- Katmanlar, bloklar, metin ve ölçülendirme stilleri, sayfalar ve adlandırılmış görünümler aynı şekilde birleşir. Kısıtlamalar, adlarını verdikleri nesneleri izler.
- Sonuç, sizinkiyle aynı dosya biçiminde ve sürümde yazılır.

Birleştirilmeyenler: nesnelerin çizim sırası sizin tarafınızdakidir, ardından diğer tarafın eklediği nesneler gelir. Her iki tarafta aynı blok tanımında yapılan değişiklikler bir çakışmadır, asla karıştırılmaz. Hiçbir şey sunucuya gönderilmez; her şey bilgisayarınızda çalışır.
