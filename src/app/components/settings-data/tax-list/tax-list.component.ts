import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tax } from 'src/app/models/settings-data/Tax';
import { TaxService } from 'src/app/services/settings-data/tax.service';

@Component({
  selector: 'app-tax-list',
  templateUrl: './tax-list.component.html',
  styleUrls: ['./tax-list.component.css'],
})
export class TaxListComponent implements OnInit, OnDestroy {

  taxes$ =this._taxService.taxes$;
  taxes!:Tax[];
  getTaxSubscription!:Subscription;
  deleteTaxSubscription!:Subscription

  constructor(private _taxService:TaxService,
              private chnageDectorRef:ChangeDetectorRef,
              private router:Router){}


getListOfTaxes(){
  this._taxService.getTaxes().subscribe({
    next:((taxList:Tax[])=>{
    this.taxes=taxList
    this.chnageDectorRef.detectChanges();
    }),
    error:((err:any)=>console.log("error", err)),
    complete:(()=>{})
  })
}

  delete(event:any){
    let taxId=event.currentTarget.id;
    this._taxService.deleteTax(taxId).subscribe({
      next:((resp:any)=>console.log("response", resp)),
      error:((err:any)=>console.log("error", err)),
      complete:(()=>{this.getListOfTaxes()})
    })
  }

  update(event:any){
    let taxId=event.currentTarget.id;
    this.router.navigate(['/tax',taxId])
  }
  ngOnDestroy(): void {
    this.getTaxSubscription && this.getTaxSubscription.unsubscribe();
    this.deleteTaxSubscription&& this.deleteTaxSubscription.unsubscribe();
  }
  ngOnInit(): void {
   this.getListOfTaxes();
 }

}
