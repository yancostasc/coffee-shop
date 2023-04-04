import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ApiBrlExchangeService } from "src/app/components/homePage/search/services/api-brl-exchange.service";
import { HelperBrlExchangeService } from "src/app/components/homePage/services/helper-brl-exchange.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  fromSymbol = new FormControl("", [
    Validators.required,
    Validators.minLength(2),
  ]);

  constructor(
    private apiBrlExchange: ApiBrlExchangeService,
    private helperBrlExchange: HelperBrlExchangeService
  ) {}

  ngOnInit(): void {}

  exchangeResult() {
    const stringFromSymbol = this.fromSymbol.value?.toString().toUpperCase();
    this.apiBrlExchange
      .getCurrentExchangeRate(stringFromSymbol as string)
      .subscribe((result) => {
        result.success ? this.helperBrlExchange.setCurrentValue(result) : null;
      });

    this.apiBrlExchange
      .getDailyExchangeRate(stringFromSymbol as string)
      .subscribe((result) => {
        result.success ? this.setDailyData(result) : null;
      });
  }

  private setDailyData(res: any) {
    const data = res.data;
    let dailyData = this.helperBrlExchange.getDailyExchangeRate(
      data.slice(0, 31)
    );
    this.helperBrlExchange.setDailyData(dailyData);
  }
}
