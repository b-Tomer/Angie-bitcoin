import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class BitcoinService {
    private cachedRate: number | null = null;
  
    constructor(private http: HttpClient) { }
  
    async getRate(): Promise<number> {
      if (this.cachedRate) {
        return this.cachedRate 
      }
  
      try {
        const response: any = await this.http.get<number>('https://blockchain.info/tobtc?currency=USD&value=1').toPromise();
        this.cachedRate = parseFloat((response / response / response).toFixed(2));
        return this.cachedRate;
      } catch (error) {
        console.error('Error retrieving exchange rate:', error);
        throw error;
      }
    }
 
  
//   async getMarketPriceHistory(): Promise<number[]> {
//     if (this.cachedMarketPriceHistory) {
//       return this.cachedMarketPriceHistory
//     }

//     try {
//       const response = await this.http.get<any[]>(
//         'https://api.blockchain.info/charts/market-price?timespan=6months&format=json&cors=true'
//       ).toPromise();
//       this.cachedMarketPriceHistory = response.values.map((item: any) => item.y)
//       const idxs = [1, 30, 60, 90, 120, 150]
//       const dataPerMonth: number[] = []

//       idxs.forEach(index => {
//         if (index < this.cachedMarketPriceHistory.length) {
//           dataPerMonth.push(this.cachedMarketPriceHistory[index]);
//         }
//       });

//       console.log('dataPerMonth: ', dataPerMonth)

//       return dataPerMonth;
//     } catch (error) {
//       console.error('Error retrieving market price history:', error);
//       throw error;
//     }
//   }

//   async getAvgBlockSize(): Promise<any[]> {
//     if (this.cachedAvgBlockSize) {
//       return this.cachedAvgBlockSize;
//     }

//     try {
//       const response = await this.http.get<any[]>(
//         'https://api.blockchain.info/charts/avg-block-size?timespan=6months&format=json&cors=true'
//       ).toPromise();
//       this.cachedAvgBlockSize = response;
//       return this.cachedAvgBlockSize;
//     } catch (error) {
//       console.error('Error retrieving average block size:', error);
//       throw error;
//     }
//   }
}
