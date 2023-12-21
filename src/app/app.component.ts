import { Component, OnInit } from '@angular/core';

import { FormService } from './service/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appVersion = "v.0.0.1";
  constructor(
    public formService: FormService
  ) {

  }

  ngOnInit() {
  }
}
