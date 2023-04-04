import { BehaviorSubject } from "rxjs";
import { DailyValue } from "../models/daily-value";
import { Component } from "@angular/core";
import { HelperBrlExchangeService } from "src/app/components/homePage/services/helper-brl-exchange.service";

@Component({
  selector: "app-last-days-cards",
  templateUrl: "./last-days-cards.component.html",
  styleUrls: ["./last-days-cards.component.css"],
})
export class LastDaysCardsComponent {
  $dataDaily!: BehaviorSubject<DailyValue[]>;

  constructor(private helperBrlExchange: HelperBrlExchangeService) {}

  ngOnInit(): void {
    this.$dataDaily = this.helperBrlExchange.$dailyData;
  }
}
