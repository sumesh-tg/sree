import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
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

}
