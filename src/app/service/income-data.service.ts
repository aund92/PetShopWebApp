import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Income } from '../model/income';
import { IncomeResponse } from '../model/income-response';
import { IncomeRequest } from '../model/income-resquest';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {
  public api = environment.api + 'api/income';
  constructor(private http: HttpClient) { }

  searchByCondition(data: IncomeRequest): Observable<HttpResponse<IncomeResponse>> {
    return this.http.post(this.api,data,{observe: 'response'});
  }
}
