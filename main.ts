/**
 * Naredbe za rad s WiFi:bitom.
 */
//% color=#FFC0CB weight=90 icon="\uf1eb" block="WiFi:bit"
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
     * @param naziv WiFi mreže, eg: "naziv"
     * @param lozinka WiFi mreže, eg: "lozinka"
     */
    //% weight=99
    //% blockId="wfb_wifi_on" block="spoji se na WiFi mrežu: %naziv| %lozinka"
    export function connectToWiFiNetwork(naziv: string, lozinka: string): void {
        // Connect to AP:
        writeToSerial("AT+CWJAP=\"" + naziv + "\",\"" + lozinka + "\"", 6000)
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
     * @param naredba AT naredba, eg: "naredba"
     * @param pauza nakon naredbe, eg: "pauza"
     */
    //% weight=97
    //% blockId="wfb_at" block="izvrši AT naredbu: %naziv| %lozinka"
    export function executeAtCommand(naredba: string, pauza: number): void {
        writeToSerial(naredba, pauza)
    }

}