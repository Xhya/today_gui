import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HTTPRestService } from './rest.http.service';

@Injectable({
    providedIn: 'root',
})
export abstract class RestService extends HTTPRestService {
    static API_ROOT: string = environment.serverUrl;
    private static DEFAULT_HEADERS = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    protected getAPIUrl(): string {
        return RestService.API_ROOT;
    }

    protected getHttpHeaders(): object {
        return RestService.DEFAULT_HEADERS;
    }
}
