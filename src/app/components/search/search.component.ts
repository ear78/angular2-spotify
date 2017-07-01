import { Component } from '@angular/core';
import { SwapiService } from '../../services/spotify.service';
import { Results } from '../../../results';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  providers: [SwapiService]
})

export class SearchComponent {
    searchStr:number;
    searchRes: Results;

    constructor(private _spotifyService:SwapiService){

    }


    searchSwapi(){
        // this._spotifyService.searchSwapi(this.searchStr).subscribe(res => {this.searchRes = res.results});

        this._spotifyService.searchSwapi(this.searchStr).subscribe(res => console.log(res.results));
    }
}
