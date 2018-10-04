export class CityDetails {
//    constructor() {
        //

        cityName: string;
    stateCode: string;
    constructor(cityName?: string, stateCode?: string) {
        this.cityName = cityName || '';
        this.stateCode = stateCode || '';
    }
    //}
}
