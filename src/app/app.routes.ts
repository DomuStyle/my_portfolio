import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PrivacypolicyComponent } from './shared/privacypolicy/privacypolicy.component';



export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'privacypolicy', component: PrivacypolicyComponent}
];
