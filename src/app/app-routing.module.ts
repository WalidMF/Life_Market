import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsListByCategoryComponent } from './Components/products-list-by-category/products-list-by-category.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { FavItemComponent } from './Components/fav-item/fav-item.component';
import { AuthGuard } from './guards/auth.guard';
import { RequestPasswordResetComponent } from './component/request-password-reset/request-password-reset.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { AddressComponent } from './component/address/address.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';
import { OrderComponent } from './Components/Dashboard/order/order.component';
import { MainDashboardComponent } from './Components/Dashboard/main-dashboard/main-dashboard.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { OffersComponent } from './Components/Dashboard/offers/offers.component';
import { ContactComponent } from './Components/Dashboard/contact/contact.component';
import { CustomersComponent } from './Dashbord/Customers/Main Customers/customers.component';
import { DeliveryComponent } from './Dashbord/Delivery/delivery/Main Delivery/delivery.component';
import { AdminsComponent } from './Dashbord/Admins/admins/Main Admin/admins.component';
import { EditAdminComponent } from './Dashbord/Admins/admins/edit-admin/edit-admin.component';
import { AddAdminComponent } from './Dashbord/Admins/admins/add-admin/add-admin.component';
import { EditCustomerComponent } from './Dashbord/Customers/Edit Customer/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Dashbord/Customers/Add Customer/add-customer/add-customer.component';
import { EditDeliveryComponent } from './Dashbord/Delivery/delivery/Edit Delivery/edit-delivery/edit-delivery.component';
import { AddDeliveryComponent } from './Dashbord/Delivery/delivery/Add Delivery/add-delivery/add-delivery.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';



const routes: Routes = [

  {path: '', redirectTo:"/main/home", pathMatch:"full"},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-Password-Request',component:RequestPasswordResetComponent},

  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'products/list/:id', component:ProductsListComponent},
    {path: 'products/list/category/:id', component:ProductsListByCategoryComponent},
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'cart', component:CartComponent, canActivate:[AuthGuard]},
    {path: 'product', component:ProductDetailsComponent},
    {path: 'getcartprd', component:CartComponent},
    {path: 'about', component:AboutUsComponent},
    {path: 'contact', component:ContactUsComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'wishlist', component:FavItemComponent},
    
    {path:'profile',component:ProfileComponent, canActivate:[AuthGuard], children:[
      {path:'myaccount',component:MyaccountComponent},
      {path:'order',component:OrdersComponent},
      {path:'saveditems',component:SavedItemsComponent},
      {path:'address',component:AddressComponent},
      {path:'manage',component:ManageAccountComponent},
      {path:'updateaddress',component:UpdateAddressComponent}
    ]},

    {path: 'cart/check', component:CheckOutComponent},
    {path: 'cart', component:CartComponent},

    {path: '**', component:NotFoundComponent}
  ]},

  {path: 'admin', component:MainDashboardComponent, children: [
    {path: 'dashboard', component:DashboardComponent},
    {path: 'offers', component:OffersComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'orders',component:OrderComponent},
    {path: 'admin', component:AdminsComponent},
    {path: 'admin/add', component:AddAdminComponent},
    {path: 'admin/edit/:id', component:EditAdminComponent},
    {path: 'customer', component:CustomersComponent},
    {path: 'customer/add', component:AddCustomerComponent},
    {path: 'customer/edit/:id', component:EditCustomerComponent},
    {path: 'delivery', component:DeliveryComponent},
    {path: 'delivery/add', component:AddDeliveryComponent},
    {path: 'delivery/edit/:id', component:EditDeliveryComponent},
    {path: '**', component:NotFoundComponent}
  ]},
    
];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})


export class AppRoutingModule {


}
