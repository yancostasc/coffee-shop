import { CurrentValue } from '../../models/current-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBrlExchangeService {
  url = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open';
  apiKey = 'RVZG0GHEV2KORLNA';

  constructor(private http: HttpClient) {}

  getCurrentExchangeRate(fromSymbol: string): Observable<CurrentValue> {
    return this.http
      .get<CurrentValue>(
        `${this.url}/currentExchangeRate?apiKey=${this.apiKey}&from_symbol=${fromSymbol}&to_symbol=BRL`
      )
  }

  getDailyExchangeRate(fromSymbol: string): Observable<any> {
    return this.http
      .get<any>(
        `${this.url}/dailyExchangeRate?apiKey=${this.apiKey}&from_symbol=${fromSymbol}&to_symbol=BRL`
      )
  }
}
