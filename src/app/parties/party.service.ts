import { Injectable } from '@angular/core';
import { Jsonp, Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PartyService {
    constructor(private http: Http, private jsonp: Jsonp) {
    }

    getParties() {
        return this.http.get("http://localhost:59794/api/Party/GetParties").map(res => res.json());
    }

    saveParty(party) {
        let headers = new Headers({ "content-type": "application/json" });
        let body = JSON.stringify(party);
        return this.http.post("http://localhost:59794/api/Party/SaveParty", body, { headers: headers }).map(res => res.json());
    }

    searchParties(searchStr: string) {
        var search = new URLSearchParams();
        search.set('query', searchStr);
        return this.jsonp.get("", { search }).map(res => res.json());
    }
}

