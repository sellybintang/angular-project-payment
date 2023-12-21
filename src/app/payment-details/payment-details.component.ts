import { Component,OnInit } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { projectPayment } from '../shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';
// import{ PaymentDetailFormComponent} from './payment-detail-form/payment-detail-form.component';
@Component({
  selector: 'app-payment-details',
  // imports: [PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {
  constructor (public service:PaymentDetailsService,private toastr:ToastrService ){
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.service.refreshList()
  }

  populateForm(selectedRecord:projectPayment){
    this.service.formData= Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm("Are you sure you want to delete this?"))
    this.service.deleteProjectPayment(id)
    .subscribe({
      next:res=>{
        // console.log(res);
        this.service.list = res as projectPayment[]
        this.toastr.info('Deleted Successfully', 'Payment Detail Register')
      },
      error:err=>{console.log(err)}
    })
  }
  
}
