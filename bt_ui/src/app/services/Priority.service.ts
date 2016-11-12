import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Priority} from "../models/Priority.model";
/**
 * Created by 3ppat on 11/11/2016.
 */

@Injectable()
export class PriorityService{

  private BASE_URL = 'http://localhost:1337/Priority';

  constructor(private _http : Http){}

  /**
   * Get all Priority from api
   */
  getPriorities() : Observable<Priority[]> {
    return this._http.get(this.BASE_URL)
      .map((res  : Response) => res.json())
      .catch((error : any ) => Observable.throw(error))
  }

  /**
   * Update Priority to api
   */
  updatePriority(Priority): Observable<Priority> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Priority);
    let url = this.BASE_URL + '/' + Priority.id;
    return this._http.put(url, body, headers).map((res: Response) => res.json());
  }

  /**
   * Post new Priority to api
   */
  createPriority(Priority : Priority) : Observable<Priority>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Priority);
    let url = this.BASE_URL;
    return this._http.post(url, body, headers).map((res: Response) => res.json());
  }

  deletePriority(Priority) : Observable<Priority>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Priority);
    let url = this.BASE_URL + '/' + Priority.id;
    return this._http.delete(url,options).map((res : Response) => res.json());
  }
}
