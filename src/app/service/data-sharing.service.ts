import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalAmout: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
