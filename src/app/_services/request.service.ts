import { LookUp } from '@app/_models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    AcceptLanguage: 'ar',
  }),
};

@Injectable({ providedIn: 'root' })
export class RequestService {
  public lookUp: Observable<LookUp>;

  constructor(private http: HttpClient) {}

  getMinistries() {
    return this.http.get<LookUp[]>(
      'https://localhost:5001/api/LookUp/GetMinistries',
      httpOptions
    );
  }

  getMinistryById(Id: number) {
    return this.http.get<LookUp[]>(
      `https://localhost:5001/api/LookUp/GetMinistryById/${Id}`,
      httpOptions
    );
  }
  
}
