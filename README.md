# pxt-wifibit

Paket naredbi za [WiFi:bit](https://e-radionica.com/hr/wifi-bit.html). Naredbe su sljedeće:

Serijski poveži micro:bit i WiFi:bit:

![alt text](/images/01%20-%20connectToWiFiBit.png "connectToWiFiBit()")

_Uvijek ide na početak programa._


Spoji se na WiFi mrežu:

![alt text](/images/02%20-%20connectToWiFiNetwork.png "connectToWiFiNetwork()")

_Potrebno ju je samo jednom izvršiti i zatim ukloniti iz programa. WiFi:bit se nadalje spaja automatski._


Odspoji se s WiFi mreže:

![alt text](/images/03%20-%20disconnectFromWifiNetwork.png "disconnectFromWifiNetwork()")

_Koristi se kod promjene WiFi mreže._


Izvrši AT naredbu:

![alt text](/images/04%20-%20executeAtCommand.png "executeAtCommand()")

_Za naprednije korisnike. [Popis naredbi.](https://room-15.github.io/blog/2015/03/26/esp8266-at-command-reference/)_


Izvrši neku od HTTP metoda:

![alt text](/images/05%20-%20executeHttpMethod.png "executeHttpMethod()")

_Glavna naredba. Služi za slanje i dohvat podataka._


Zapiši vrijednost u zadani pin Blynka:

![alt text](/images/06%20-%20writePinValue.png "writePinValue()")

_Naredba za rad s [Blynkom](https://blynk.io/)._


Pročitaj vrijednost zadanog pina Blynka:

![alt text](/images/07%20-%20readPinValue.png "readPinValue()")

_Naredba za rad s [Blynkom](https://blynk.io/)._


Prijelaz u novi redak:

![alt text](/images/08%20-%20newline.png "newline()")

_Koristi se kada zaglavlja ili tijelo imaju više redaka._


Promijeni trajanje pauza u sklopu izvođenja HTTP metoda:

![alt text](/images/09%20-%20changeHttpMethodWaitPeriod.png "changeHttpMethodWaitPeriod()")

_Naredba koja je dostupna samo u JavaScript dijelu MakeCoda. Služi za ubrzavanje ili usporavanje slanja/primanja podataka._



Primjer izvođenja:

![alt text](/images/example.png "newline()")




## License
TBD


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

