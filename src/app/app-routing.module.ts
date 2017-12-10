import { PartyListComponent } from './parties/party-list/party-list.component';
import { PartiesComponent } from './parties/parties.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "partylist" },
    { path: "party", component: PartiesComponent },
    { path: "partylist", component: PartyListComponent }
];

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {

}