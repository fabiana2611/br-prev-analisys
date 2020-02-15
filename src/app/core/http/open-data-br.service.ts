import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class OpenDataBrService {

    constructor(private http: HttpClient) { }

    public transformDataBenConcedidoUfEspecie() {
        console.log("transformDataBenConcedidoUfEspecie");
        this.transformData('http://dadosabertos.dataprev.gov.br/opendata/con02/formato=json');
    }

    public transformDataAcidenteTrabalhoPorCID() {
        console.log("transformDataAcidenteTrabalhoPorCID");
        this.transformData('http://dadosabertos.dataprev.gov.br/opendata/act07/formato=json');
    }

    public transformDataAcidenteTrabalhoPorUF() {
        console.log("transformDataAcidenteTrabalhoPorUF");
        this.transformData('http://dadosabertos.dataprev.gov.br/opendata/act01/formato=json');
    }

    public transformDataValorArrecadadoPorFonteUF() {
        console.log("transformDataValorArrecadadoPorFonteUF");
        this.transformData('http://dadosabertos.dataprev.gov.br/opendata/Arr16/formato=json');
    }

    private transformData(url: string) {
        this.http.get(url)
            .pipe(map(respData => {
                //const benArray = [];
                for (const key in respData) {
                    if (respData.hasOwnProperty(key) && key !== 'total') {
                        return { ...respData[key], id: key };
                    }
                }
                //return benArray;
            }))
            //.subscribe (resp => console.log(resp));
            //.subscribe (resp => console.log(resp[0].node));
            .subscribe(resp => {
                for (var x in resp[0].node) {
                    console.log(`${x}: ${resp[0].node[x]}`);
                }
            }

            );
    }
    // private transformDataToType(){
    //   this.http.get<[key: string ]: Post>('http://dadosabertos.dataprev.gov.br/opendata/AIn01/formato=json')
    //     .pipe(
    //       map(respData  => {
    //       const benArray:Post[] = [];
    //       for (const key in respData){
    //         if(respData.hasOwnProperty(key)) {
    //           benArray.push({...respData[key], id: key } );
    //         }
    //       }
    //       return benArray;
    //     }))
    //     .subscribe (resp => console.log(resp));
    // }
    /*
    private transformData(){
      this.http.get('http://dadosabertos.dataprev.gov.br/opendata/con01/formato=json')
        .pipe(map(respData => {
          const benArray = [];
          for (const key in respData){
            if(respData.hasOwnProperty(key)) {
              benArray.push({...respData[key], id: key } );
            }
          }
          return benArray;
        }))
        //.subscribe (resp => console.log(resp));
        //.subscribe (resp => console.log(resp[0][0]));
        //.subscribe (resp => console.log(resp[0][0].node.Ano));
        .subscribe (resp => console.log(resp[0][0].node['Ano']));
    }
  */
}