import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';

export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'project-details', component: ProjectdetailsComponent},
];
