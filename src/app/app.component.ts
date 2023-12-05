import { Component, OnInit } from '@angular/core';

import { FormService } from './service/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appVersion = "v.0.0.1";
  public rooms:any = [
    {
      "date": "2023-12-05T12:03:28.478708",
      "room": "190",
      "temperatureC": "23.3",
      "humidity": "41",
      "summary": null
    },
    {
      "date": "2023-12-05T12:03:20.640923",
      "room": "141",
      "temperatureC": "8.8",
      "humidity": "46",
      "summary": null
    },
    {
      "date": "2023-12-05T12:03:03.27506",
      "room": "228",
      "temperatureC": "21.8",
      "humidity": "54",
      "summary": null
    }
  ]
  constructor(
    public formService: FormService
  ) {

  }

  ngOnInit() {
    this.getNow();
  }

  getNow() {
    this.formService.getNow().subscribe(
      response => {
        console.log(response)
      }, error => {

      }
    )
  }
}
