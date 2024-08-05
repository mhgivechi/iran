import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GetDateService } from '../../../../services/api/aoutomation/get-date.service';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  ngOnInit(): void {
    this.getTodayDate();
  }
  id
  todayDate
  constructor(public activeModal: NgbActiveModal, private getDateService: GetDateService) { }
  getTodayDate(): void {
    this.getDateService.getTodayDate().subscribe({
      next: (response) => {
        this.todayDate = response.date;
      }
    });
  }
}
