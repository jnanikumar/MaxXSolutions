import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { AddNewCustomerComponent } from '../components/add-new-customer/add-new-customer.component';
import { AddNewPlantComponent } from '../components/add-new-plant/add-new-plant.component';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    {path:'',component:AdminDashboardComponent,pathMatch:'full'},
    {path:'adminDashboard',component:AdminDashboardComponent},
    {path:'userDashboard',component:UserDashboardComponent},
    {path:'addNewCustomer',component:AddNewCustomerComponent},
    {path:'addNewPlant',component:AddNewPlantComponent},
    {path:'customerDetails',component:CustomerDetailsComponent},
    {path:'userDashBoard',component:UserDashboardComponent},
    {path:'login',component:LoginComponent},

];
