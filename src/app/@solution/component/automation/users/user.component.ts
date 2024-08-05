import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
   // private modalService: NgbModal
    //,private dialogService: NbDialogService
  ) 
  {
  }
  ngOnInit() {
  }
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  openUserFormModal() {
    const modalRef = this.modalService.open(UserFormComponent, { size: 'lg' });
    modalRef.componentInstance.Id = 1; // می‌توانید مقادیر دیگری را نیز ارسال کنید
  }
}