import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tax } from 'src/app/models/settings-data/Tax';
import { TaxService } from 'src/app/services/settings-data/tax.service';
import { tap, take, finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  constructor(private _taxService: TaxService,
              private router: Router,
              private route: ActivatedRoute) { }

  taxForm!: FormGroup;
  taxId!:number;
  tax!: Tax;

  ngOnInit(): void {
    this.taxId= parseInt(this.route.snapshot.paramMap.get('id')!);
    this.taxForm = new FormGroup({
      taxName: new FormControl('', Validators.required),
      taxPercentage: new FormControl('', Validators.required),
      taxSpecificType: new FormControl('', Validators.required),
    })
    if(this.taxId ){
      this._taxService.getTaxById(this.taxId).subscribe({
        next:((taxDetails:Tax)=>{
          this.tax=taxDetails;
        }),
        error:(()=>{}),
        complete:(()=>{
          this.populateForm()
        })
      })
    }
  
  }
  populateForm() {
    this.taxForm.get('taxName')?.setValue(this.tax.taxName);
    this.taxForm.get('taxPercentage')?.setValue(this.tax.taxPercentage);
    this.taxForm.get('taxSpecificType')?.setValue(this.tax.taxSpecificType);
  }
  onSubmit() {
    const tax: Tax = {
      taxName: this.taxForm.get('taxName')?.value,
      taxPercentage: this.taxForm.get('taxPercentage')?.value,
      taxSpecificType: this.taxForm.get('taxSpecificType')?.value,
      isEditable: true,
    }
    tax && this.taxId ? this.updateTax(tax,this.taxId) : this.createTax(tax);
  }

  createTax(tax: Tax) {
    this._taxService.createTax(tax).subscribe({
      next: ((data: any) => {
        this.router.navigate(['/taxList'])
      }),
      error: ((err: any) => console.log("err")),

    })

  }
  updateTax(tax: Tax, taxId:number){
    this._taxService.updateTax(tax,taxId).subscribe({
      next: ((data: any) => {
        this.router.navigate(['/taxList'])
      }),
      error: ((err: any) => console.log("err")),

    })
  }

}
