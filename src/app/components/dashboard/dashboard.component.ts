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
  config: CountdownConfig;
  constructor() {
    var t1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    var t2 = new Date();
    var dif = t1.getTime() - t2.getTime();

    var seconds = dif / 1000;
    var secondBtwDates = Math.abs(seconds);

    const CountdownTimeUnits: Array<[string, number]> = [
      ['Y', 1000 * 60 * 60 * 24 * 365], // years
      ['M', 1000 * 60 * 60 * 24 * 30], // months
      ['D', 1000 * 60 * 60 * 24], // days
      ['H', 1000 * 60 * 60], // hours
      ['m', 1000 * 60], // minutes
      ['s', 1000], // seconds
      ['S', 1], // million seconds
    ];
    const TimeUnits: Array<[string]> = [
      ['Days'],
      ['Hours'],
      ['Minutes'],
      ['Seconds'],
    ];

    this.config = {
      leftTime: secondBtwDates,
      format: 'DD HH mm ss',
      formatDate: ({ date, formatStr }) => {
        let duration = Number(date || 0);

        return CountdownTimeUnits.reduce((current, [name, unit]) => {
          if (current.indexOf(name) !== -1) {
            const v = Math.floor(duration / unit);
            duration -= v * unit;
            return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
              return v.toString().padStart(match.length, '0');
            });
          }
          return current;
        }, formatStr);
      },
      prettyText: (text) => {
        return text
          .split(' ')
          .map((v, index) =>
            `<div class="simply-section simply-days-section">
          <div>
              <span class="simply-amount">${v}</span>
              <span class="simply-word">${TimeUnits[index]}</span>
          </div>
      </div>`)
          .join('');
      }
    };

  }

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
