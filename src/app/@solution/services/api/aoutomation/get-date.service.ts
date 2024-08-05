import { Injectable } from '@angular/core';
import { DataService } from '../../common/data.service'; // مسیر را به درستی وارد کنید
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  private todayDateUrl = 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam'; // آدرس API برای تاریخ امروز

  constructor(private dataService: DataService) { }

  getTodayDate(): Observable<any> {
    return this.dataService.get<any>(this.todayDateUrl, {}); // استفاده از متد get سرویس DataService
  }
}