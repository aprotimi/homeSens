import { Component, OnInit } from '@angular/core';

import { FormService } from '../../service/form.service';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public rooms:any = [];
  constructor(
    public formService: FormService,
    public utilityService: UtilityService
  ) {
  }

  ngOnInit() {
    this.getNow();
  }

  getNow() {
    // this.formService.getNow().subscribe(
    //   (response:any) => {
    //     console.log(response)
    //     if (response && response.length) {
    //       for (let i = 0; i < response.length; i++) {
    //         let room = this.rooms.find((x:any) => x.room == response[i]["room"]);
    //         console.log(room)
    //         if (room) {
    //           room = response[i];
    //         } else {
    //           this.rooms.push(response[i])
    //         }
    //       }
    //     }
    //     this.rooms = this.utilityService.setOrder(this.rooms, true, "room")
    //   }, error => {

    //   }
    // )
  }
}
