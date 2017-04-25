import { Peripheral } from 'raspi-peripheral';
import addon from '../build/Release/raspiSonarAddon';

// Sonar class provides a read method to interact with an ultrasonic sensor
export class Sonar extends Peripheral {
    constructor(config, callWiringPiSetup) {
        super(config);


        this.sensor = addon.RaspiSonar(
            { 
                config,             // trigger and echo pin number
                callWiringPiSetup: (callWiringPiSetup === undefined || callWiringPiSetup === null) 
                    ? true 
                    :  callWiringPiSetup
            }); 
    }
    
    // accepts function as an argument which is called back with a duration
    read(callback) {
        this.sensor.read(callback);
    }
}