import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { UsuarioPlistAdminRouterComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-router/usuario-plist-admin-router.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { SucursalFinderAdminUnroutedComponent } from './component/application/sucursal/unrouted/admin/sucursal-finder-admin-unrouted/sucursal-finder-admin-unrouted.component';
import { SucursalPlistAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-plist-admin-routed/sucursal-plist-admin-routed.component';
import { SucursalViewAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-view-admin-routed/sucursal-view-admin-routed.component';
import { SucursalRemoveAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-remove-admin-routed/sucursal-remove-admin-routed.component';
import { SucursalEditAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-edit-admin-routed/sucursal-edit-admin-routed.component';
import { SucursalNewAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-new-admin-routed/sucursal-new-admin-routed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRouterComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent },
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
  { path: 'admin/sucursal/plist', component: SucursalPlistAdminRoutedComponent},
  { path: 'admin/sucursal/view/:id', component: SucursalViewAdminRoutedComponent },
  { path: 'admin/sucursal/remove/:id', component: SucursalRemoveAdminRoutedComponent},
  { path: 'admin/sucursal/edit/:id', component: SucursalEditAdminRoutedComponent},
  { path: 'admin/sucursal/new', component: SucursalNewAdminRoutedComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
