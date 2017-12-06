import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { PartyService } from "../party.service";
import { Party } from '../party.model';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {
  //partyList: Array<Party> = [{ name: "ADMK" }, { name: "DMK" }];
  partyList: Array<Party> = [{ name: "ADMK" }, { name: "DMK" }];

  constructor(private partyService: PartyService) {     
  }

  ngOnInit() {
    //this.partyService.getParties().subscribe(res => { this.partyList = res.results; });
  }

  searchParties() {
    this.partyService.searchParties("").subscribe(res => { this.partyList = res.results; });
  }
}
