import { Peripheral } from 'raspi-peripheral';
import addon from '../build/Release/raspiSonarAddon';

// Sonar class provides a read method to interact with an ultrasonic sensor
export class Sonar extends Peripheral {
    constructor(config) {
        super(config);
        
        this.sensor = addon.sonarFactory(config); 
    }
    
    // accepts function as an argument which is called back with a duration
    read(callback) {
        this.sensor.read(callback);
    }
}