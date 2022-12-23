import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  config: CountdownConfig = {
    leftTime: 60 * 60 * 24 * 10 * (2023 - 2022),
    format: 'dd E HH:mm:ss a',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<div class="simply-section simply-days-section">
        <div>
            <span class="simply-amount">${v}</span>
            <span class="simply-word">days</span>
        </div>
    </div>`)
        .join('');
    }
  };
  constructor() { }

  ngOnInit(): void {
    // this.countdown.begin();
    $(document).ready(function () {
      "use strict";
      // var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
      //  simplyCountdown('.simply-countdown-one', {
      //   year: d.getFullYear(),
      //   month: d.getMonth() + 1,
      //   day: d.getDate()
      // });

      // //jQuery example
      // $('#simply-countdown-losange').simplyCountdown({
      //   year: d.getFullYear(),
      //   month: d.getMonth() + 1,
      //   day: d.getDate(),
      //   enableUtc: false
      // });
    });

  }
  handleEvent($event: any) {
    console.log($event);
  }

}
