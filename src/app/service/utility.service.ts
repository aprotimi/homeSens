import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

   constructor() {}

    // *********************** Sorting methods ***************************//
  setOrder(list:any, order:boolean, key:string) {
    if (list && list.length > 0) {
      list.sort(function(a:any, b:any) {
          const varA = (typeof(a[key] === 'string')) ? a[key].toUpperCase() : a[key];
          const varB = (typeof(b[key] === 'string')) ? b[key].toUpperCase() : b[key];
          let comparison = 0;
          if (varA > varB) { comparison = 1;
          } else if (varA <= varB) { comparison = -1; }
          return ( !order ? (comparison * -1) : comparison);
      });
    }
    return list;
  };

  setOrderByNumber(list:any, key:string) {
      list.sort(function(a:any, b:any) {
          return a[key] - b[key]
      })
      return list;
  };

  setOrderByDate(list:any, key:string) {
    list.sort(function(a:any, b:any) {
        var dateA = a && a[key] ? new Date(a[key]).getTime() : 0;
        var dateB = b && b[key] ? new Date(b[key]).getTime() : 0;
        return dateA > dateB ? 1 : -1;  
    })
    return list;
  };
}