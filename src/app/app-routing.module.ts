import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component'

export const CONTACTS_ROUTE = 'contacts';

const routes: Routes = [
  { path: 'contacts', component: ContactComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
