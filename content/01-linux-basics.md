# Základy Linuxu

## 1. Struktura

**`/etc`**: **Velící centrum**. Tady jsou konfigurační soubory systému a aplikací.

**`/var/log`**: **Black boxes**. Když něco spadne, tady se podívám.

**`/home`**: **Můj dům - můj hrad**. Místo pro moje skripty a projekty.

**`/bin` a `/usr/bin`**: Tady jsou „nástroje“ — příkazy jako `ls`, `python` nebo další systémové utility.

## 2. Práva k souborům

Každý soubor má tři základní typy práv:

- **Read (`r`)** — čtení
- **Write (`w`)** — zápis
- **Execute (`x`)** — spuštění

Práva jsou nastavena pro tři skupiny:

- **Owner** — vlastník
- **Group** — skupina
- **Others** — ostatní uživatelé

Příkaz `ls -l` to ukáže podrobně:

```bash
-rwxr-xr-- 1 george users 4096 May 13 10:25 script.py
```

- `rwx`: vlastník (`george`) může číst, zapisovat i spouštět.
- `r-x`: skupina (`users`) může číst a spouštět, ale nemůže soubor měnit.
- `r--`: ostatní mohou soubor pouze číst.

## 3. Terminál a Prompt

Terminál je textové rozhraní pro zadávání příkazů shellu. 

Prompt je místo v terminálu pro zadávání příkazů.

```bash
uzivatel@pocitac:~/dokumenty$
```

### rozborka promptu:

#### 1. "uzivatel" (Jméno přihlášeného uživatele)
- pod jakým účtem jsem právě přihlášen
- určuje to naše práva co všechno lze v systému dělat a přístup k souborům

#### 2. "@" (Zavináč)
- slouží pouze jako "spojka" pro jméno uživatele a název počítače

#### 3. "pocitac" (Hostname / Název stroje)
- název počítače nebo serveru, na kterém jsem

#### 4. ":" (Dvojtečka)
- "oddělovač" mezi názvem počítače a aktuálním umístěním

#### 5. "~/dokumenty" (Aktuální adresář / Cesta)
- ukazuje, v jaké složce se zrovna (v příkazové řádce) nacházím
- vlnovka "~" je domovský adresář aktuálního uživatele (např. /home/uzivatel)
- když jsem kdekoliv v domovské složce, uvidím např ~/dokumenty. Když jsem jinde v systému uvidím lomítko /

#### 6. "$" nebo "#" (Uživatelská práva)
- "$" (Dolar): přihlášení jako běžný uživatel = omezená práva
- "#" (Mřížka): přihlášení jako root (administrátor) = plná kontrola nad celým systémem

## 4. Přehled

| **Tool** | **Popis** | **Účel** | **Analogie** |
| :--- | :--- | :--- | :--- |
| **Terminál** | **Okno / Program** | **Grafické okno** - zobrazuje text a přijímá vstupy z klávesnice. Sám nic nevyhodnocuje. | Monitor |
| **Shell** | **Obecný pojem** | Jakýkoliv program - **překladač**, který běží uvnitř terminálu a zpracovává příkazy. | Motor |
| **Bash** | **Konkrétní Shell** | Výchozí shell v **Linuxu** a macOS. Používá textové příkazy. | Model motoru |
| **PowerShell** | **Konkrétní Shell** | Pokročilý shell od Microsoftu, výchozí ve **Windows**. Na rozdíl od Bash pracuje i s objekty, ne jen s textem. | Speciální model motoru |
| **WSL** | **Podsystém (Vrstva)** | Umožňuje spouštět plnohodnotné linuxové prostředí (včetně Bash) přímo uvnitř operačního systému Windows bez virtualizace. | Překladatel - Windows zvládne Linux |