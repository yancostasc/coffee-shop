import { HelperBrlExchangeService } from "src/app/components/homePage/services/helper-brl-exchange.service";
import { CurrentValue } from "../models/current-value";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-daily-card",
  templateUrl: "./daily-card.component.html",
  styleUrls: ["./daily-card.component.css"],
})
export class DailyCardComponent implements OnInit {
  currentValue!: CurrentValue;
  constructor(private helperBrlExchange: HelperBrlExchangeService) {}

  ngOnInit(): void {
    this.helperBrlExchange.$newCurrentValue.subscribe(
      (result) => (this.currentValue = result)
    );
  }
}
