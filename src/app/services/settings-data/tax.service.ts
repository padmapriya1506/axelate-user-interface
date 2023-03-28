import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tax } from 'src/app/models/settings-data/Tax';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const headersData = new Headers();
headersData.append('Access-Control-Allow-Origin',  '*');
headersData.append('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private _service="pilotData"
  private _module="tax"


  constructor(private _http: HttpClient) { } 

  taxes$= this._http.get<Tax[]>(`${environment.pilotdataServiceUrl}${this._module}`);

  public createTax(taxDetails:Tax ):Observable<Tax> {
    return this._http.post<Tax>(`${environment.pilotdataServiceUrl}${this._module}`, taxDetails);
  }

  public deleteTax(taxId:string):Observable<Tax[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",taxId);
    return this._http.delete<Tax[]>(`${environment.pilotdataServiceUrl}${this._module}`,{params:queryParams});
  }

  public getTaxes():Observable<Tax[]>{ 
    return this._http.get<Tax[]>(`${environment.pilotdataServiceUrl}${this._module}`);
  }  

  public getTaxById(taxId:any):Observable<Tax>{ 
    return this._http.get<Tax>(`${environment.pilotdataServiceUrl}${this._module}/${taxId}`);
  }
  public updateTax(taxDetails:Tax, taxId:any):Observable<Tax>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",taxId);
    return this._http.put<Tax>(`${environment.pilotdataServiceUrl}${this._module}`, taxDetails,{params:queryParams});
  }



  
  
  

}
