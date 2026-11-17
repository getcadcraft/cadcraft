---
title: Koordinatlarla çizim
summary: Mutlak, bağıl ve kutupsal koordinatları yazarak ve doğrudan mesafe girerek bir kat planının dış hatlarını tam ölçüde çizin.
keywords: line, pline, polyline, koordinatlar, bağıl, kutupsal, mutlak, doğrudan mesafe, @, noktaları yazma, tam, ortogonal
from: 19e82350
---

## Ne oluşturacaksınız

6000 × 4500 boyutunda, 2000 × 1500'lük bir çentiği olan L şeklinde bir odanın dış hattı, tam ölçüde çizilmiş; ayrıca 30 derecelik bir duvar. Bir noktayı yazmanın dört yolunun hepsini kullanacaksınız. Milimetre ile çalışın: bir çizim birimi bir milimetreyi temsil eder.

Her biçimin kısa özeti için bkz. [Koordinat ve mesafe girişi](topic:coordinate-entry).

## Başlamadan önce

1. CadCraft'ı açın. Bir çizim açıksa önce {{ui:Yeni}} düğmesine tıklayın.
2. Hiçbir şey seçili olmasın diye {{key:Esc}} tuşuna basın. Sağ panel {{ui:Geçerli ayarlar}} yazar.
3. {{ui:Birimler}} değerini {{ui:Milimetre}} yapın. Hiçbir şey yeniden boyutlandırılmaz; bu yalnızca sayfaların ve çıktıların bir birimin ne anlama geldiğini bilmesini sağlar.

## Mutlak koordinatlar: ilk nokta

Mutlak koordinat, orijinden ölçülen ve `x,y` biçiminde yazılan bir konumdur.

1. `L` yazıp {{key:Enter}} tuşuna basın. İstem `İlk noktayı belirtin:` yazar.
2. `0,0` yazıp {{key:Enter}} tuşuna basın.

Çizgi artık orijinden imlece doğru esnek olarak uzanıyor. Durum çubuğundaki koordinatlar, siz hareket ettirdikçe başlangıç noktasından olan mesafeyi ve açıyı gösterir.

## Bağıl koordinatlar: @dx,dy

Bağıl koordinat `@dx,dy` biçiminde yazılır: son noktadan itibaren yatayda bu kadar, düşeyde bu kadar. Negatif sayılar sola ya da aşağıya gider.

3. `@6000,0` yazıp {{key:Enter}} tuşuna basın. 6000'lik bir çizgi sağa doğru uzanır.
4. `@0,3000` yazıp {{key:Enter}} tuşuna basın.
5. `@-2000,0` yazıp {{key:Enter}} tuşuna basın.
6. `@0,1500` yazıp {{key:Enter}} tuşuna basın.

Odanın sağ tarafında yukarı tırmanan dört birbirine bağlı çizgi görmelisiniz.

## Doğrudan mesafe girişi: çıplak bir sayı

Tek bir sayı yazdığınızda CadCraft, imlecin yönünde o mesafeye gider. Çizgilerin tam yatay ya da dikey olması için Ortogonal'i açın.

7. {{key:F8}} tuşuna basın ya da durum çubuğundaki {{ui:Ortogonal}} düğmesine tıklayın. Durum çubuğu "Ortogonal açık" yazar.
8. İmleci son noktanın soluna getirin. Esnek çizgi yatay kalır.
9. `4000` yazıp {{key:Enter}} tuşuna basın. Çizgi sola doğru 4000 uzanır.
10. İmleci son noktanın altına getirin.
11. `4500` yazıp {{key:Enter}} tuşuna basın. Başlangıç noktasına geri dönersiniz.
12. Komutu bitirmek için boş istemde {{key:Enter}} tuşuna basın.

Artık altı ayrı çizgiden oluşan kapalı bir L şeklinde dış hattınız var.

13. Hepsini görmek için {{ui:Sınırlar}} düğmesine tıklayın.

:::mac
Mac klavyelerde F8, medya oynatmayı kontrol edebilir. **fn** tuşunu basılı tutup F8'e basın ya da {{ui:Ortogonal}} düğmesine tıklayın. Bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).
:::

## Kutupsal koordinatlar: @uzaklık<açı

Kutupsal koordinat `@uzaklık<açı` biçiminde yazılır. Açılar derece cinsindendir ve pozitif X yönünden saat yönünün tersine ölçülür: 0 sağ, 90 yukarı, 180 sol, 270 (ya da -90) aşağıdır.

14. `L` yazıp {{key:Enter}} tuşuna basın.
15. Sağ alt köşeden başlamak için `6000,0` yazıp {{key:Enter}} tuşuna basın.
16. `@2500<-30` yazıp {{key:Enter}} tuşuna basın. 2500'lük bir çizgi köşeden, yatayın 30 derece altında, aşağı ve sağa doğru çıkar.
17. Komutu bitirmek için {{key:Enter}} tuşuna basın.

`@` olmadan yazılan `2500<30` gibi bir kutupsal koordinat, son noktadan değil orijinden ölçülür.

## Aynı dış hat tek bir çoklu çizgi olarak

Altı ayrı çizgi birçok iş için yeterlidir; ancak bir çoklu çizgi (polyline) tek bir nesnedir: ofseti, ölçümü ve seçimi bütün olarak yapılır. Aynı girişle {{cmd:PLINE}} komutunu kullanın.

1. `PL` yazıp {{key:Enter}} tuşuna basın.
2. İlk dış hattın altından başlamak için `0,-6000` yazıp {{key:Enter}} tuşuna basın.
3. `@6000,0` yazın, ardından {{key:Enter}} tuşuna basın.
4. `@0,3000` yazın, ardından {{key:Enter}} tuşuna basın.
5. `@-2000,0` yazın, ardından {{key:Enter}} tuşuna basın.
6. `@0,1500` yazın, ardından {{key:Enter}} tuşuna basın.
7. `@-4000,0` yazın, ardından {{key:Enter}} tuşuna basın.
8. Çoklu çizgiyi kapatmak ve komutu bitirmek için `C` yazıp {{key:Enter}} tuşuna basın.
9. Yeni dış hatta tıklayın. Sağ panel "Çoklu çizgi" ve kapalı olduğu için {{ui:Köşe sayısı}}, {{ui:Uzunluk}} ve {{ui:Alan}} değerlerini gösterir.

Alan 24000000 okumalıdır (milimetre kare, yani 24 metrekare).

## Çizim sırasındaki seçenekler

- {{cmd:LINE}} ve {{cmd:PLINE}} içinde `U` yazıp {{key:Enter}} tuşuna basarak komuttan çıkmadan son parçayı geri alın.
- {{cmd:LINE}} içinde `C`, en az iki parça olduğunda ilk noktaya geri kapatır.
- {{cmd:PLINE}} içinde `A` yay parçalarına geçer (her yay, önceki parçadan yumuşakça devam eder) ve `L` çizgilere geri döner. Yay modundayken kapatma seçeneği `CL`dir.
- {{cmd:LINE}} içinde `İlk noktayı belirtin:` isteminde {{key:Enter}} tuşuna basmak, verdiğiniz son noktadan başlar; böylece kaldığınız yerden devam edebilirsiniz.

## Sık yapılan hatalar

- **`@` yerine `6000,0` yazmak.** `@` olmadan nokta, son noktadan değil orijinden ölçülür; bu yüzden çizgi beklenmedik bir yere gider. CadCraft'ta `x,y` her zaman mutlaktır. Geri almak için `U` yazıp {{key:Enter}} tuşuna basın.
- **Ondalık nokta yerine virgül yazmak.** Ondalık için nokta kullanılır: `1250.5`. Virgül her zaman X ile Y'yi ayırır.
- **Doğrudan mesafe yanlış yöne gitti.** Çıplak bir sayı imleci izler. {{key:Enter}} tuşuna basmadan önce imleci istediğiniz tarafa getirin ve düz çizgiler için {{ui:Ortogonal}} seçeneğini açın.
- **"Nokta ya da seçenek anahtar sözcüğü gerekli."** CadCraft yazdığınızı anlamadı. Sayının içindeki boşlukları ya da eksik virgülü kontrol edip yeniden yazın.
- **Fit ve inç.** CadCraft yalnızca düz sayıları okur. İnç çizimde 12'-6" için `150`, fit çizimde 12,5 fit için `12.5` yazın.
