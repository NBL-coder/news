import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  doGet = () => {
    const options = {
      url: 'https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=e5a08d533cb84ea4886413068feb7f06',
    };
  
    return from(Http.get(options))
  
  };
  
}
