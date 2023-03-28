import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { TaxComponent } from './components/settings-data/tax/tax.component';
import { TaxExemptionsComponent } from './components/settings-data/tax-exemptions/tax-exemptions.component';
import { GstinComponent } from './components/settings-data/gstin/gstin.component';
import { WarehouseComponent } from './components/settings-data/warehouse/warehouse.component';
import { BranchComponent } from './components/settings-data/branch/branch.component';
import { TransactionseriesComponent } from './components/settings-data/transactionseries/transactionseries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaxListComponent } from './components/settings-data/tax-list/tax-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    TaxComponent,
    TaxExemptionsComponent,
    GstinComponent,
    WarehouseComponent,
    BranchComponent,
    TransactionseriesComponent,
    TaxListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
