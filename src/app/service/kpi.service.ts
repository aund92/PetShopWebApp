import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Material} from '../model/material';
import {Observable} from 'rxjs';
import {MessageResponse} from '../response/message-response';
import {Kpi} from '../model/kpi';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  public api = environment.api + 'api/kpi';

  constructor(private http: HttpClient) {
  }

  create(request: Kpi): Observable<HttpResponse<MessageResponse>> {
    return this.http.post(this.api, request, {observe: 'response'});
  }

  findAll(): Observable<HttpResponse<Kpi[]>> {
    return this.http.get<Kpi[]>(this.api, {observe: 'response'});
  }


  public findById(id: any): Observable<HttpResponse<Kpi>> {
    return this.http.get(`${this.api}/${id}`, {observe: 'response'});
  }

  public delete(id: any): Observable<HttpResponse<MessageResponse>> {
    return this.http.delete(`${this.api}/${id}`, {observe: 'response'});
  }

  update(id: any, category: Kpi): Observable<HttpResponse<MessageResponse>> {
    return this.http.put(`${this.api}/${id}`, category, {observe: 'response'});
  }
}
