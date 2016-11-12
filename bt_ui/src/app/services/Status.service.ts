import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Status} from "../models/Status.model";
/**
 * Created by 3ppat on 11/11/2016.
 */

@Injectable()
export class StatusService{

  private BASE_URL = 'http://localhost:1337/Status';

  constructor(private _http : Http){}

  /**
   * Get all Statuses from api
   */
  getStatuses() : Observable<Status[]> {
    return this._http.get(this.BASE_URL)
      .map((res  : Response) => res.json())
      .catch((error : any ) => Observable.throw(error))
  }

  /**
   * Update Status to api
   */
  updateStatus(Status): Observable<Status> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Status);
    let url = this.BASE_URL + '/' + Status.id;
    return this._http.put(url, body, headers).map((res: Response) => res.json());
  }

  /**
   * Post new Status to api
   */
  createStatus(Status : Status) : Observable<Status>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Status);
    let url = this.BASE_URL;
    return this._http.post(url, body, headers).map((res: Response) => res.json());
  }

  deleteStatus(Status) : Observable<Status>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(Status);
    let url = this.BASE_URL + '/' + Status.id;
    return this._http.delete(url,options).map((res : Response) => res.json());
  }
}
