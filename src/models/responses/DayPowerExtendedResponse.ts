import { DaikinDataParser, ResponseDict } from '../../DaikinDataParser';
import { DaikinResponseCb } from '../../DaikinACRequest';

/**
 * Contains a set of arrays with 24 hour slots containing the power consumption (in 0.1 kWh)
 */
export class DayPowerExtendedResponse {
    constructor(
        public heatCurrentDay: number[],
        public coolCurrentDay: number[],
        public heatPrevious1Day: number[],
        public coolPrevious1Day: number[]) {
        
    }

    // Optional details

    public heatPrevious2Day?: number[];
    public coolPrevious2Day?: number[];

    public heatPrevious3Day?: number[];
    public coolPrevious3Day?: number[];

    public heatPrevious4Day?: number[];
    public coolPrevious4Day?: number[];

    public heatPrevious5Day?: number[];
    public coolPrevious5Day?: number[];

    public heatPrevious6Day?: number[];
    public coolPrevious6Day?: number[];
    
    public static parseResponse(dict: ResponseDict, cb: DaikinResponseCb<DayPowerExtendedResponse>): void {

        const heatCurrentDay = DaikinDataParser.resolveNumberArr(dict, 'curr_day_heat') as number[];
        const coolCurrentDay = DaikinDataParser.resolveNumberArr(dict, 'curr_day_cool') as number[];

        const heatPrevious1Day = DaikinDataParser.resolveNumberArr(dict, 'prev_1day_heat') as number[];
        const coolPrevious1Day = DaikinDataParser.resolveNumberArr(dict, 'prev_1day_cool') as number[];

        const result = new DayPowerExtendedResponse(
            heatCurrentDay,
            coolCurrentDay,
            heatPrevious1Day,
            coolPrevious1Day
        );

        result.heatPrevious2Day = DaikinDataParser.resolveNumberArr(dict, 'prev_2day_heat');
        result.coolPrevious2Day = DaikinDataParser.resolveNumberArr(dict, 'prev_2day_cool');

        result.heatPrevious3Day = DaikinDataParser.resolveNumberArr(dict, 'prev_3day_heat');
        result.coolPrevious3Day = DaikinDataParser.resolveNumberArr(dict, 'prev_3day_cool');

        result.heatPrevious4Day = DaikinDataParser.resolveNumberArr(dict, 'prev_4day_heat');
        result.coolPrevious4Day = DaikinDataParser.resolveNumberArr(dict, 'prev_4day_cool');

        result.heatPrevious5Day = DaikinDataParser.resolveNumberArr(dict, 'prev_5day_heat');
        result.coolPrevious5Day = DaikinDataParser.resolveNumberArr(dict, 'prev_5day_cool');

        result.heatPrevious6Day = DaikinDataParser.resolveNumberArr(dict, 'prev_6day_heat');
        result.coolPrevious6Day = DaikinDataParser.resolveNumberArr(dict, 'prev_6day_cool');

        cb(null, 'OK', result);
    }
}
