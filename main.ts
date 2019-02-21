/**
 * Naredbe za rad s WiFi:bitom.
 */
//% color=#2B5797 weight=90 icon="\uf1eb" block="WiFi:bit"
namespace WiFiBit {

    function writeToSerial(data: string, waitTime: number): void {
        serial.writeString(data + "\u000D" + "\u000A")
        if (waitTime > 0) {
            basic.pause(waitTime)
        }
    }

    /**
     * Serijski poveži micro:bit i WiFi:bit.
     */
    //% weight=100
    //% blockId="wfb_connect" block="poveži se s WiFi:bitom"
    export function connectToWiFiBit(): void {
        serial.redirect(
            SerialPin.P16,
            SerialPin.P8,
            BaudRate.BaudRate115200
        )
        basic.pause(10)
        // Restart module:
        writeToSerial("AT+RST", 2000)
        // Disable echo (Doesn’t send back received command):
        writeToSerial("ATE0", 1000)
        // WIFI mode = Station mode (client):
        writeToSerial("AT+CWMODE=1", 5000)
    }

    /**
     * Spoji se na svoju WiFi mrežu.
     * @param ssid naziv WiFi mreže, eg: "SSID"
     * @param key lozinka WiFi mreže, eg: "ključ"
     */
    //% weight=99
    //% blockId="wfb_wifi_on" block="spoji se na WiFi mrežu: %ssid| %key"
    export function connectToWiFiNetwork(ssid: string, key: string): void {
        // Connect to AP:
        writeToSerial("AT+CWJAP=\"" + ssid + "\",\"" + key + "\"", 6000)
    }

    /**
     * Odspoji se s WiFi mreže.
     */
    //% weight=98
    //% blockId="wfb_wifi_off" block="odspoji se s WiFi mreže"
    export function disconnectFromWiFiNetwork(): void {
        // Disconnect from AP:
        writeToSerial("AT+CWQAP", 6000)
    }

    /**
     * Izvrši AT naredbu.
     * @param command AT naredba, eg: "AT"
     * @param waitTime pauza nakon naredbe, eg: 1000
     */
    //% weight=97
    //% blockId="wfb_at" block="izvrši AT naredbu %command| i zatim pričekaj %waitTime| ms"
    export function executeAtCommand(command: string, waitTime: number): void {
        writeToSerial(command, waitTime)
    }

    /**
     * Izvrši HTTP metodu GET.
     * @param host adresa servera, eg: "httpbin.org"
     * @param port port servera, eg: 80
     * @param queryString ulazni parametri, eg: "/ip"
     */
    //% weight=96
    //% blockId="wfb_get" block="izvrši HTTP metodu GET, server: %host| port: %port| ulazni parametri: %queryString"
    export function submitGetMethod(host: string, port: number, queryString: string): void {
        
    }

}