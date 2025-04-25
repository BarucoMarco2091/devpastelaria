import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardapioComponent } from './cardapio/cardapio.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'cardapio', component: CardapioComponent}
];
