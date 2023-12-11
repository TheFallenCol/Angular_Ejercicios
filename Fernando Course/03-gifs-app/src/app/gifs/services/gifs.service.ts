import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList : Gif[] = [];

  private serviceUrl : string = 'https://api.giphy.com/v1/gifs';
  private apikey : string = 'Vv64Hy5j1w2kni8PBflIYTkExRcqG4Wb';
  private _tagHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagHistory];
  }

  public searchTag(tag : string): void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
     .set('api_key', this.apikey)
     .set('limit', '10')
     .set('q', tag)

    this.http.get<SearchResponse>(`${this,this.serviceUrl}/search`, { params })
     .subscribe( resp => {
        this.gifsList = resp.data;
    });
  }

  // Se podría utilizar para hacer llamado, es la manera como se realiza desde JavaScript
  // public async searchTag(tag : string): Promise<void> {
  //   if(tag.length === 0) return;
  //   this.organizeHistory(tag);

  //   fetch('api.giphy.com/v1/gifs/trending?api_key=Vv64Hy5j1w2kni8PBflIYTkExRcqG4Wb&q=valorant&limit=10')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  private organizeHistory(tag:string){
    tag  = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldtag) => oldtag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void{
    if( !localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }
}
