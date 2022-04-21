import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PCconfig } from './pc.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}
  public addBook(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/books/add-book';
    return this.http.post(url, data);
  }
  public addAuthor(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/authors/add-author';
    return this.http.post(url, data);
  }
  public addNarrator(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/narrators/add-narrator';
    return this.http.post(url, data);
  }
  public addTopic(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/narrators/add-topic';
    return this.http.post(url, data);
  }
  public addAyat(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/narrators/add-ayat';
    return this.http.post(url, data);
  }
  public addComment(data:any): Observable<any> {
    const url = PCconfig.getPath() + '/narrators/add-comment';
    return this.http.post(url, data);
  }
}
