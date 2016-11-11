import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
/**
 * Created by 3ppat on 11/11/2016.
 */

@Injectable()
export class ProjectService{

  private BASE_URL = 'http://localhost:1337/project';

  constructor(private _http : Http){}

  public getProjects() : Observable<Project[]> {
    return this._http.get(this.BASE_URL)
      .map((res  : Response) => res.json())
      .catch((error : any ) => Observable.throw(error))
  }
}
