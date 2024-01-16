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
        let indexList:any = [];
        if (response && response.length) {
          for (let i = 0; i < response.length; i++) {
            let room:any = this.rooms.find((x:any) => x.sensorId == response[i]["sensorId"]);
            let roomIndex:any = this.rooms.findIndex((x:any) => x.sensorId == response[i]["sensorId"]);
            if (roomIndex > -1 && room && this.rooms[roomIndex]) {
              indexList.push(roomIndex);
              this.rooms[roomIndex] = response[i];
              //let r = document.getElementById(room.sensorId + "-room-id");
              // if (r) {
              //   console.log(r)
              //   //r.classList.add("notification-effect");
              //   // setTimeout(() => {
              //   //   let rr = document.getElementById(room.sensorId + "-room-id");
              //   //   if (rr) {
              //   //     console.log(rr)
              //   //     rr.classList.toggle("notification-effect");
              //   //   }

              //   // }, 1000)
              // }
            } else {
              this.rooms.push(response[i])
            }
          }
        }

        // if (indexList.length) {
        //   for (let i = 0; i < indexList.length; i++) {
        //     if (this.rooms[indexList[i]]) {
        //       let rr = document.getElementById(this.rooms[indexList[i]].sensorId + "-room-id");
        //       if (rr) {
        //         console.log(rr)
        //         rr.classList.toggle("notification-effect");
        //       }
        //     }
        //   }
        // }

        // setTimeout(() => {
        //   if (indexList.length) {
        //     for (let i = 0; i < indexList.length; i++) {
        //       if (this.rooms[indexList[i]]) {
        //         let rr = document.getElementById(this.rooms[indexList[i]].sensorId + "-room-id");
        //         if (rr) {
        //           console.log(rr)
        //           rr.classList.toggle("notification-effect");
        //         }
        //       }
        //     }
        //   }
        // }, 6000)

        this.rooms = this.utilityService.setOrder(this.rooms, true, "sensorId");
      }, error => {

      }
    )
  }
}
