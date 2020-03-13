import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ProduitComponent } from './produit/produit.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCommandeComponent,
    ListCommandesComponent,
    ProduitComponent,
    ChiffreAffaireComponent
        ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgApexchartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
