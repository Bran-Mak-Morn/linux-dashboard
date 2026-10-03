## 📜 Cheatsheet: 

Headless instalace Raspberry Pi (Windows → RPi)

## 1. Příprava karty (Raspberry Pi Imager) – naformátování OS
### Klíčový je krok v "nastavení"
    • Hostname: např. rpi / server / raspberry
    • Username / Password: např. pi / tvoje_heslo 
    • Wireless LAN:
        ◦ SSID + Heslo (pozor na překlepy!).
        ◦ Country: PE
    • Services (Služby):
        ◦ ✅ Enable SSH (Povolit SSH).
        ◦ ✅ Use password authentication.

## 2. Hledání Raspberry v síti (PowerShell na PC)

### Základní test (zda funguje Hostname):
```bash
ping rpi.local
```

### Hledání podle MAC adresy (ARP tabulka): Zobrazí zařízení, se kterými tvůj PC nedávno mluvil. Hledej MAC začínající na b8, dc nebo e4.
```bash
arp -a
```

### Aktivní sken sítě (Hrubá síla): Donutí všechna zařízení v rozsahu .1 až .100 odpovědět (aktualizuje ARP tabulku).
```bash
1..100 | % {ping -n 1 -w 50 192.168.1.$_} | Select-String "TTL="
```

## 3. Připojení (SSH)
### žádost o připojení:
```bash
ssh pi@rpi.local
```

### pokud znám IP:
```bash
ssh pi@192.168.1.48
```
První připojení:

1. Hláška Are you sure...? -> Napiš: yes (+ Enter).
2. Hláška password: -> Napiš heslo (nic se nezobrazuje) (+ Enter).

## 4. Příkazy po přihlášení (Linux Terminál)
- Co udělat hned, jak mám linux prompt
```bash
pi@rpi:~ $
```
### Aktualizace celého systému:
```bash
sudo apt update && sudo apt full-upgrade -y
```

### Kontrola času a data (Nutné pro logy):
```bash
date
```

- Pokud čas/datum nesedí, nastavit přes: 
```bash
sudo raspi-config -> Localization
```

### Restartování systému:
```bash
sudo reboot
```

### Bezpečné vypnutí (Před vytažením ze zásuvky!):
```bash
sudo shutdown -h now
```