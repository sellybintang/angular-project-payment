import { Component } from '@angular/core';
import { PaymentDetailsService } from '../../shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { projectPayment } from '../../shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  // imports: [],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor (public service:PaymentDetailsService, private toastr:ToastrService){
    
  }
  onSubmit(form:NgForm){
    this.service.formSubmitted=true;
    if(form.valid){
      if(this.service.formData.paymentId==0)
      this.insertRecord(form);
    else
    this.updateRecord(form)
    }
    
  }
  insertRecord(form:NgForm){
    this.service.postProjectPayment()
      .subscribe({
        next:res=>{
          // console.log(res);
          this.service.list = res as projectPayment[]
          this.service.resetForm(form)
          this.toastr.success('Inserted Successfully', 'Payment Detail Register')
        },
        error:err=>{console.log(err)}
      })
  }
  updateRecord(form:NgForm){
    this.service.putProjectPayment()
      .subscribe({
        next:res=>{
          // console.log(res);
          this.service.list = res as projectPayment[]
          this.service.resetForm(form)
          this.toastr.info('Updated Successfully', 'Payment Detail Register')
        },
        error:err=>{console.log(err)}
      })
  }

}
