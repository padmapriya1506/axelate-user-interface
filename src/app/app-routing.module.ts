import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './components/settings-data/branch/branch.component';
import { GstinComponent } from './components/settings-data/gstin/gstin.component';
import { TaxExemptionsComponent } from './components/settings-data/tax-exemptions/tax-exemptions.component';
import { TaxListComponent } from './components/settings-data/tax-list/tax-list.component';
import { TaxComponent } from './components/settings-data/tax/tax.component';
import { TransactionseriesComponent } from './components/settings-data/transactionseries/transactionseries.component';
import { WarehouseComponent } from './components/settings-data/warehouse/warehouse.component';

const routes: Routes = [
  { path: 'tax', component:TaxComponent},
  { path: 'taxList', component:TaxListComponent},
  { path: 'tax/:id', component:TaxComponent},
  { path: 'taxExemptions', component:TaxExemptionsComponent},
  { path: 'gstin', component:GstinComponent},
  { path: 'warehouse', component:WarehouseComponent},
  { path: 'branch', component:BranchComponent},
  { path: 'transactionSeries', component:TransactionseriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
