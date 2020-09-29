import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class HTTPRestService {
    constructor(protected http: HttpClient) {}

    protected abstract getAPIUrl(): string;
    protected abstract getHttpHeaders(): object;

    // ========== UTILS ================ //

    protected getInlineGetParams(getParams: any): string {
        let inline: string = '';
        Object.entries(getParams).forEach(([key, value], i) => {
            if (value) {
                inline += `${i === 0 ? '?' : '&'}${key}=${value}`;
            }
        });
        return inline;
    }

    // ========== HTTP VERBS =========== //


    public get<T>(
        endpoint: string,
        getParams: any = {},
        headersParams?: object
    ): Observable<any> {
        const inline: string = this.getInlineGetParams(getParams);
        const header = headersParams ? headersParams : this.getHttpHeaders();
        return this.http.get<T>(`${this.getAPIUrl()}/${endpoint}/${inline}`, {
            headers: { ...header },
            observe: 'response'
        });
    }

    public post<T>(
        endpoint: string,
        body: any = undefined,
        paramsHeader?: object
    ): Observable<any> {
        const header = paramsHeader ? paramsHeader : this.getHttpHeaders();
        return this.http.post<T>(`${this.getAPIUrl()}/${endpoint}/`, body, {
            headers: {
                ...header
            },
            observe: 'response'
        });
    }

}
