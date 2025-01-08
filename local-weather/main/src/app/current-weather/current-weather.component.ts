import { DatePipe, DecimalPipe } from '@angular/common'
import {Component, OnInit} from '@angular/core';
import {ICurrentWeather} from "../interface";

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent implements OnInit {

  current!: ICurrentWeather;

  ngOnInit() {
  }

}
