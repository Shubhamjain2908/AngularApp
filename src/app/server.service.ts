import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const head = new Headers({'content-type' : 'application/json'});
    return this.http.post('https://angularapp-http.firebaseio.com/data.json', servers, {headers: head});
  }

  getServers() {
    return this.http.get('https://angularapp-http.firebaseio.com/data')
      .map( (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'Fetched_' + server.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        // console.log(error);
        return Observable.throw('Something went wrong');
      }
    );
  }

  editServers(servers: any[]) {
    const head = new Headers({'content-type' : 'application/json'});
    return this.http.put('https://angularapp-http.firebaseio.com/data.json', servers, {headers: head});
  }

  getAppName() {
    return this.http.get('https://angularapp-http.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
