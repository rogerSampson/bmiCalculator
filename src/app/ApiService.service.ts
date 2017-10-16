
import { Injectable } from '@angular/core';
import { Headers, Response, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    FistCalc: number = 0;
    constructor(private http: Http) { }



    public GetAllItems = (): Observable<any> => {
        return this.http.get('URL')
            .map((response: Response) => <any>response.json())
            .do(x => console.log(x));
    }

    public CalculateBMI = (WeightKG: number, HeightCM: number): number => {

        let HeightInMeters = (HeightCM / 100);
        let FistCalc = (WeightKG / HeightInMeters);
        let BMIResult = (FistCalc / HeightInMeters);

        return BMIResult;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}
