import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Project} from "../models/Project.model";
/**
 * Created by 3ppat on 11/11/2016.
 */

@Injectable()
export class ProjectService{

  private BASE_URL = 'http://localhost:1337/project';

  constructor(private _http : Http){}

  /**
   * Get all projects from api
   */
  getProjects() : Observable<Project[]> {
    return this._http.get(this.BASE_URL)
      .map((res  : Response) => res.json())
      .catch((error : any ) => Observable.throw(error))
  }

  /**
   * Update project to api
   */
  updateProject(project): Observable<Project> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(project);
    let url = this.BASE_URL + '/' + project.id;
    return this._http.put(url, body, headers).map((res: Response) => res.json());
  }

  /**
   * Post new project to api
   */
  createProject(project : Project) : Observable<Project>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(project);
    let url = this.BASE_URL;
    return this._http.post(url, body, headers).map((res: Response) => res.json());
  }

  deleteProject(project) : Observable<Project>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(project);
    let url = this.BASE_URL + '/' + project.id;
    return this._http.delete(url,options).map((res : Response) => res.json());
  }
}
