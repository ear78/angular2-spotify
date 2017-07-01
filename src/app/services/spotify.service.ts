import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SwapiService {
    private baseUrl: string;

    constructor(private http:Http){

    }

    // searchSwapi(str:string, type='people'){
    //     this.baseUrl = 'http://swapi.co/api/';
    //     return this._http.get(this.baseUrl)
    //         .map(res => res.json());
    //
    // }
    searchSwapi(num:number){
        this.baseUrl = 'http://swapi.co/api/people/';
        return this.http.get(this.baseUrl + num)
                    .map(res => res.json());
    }
}
