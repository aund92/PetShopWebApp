import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {MessageResponse} from '../response/message-response';
import {Material} from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  public api = environment.api + 'api/material';

  constructor(private http: HttpClient) {
  }

  create(request: Material): Observable<HttpResponse<MessageResponse>> {
    return this.http.post(this.api, request, {observe: 'response'});
  }

  findAll(): Observable<HttpResponse<Material[]>> {
    return this.http.get<Material[]>(this.api, {observe: 'response'});
  }


  public findById(id: any): Observable<HttpResponse<Material>> {
    return this.http.get(`${this.api}/${id}`, {observe: 'response'});
  }

  public delete(id: any): Observable<HttpResponse<MessageResponse>> {
    return this.http.delete(`${this.api}/${id}`, {observe: 'response'});
  }

  update(category: Material): Observable<HttpResponse<MessageResponse>> {
    return this.http.put(this.api, category, {observe: 'response'});
  }

}
