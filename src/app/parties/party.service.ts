import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PartyService {
    constructor(private jsonp: Jsonp) {

    }

    getParties() {
        return this.jsonp.get("").map(res => res.json());
    }

    searchParties(searchStr: string) {
        var search = new URLSearchParams();
        search.set('query', searchStr);
        return this.jsonp.get("", { search }).map(res => res.json());
    }
}

