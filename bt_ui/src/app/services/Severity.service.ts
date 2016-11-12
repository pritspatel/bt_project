import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Severity} from "../models/Severity.model";
/**
 * Created by 3ppat on 11/11/2016.
 */

@Injectable()
export class SeverityService{

  private BASE_URL = 'http://localhost:1337/Severity';

  constructor(private _http : Http){}

  /**
   * Get all Severitys from api
   */
  getSeverities() : Observable<Severity[]> {
    return this._http.get(this.BASE_URL)
      .map((res  : Response) => res.json())
      .catch((error : any ) => Observable.throw(error))
  }

  /**
   * Update Severity to api
   */
  updateSeverity(Severity): Observable<Severity> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Severity);
    let url = this.BASE_URL + '/' + Severity.id;
    return this._http.put(url, body, headers).map((res: Response) => res.json());
  }

  /**
   * Post new Severity to api
   */
  createSeverity(Severity : Severity) : Observable<Severity>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Severity);
    let url = this.BASE_URL;
    return this._http.post(url, body, headers).map((res: Response) => res.json());
  }

  deleteSeverity(Severity) : Observable<Severity>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Severity);
    let url = this.BASE_URL + '/' + Severity.id;
    return this._http.delete(url,options).map((res : Response) => res.json());
  }
}
