import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { projectPayment } from './payment-details.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  // for endpoint server
  url:string = environment.apiBaseUrl+"/paymentDetail"

  // for list data
  list:projectPayment[]=[];

  // for form Data
  formData: projectPayment= new projectPayment()
formSubmitted: boolean = false;

  constructor(private http:HttpClient) { }

  refreshList() {
    // this.http.get('url')
    this.http.get(this.url)
      .subscribe({
        next:res=>{
          // console.log(res);
          this.list = res as projectPayment[]
        },
        error:err=>{console.log(err)}
      })
  }
  postProjectPayment(){
   return this.http.post(this.url,this.formData)
  }

  putProjectPayment(){
    return this.http.put(this.url+'/'+this.formData.paymentId,this.formData)
   }

  deleteProjectPayment(id:number){
    return this.http.delete(this.url+'/'+id)
   }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new projectPayment()
    this.formSubmitted=false;
  }
}
