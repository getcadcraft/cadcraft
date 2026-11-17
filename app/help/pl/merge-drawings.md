---
title: Scalanie zmian dwóch osób w jednym rysunku
summary: Pozwól git, Fossil lub Mercurial scalać dwie kopie pliku DWG lub DXF obiekt po obiekcie, używając klucza, który CadCraft zachowuje dla każdego obiektu.
keywords: scalanie, git, fossil, mercurial, kontrola wersji, różnice, konflikt, trójstronne, scalanie cadcraft, klucz, gitattributes, DWG, DXF
from: 71482bf9
---

Dwie osoby edytują ten sam rysunek. Jeśli zmieniły różne obiekty, scalanie może przebiec automatycznie: nic nie trzeba poprawiać ręcznie.

## Co to umożliwia

CadCraft nadaje każdemu rysowanemu obiektowi krótki **klucz**, który się nie zmienia i nigdy nie jest przypisany do dwóch obiektów. Jest zapisywany razem z obiektem w pliku DWG lub DXF (jako dodatkowe dane, które inne programy zachowują). Scalanie wyszukuje obiekty po kluczu, a nie po ich położeniu w pliku, ponieważ każdy program przy zapisie numeruje położenia na nowo. Wyłącz to w {{ui:Ustawienia}} › CadCraft › Pliki przyjazne scalaniu, jeśli nigdy nie scalasz; pliki są wtedy mniejsze o około 10 procent.

Rysunek zapisany przed pojawieniem się kluczy nadal się scala: jego obiekty otrzymują klucz na podstawie miejsca w pliku, to samo dla każdego, kto go otworzy.

## Konfiguracja

Git potrzebuje dwóch wierszy raz na repozytorium:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita uruchom ręcznie: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial przyjmują te same trzy pliki w swoim własnym ustawieniu narzędzia scalania.

## Zasady

- Obiekt zmieniony tylko po jednej stronie zostaje przyjęty. Ta sama zmiana po obu stronach zostaje przyjęta raz.
- Ta sama właściwość zmieniona na dwa sposoby to **konflikt**: Twoja wersja zostaje, a raport wymienia obie wartości. Otwórz wynik, sprawdź ten obiekt i popraw go ręcznie.
- Obiekt dodany po dowolnej stronie zostaje zachowany. Obiekt usunięty po jednej stronie i niezmieniony po drugiej zostaje usunięty. Usunięty po jednej stronie, a zmieniony po drugiej: zostaje usunięty i zgłoszony.
- Warstwy, bloki, style tekstu i wymiarowania, arkusze i widoki nazwane scalają się w ten sam sposób. Więzy są powiązane z obiektami, które nazywają.
- Wynik jest zapisywany w tym samym formacie i wersji pliku co Twój.

Nie scalane: kolejność, w jakiej rysowane są obiekty, jest Twoja, a następnie idą obiekty dodane przez drugą stronę. Zmiany tej samej definicji bloku po obu stronach są konfliktem, nigdy nie są łączone. Nic nie jest przesyłane; wszystko działa na Twoim komputerze.
