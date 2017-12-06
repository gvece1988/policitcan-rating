import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { PartiesComponent } from './parties/parties.component';
import { PartyListComponent } from './parties/party-list/party-list.component';
import { PartyService } from "./parties/party.service";
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateListComponent,
    PartiesComponent,
    PartyListComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    RoutingModule
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
