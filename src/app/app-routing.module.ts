import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/dashboard/body/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"/dashboard/home",pathMatch:"full"},
  {path:"dashboard" , component :DashboardComponent,children:[
    {path:"",redirectTo:"/dashboard/blog",pathMatch:"full"},
    // {path:'blog',component:AocBlogComponent},
    {path:'home',component:HomeComponent},
    // {path:'contact-us',component:ContactUsComponent},
    // {path:'add-vendor',component:AddVendorComponent},
    // {path:'add-post',component:AddPostComponent},
    // {path:'blog-post',component:BlogPostComponent},
    // {path:'delete-post',component:DeletePostComponent},
    // {path:'preview',component:BlogPostComponent},
    // {path:'add-stock',component:AddStockDetailsComponent},
    // {path:'add-quality',component:AddQualityReportComponent},
    // {path:'aboutus',component:AocBlogComponent},
    // {path:'stock-details',component:StockDetailsComponent},
    // {path:'quality-report',component:QualityReportComponent},
    // {path:'**',component:HomePageComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
