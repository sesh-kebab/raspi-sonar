import { Peripheral } from 'raspi-peripheral';
import addon from '../build/Release/raspiSonarAddon';

export class Sonar extends Peripheral {
    constructor(config) {
        super(config);
        
        this.sensor = addon.sonarFactory(config); 
    }
    
    read(callback) {
        this.sensor.read(callback);
    }
}