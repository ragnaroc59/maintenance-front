import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';


const routes: Routes = [
  { path: 'addCommande', component: AddCommandeComponent },
  { path: 'listCommandes', component: ListCommandesComponent },
  { path: 'chiffreAffaire', component: ChiffreAffaireComponent },
  { path: '', redirectTo: '/addCommande', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
