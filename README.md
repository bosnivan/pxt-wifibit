# pxt-wifibit
Paket naredbi za [WiFi:bit](https://e-radionica.com/hr/wifi-bit.html). Služi za pristup Internetu putem WiFi mreže, za slanje i primanje podataka.
## Naredbe
### Serijski poveži micro:bit i WiFi:bit
![alt text](/images/01%20-%20connectToWiFiBit.png "connectToWiFiBit()")
<br/>
Treba ju staviti na početak svakog programa.
<br/>
### Spoji se na WiFi mrežu
![alt text](/images/02%20-%20connectToWiFiNetwork.png "connectToWiFiNetwork()")
<br/>
Treba ju samo jednom izvršiti i zatim se može ukloniti iz programa. WiFi:bit se nadalje spaja automatski.
<br/>
### Odspoji se s WiFi mreže
![alt text](/images/03%20-%20disconnectFromWifiNetwork.png "disconnectFromWifiNetwork()")
<br/>
Nije potrebna kod klasičnog korištenja.
<br/>
### Izvrši AT naredbu
![alt text](/images/04%20-%20executeAtCommand.png "executeAtCommand()")
Namijenjena je naprednim korisnicima, za slučajeve koji nisu pokriveni ostalim naredbama. [Popis AT naredbi.](https://room-15.github.io/blog/2015/03/26/esp8266-at-command-reference/)
<br/>
### Izvrši neku od HTTP metoda
![alt text](/images/05%20-%20executeHttpMethod.png "executeHttpMethod()")
Glavna naredba. Služi za slanje, promjenu, brisanje i dohvat podataka pomoću neke od [HTTP metoda](https://www.tutorialspoint.com/http/http_methods.htm). Iznad je prikazan osnovni oblik naredbe. Klikom na gumb + dodaju se neobavezna polja zaglavlja i tijela metode. Izgled i korištenje vidljivi su na primjeru korištenja, pri dnu ove stranice.
<br/>
### Zapiši vrijednost u zadani pin Blynka
![alt text](/images/06%20-%20writePinValue.png "writePinValue()")
Naredba za rad s [Blynkom](https://blynk.io/).
<br/>
### Pročitaj vrijednost zadanog pina Blynka
![alt text](/images/07%20-%20readPinValue.png "readPinValue()")
Naredba za rad s [Blynkom](https://blynk.io/).
<br/>
### Prijelaz u novi redak
![alt text](/images/08%20-%20newline.png "newline()")
Koristi se u sklopu naredbe izvršavanja HTTP metode, kada zaglavlja i/ili tijelo imaju više redaka. Korištenje je vidljivo na primjeru korištenja, pri dnu ove stranice.
<br/>
### Promijeni trajanje pauza u sklopu izvođenja HTTP metoda
![alt text](/images/09%20-%20changeHttpMethodWaitPeriod.png "changeHttpMethodWaitPeriod()")
Naredba je dostupna samo u JavaScript dijelu MakeCoda. Služi za ubrzavanje ili usporavanje izvršavanja HTTP metode. Ono u ovom paketu traje oko 15 sekundi. Pritom većina vremena otpada na čekanje povratnih informacija odredišta. Vrijednosti su postavljene da pokriju većinu slučajeva. Ako trebate brže izvođenje ili trebate dodati još vremena na čekanje povratnih informacije, potrebno je izvršiti ovu naredbu. Početna vrijednost je 1000. Ako ju izvršite s vrijednošću 500, naredba će se duplo brže izvršavati. Ako ju izvršite s naredbom 2000, naredba će se duplo sporije izvršavati. Moguće je koristiti i druge vrijednosti, u skladu s potrebama.
<br/>
##Primjer izvođenja:
![alt text](/images/example.png "Example")
<br/>
<br/>
## License
MIT License
<br/>
<br/>
## Supported targets

* for PXT/microbit
