import {NgModule} from '@angular/core';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes = [
  {path: 'characters', component: TabsComponent
    , children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule'},
  {path: '**', redirectTo: '/characters'} // catch all unhandled routes and redirect to '/'
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
