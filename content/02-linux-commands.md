# Příkazy a příkazová řádka

Základní práce v Linuxu spočívá v **kombinování** několika příkazů dohromady.

Příkazy lze spouštět samostatně nebo je spojovat pomocí přesměrování a pipe (`|`).


## 1. Pohyb v systému a práce se soubory

```bash
# lokace - vytiskne kde jsem
pwd

# do adresáře
cd /složka/dokument

# do nadřízené složky
cd ..

# vytvoření adresáře (v aktuální složce)
mkdir název

# vytvoření souboru
touch název

# smazání souboru
rm název

# kopírování souboru
cp originál nový_soubor

# přejmenování / přesun
mv starý_název nový_název

# otevření souboru v textovém editoru nano
nano soubor.txt
```

V Linuxu není přípona souboru tím, co rozhoduje o tom, zda soubor existuje nebo jak s ním systém pracuje. Přípona je především konvence používaná lidmi a aplikacemi.

## 2. Získávání a výpis informací

```bash
# vytiskne obsah souboru
cat file.txt

# tisk prvních / posledních 10 řádků
head file.txt
tail file.txt

# podrobné výpisy ze složky
ls -l

# skryté soubory
ls -a

# čitelnější velikosti souborů
ls -h

# seřazení podle času poslední úpravy
ls -t

# kombinace
ls -lah

# smazání obrazovky
clear
```

### `ls` — užitečné přepínače

| Přepínač | Význam |
|---|---|
| `-l` | long — podrobný výpis |
| `-a` | all — včetně skrytých souborů |
| `-h` | human-readable — čitelnější velikosti |
| `-t` | řazení podle času |

## 3. Kombinace

```bash
# přesune výsledek do nového souboru
# pokud neexistuje = vytvoří ho
# pokud existuje = přepíše jej
head names.txt > first10names.txt

# totéž, ale data se připojí na konec souboru
head names.txt >> first10names.txt

# vyhledá daný string v zadaném souboru
grep "goth" poe.txt

# pošle výsledek jako input do dalšího příkazu pomocí "|"
head names.txt | grep "John"

# vyhledá John Doe, ve výsledcích hledá "missing"
# a prvních 10 záznamů vytiskne
grep "John Doe" names.txt | grep "missing" | head

# vytiskne obsah dvou souborů
cat names.txt locations.txt

# obsah obou souborů vloží do nového souboru
cat names.txt locations.txt > results.txt

# totéž pro všechny soubory ve složce
cat * > results.txt
```

## Grep & Tail a Head 

### 4. GREP podrobně

```bash
# hledání bude case-insensitive
grep -i "victim" file.txt

# vyhledá přesně celé slovo
grep -w "Doe" file.txt

# vyhledá frázi v každém souboru ve složce
grep "victim" *

# totéž a navíc v podsložkách
grep -r "victim" *

# kromě nálezu vytiskne 4 řádky POD
grep -A 4 "Conan" heroes.txt

# kromě nálezu vytiskne 4 řádky NAD
grep -B 4 "Conan" heroes.txt

# vytiskne 4 řádky NAD i POD
grep -C 4 "Conan" heroes.txt

# vytiskne názvy souborů, ve kterých byly výsledky
grep -l "Kull" *

# získáme počet výskytů
grep -c "Kull" *

# získáme čísla řádků výsledků
grep -n "Kull" heroes.txt

# REGEX:
# slovo má 5 znaků, první je "t", třetí je "o"
# a hledání je case-insensitive
grep -i "t.o.." gods.txt
```

### 5. HEAD & TAIL podrobně

```bash
# získáme 15 prvních řádků
head -n 15 heroes.txt

# získáme vše kromě 15 posledních řádků
head -n -15 heroes.txt

# získáme 15 posledních řádků
tail -n 15 heroes.txt

# získáme obsah od 15. řádku dál
tail -n +15 heroes.txt
```

## 6. Zbytky

```bash
# počet řádků v souboru
wc -l heroes.txt
```
