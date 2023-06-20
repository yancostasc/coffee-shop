import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CoffeeData } from './models/coffee-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'http://localhost:3000/coffee';

  constructor(private http: HttpClient) {}

  getCoffeeData(): Observable<CoffeeData> {
    return this.http.get<CoffeeData>(this.apiUrl);
  }

  getFileFromCoffeeData(): Observable<string> {
    return this.getCoffeeData().pipe(map((coffeeData) => coffeeData.file));
  }
}
