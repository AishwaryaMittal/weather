export class WeatherForecast {
    //constructor() {}

     date: string;
    maxTemp: number;
    minTemp: number;
    constructor(date: string, maxTemp: number, minTemp: number) {
        this.date = date;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
    }
}
