import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'ngx-rugs',
    templateUrl: './rugs.component.html',
    styleUrls: ['./rugs.component.css']
  })
  export class RugComponent implements OnInit {
    constructor(
      
      //,private dialogService: NbDialogService
      ) {
        console.log(123546)
       }
    ngOnInit() 
    {
      console.log(123456)
      //this.onEdit(1)
      //this.open()
    }
    // onEdit(id: number) {
    //     const activeModal = this.modalService.open(UserFormComponent, {
    //       size: 'lg',
    //       container: 'nb-layout',
    //       backdrop: 'static',
    //       keyboard: false,
    //       windowClass: 'modal-xl'
    //     });
    //     activeModal.componentInstance.Id = id;
        
    //   }
    // open() {
    //   this.dialogService.open(UserFormComponent, {
        
    //   });
    // }

  }