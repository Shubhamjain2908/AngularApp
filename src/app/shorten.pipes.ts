import {Pipe, PipeTransform} from "@angular/core";

@Pipe( {
  name : 'shorten'
})
export class ShortenPipes implements PipeTransform {
  transform(value: any, limit: number) {
    // if (value.length > 10) {
    //   return value.substr(0, 10) + '...' ;
    // }
    // return value;
    if (value.length > limit) {
      return value.substr(0, limit) + '...' ;
    }
    return value;
  }
}
