import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Party } from './party.model';
import { PartyService } from './party.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {  
  party: Party = { Name: null, Image: null };
  @Output()
  saveEvent = new EventEmitter();

  constructor(private partyService: PartyService) {
  }

  ngOnInit() {  
  }

  saveParty() {
    this.partyService.saveParty(this.party).subscribe(res => { this.saveEvent.emit(); });
  }
}
