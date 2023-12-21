import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { FormService } from '../../service/form.service';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public rooms:any = [];

  public timer: any;
  constructor(
    public formService: FormService,
    public utilityService: UtilityService
  ) {
    this.timer = interval(60000).subscribe(x => {
      this.getNow();
    })
  }

  ngOnInit() {
    this.getNow();
  }

  getNow() {
    this.formService.getNow().subscribe(
      (response:any) => {
        if (response && response.length) {
          for (let i = 0; i < response.length; i++) {
            let room:any = this.rooms.find((x:any) => x.room == response[i]["room"]);
            if (room) {
              room = response[i];
              let r = document.getElementById(room.room + "-room-id");
              if (r) {
                r.classList.toggle("notification-effect");
                setTimeout(() => {
                  let rr = document.getElementById(room.room + "-room-id");
                  if (rr) {
                    rr.classList.toggle("notification-effect");
                  }

                }, 1000)
              }
            } else {
              this.rooms.push(response[i])
            }
          }
        }
        this.rooms = this.utilityService.setOrder(this.rooms, true, "room");
      }, error => {

      }
    )
  }
}
