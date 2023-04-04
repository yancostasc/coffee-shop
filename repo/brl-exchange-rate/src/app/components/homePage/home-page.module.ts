import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastDaysCardsComponent } from './last-days-cards/last-days-cards.component';
import { DailyCardComponent } from './daily-card/daily-card-now.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LastDaysCardsComponent,
    DailyCardComponent,
    SearchComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class HomePageModule {}
