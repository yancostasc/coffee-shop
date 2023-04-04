import { BehaviorSubject, Observable } from "rxjs";
import { CurrentValue } from "../models/current-value";
import { DailyValue } from "../models/daily-value";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperBrlExchangeService {
  dailyValue: Array<DailyValue> = [];
  currentValue!: CurrentValue;
  $newCurrentValue = new BehaviorSubject<CurrentValue>(this.currentValue);
  dailyDataValue!: DailyValue[];
  $dailyData = new BehaviorSubject<DailyValue[]>(this.dailyDataValue);

  constructor() {}

  getDailyExchangeRate(data: any[]): Array<DailyValue> {
    for (let i = 0; i < data.length - 1; i++) {
      let element: DailyValue = {
        open: Number(data[i].open),
        close: Number(data[i].close),
        date: new Date(data[i].date),
        low: Number(data[i].low),
        high: Number(data[i].high),
        diff: Number((data[i].close - data[i + 1].close) / data[i].close),
      };
      element != undefined ? this.dailyValue.push(element) : null;
    }

    return this.dailyValue;
  }
  setCurrentValue(value: CurrentValue) {
    this.$newCurrentValue.next(value);
  }

  setDailyData(value: DailyValue[]) {
    this.$dailyData.next(value);
  }
}
