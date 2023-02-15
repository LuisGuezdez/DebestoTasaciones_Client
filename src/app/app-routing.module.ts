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
import { CochePlistAdminRoutedComponent } from './component/application/coche/routed/admin/coche-plist-admin-routed/coche-plist-admin-routed.component';
import { CocheEditAdminRoutedComponent } from './component/application/coche/routed/admin/coche-edit-admin-routed/coche-edit-admin-routed.component';
import { CocheNewAdminRoutedComponent } from './component/application/coche/routed/admin/coche-new-admin-routed/coche-new-admin-routed.component';
import { CocheRemoveAdminRoutedComponent } from './component/application/coche/routed/admin/coche-remove-admin-routed/coche-remove-admin-routed.component';
import { CocheViewAdminRoutedComponent } from './component/application/coche/routed/admin/coche-view-admin-routed/coche-view-admin-routed.component';
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/compra-plist-admin-routed/compra-plist-admin-routed.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/compra-view-admin-routed/compra-view-admin-routed.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/compra-remove-admin-routed/compra-remove-admin-routed.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/compra-new-admin-routed/compra-new-admin-routed.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/compra-edit-admin-routed/compra-edit-admin-routed.component';
import { TasacionPlistAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-plist-admin-routed/tasacion-plist-admin-routed.component';
import { TasacionViewAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-view-admin-routed/tasacion-view-admin-routed.component';
import { TasacionRemoveAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-remove-admin-routed/tasacion-remove-admin-routed.component';
import { TasacionNewAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-new-admin-routed/tasacion-new-admin-routed.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioHomeClienteRoutedComponent } from './component/application/usuario/routed/cliente/usuario-home-cliente-routed/usuario-home-cliente-routed.component';
import { CochePlistClienteUnroutedComponent } from './component/application/coche/unrouted/cliente/coche-plist-cliente-unrouted/coche-plist-cliente-unrouted.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRouterComponent },
  { path: 'cliente/usuario/home', component: UsuarioHomeClienteRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent },
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
  { path: 'admin/sucursal/plist', component: SucursalPlistAdminRoutedComponent},
  { path: 'admin/sucursal/view/:id', component: SucursalViewAdminRoutedComponent },
  { path: 'admin/sucursal/remove/:id', component: SucursalRemoveAdminRoutedComponent},
  { path: 'admin/sucursal/edit/:id', component: SucursalEditAdminRoutedComponent},
  { path: 'admin/sucursal/new', component: SucursalNewAdminRoutedComponent },
  { path: 'admin/coche/plist', component: CochePlistAdminRoutedComponent},
  { path: 'admin/coche/view/:id', component: CocheViewAdminRoutedComponent},
  { path: 'admin/coche/remove/:id', component: CocheRemoveAdminRoutedComponent},
  { path: 'admin/coche/edit/:id', component: CocheEditAdminRoutedComponent},
  { path: 'admin/coche/new', component: CocheNewAdminRoutedComponent},
  { path: 'cliente/coche/plist', component: CochePlistClienteUnroutedComponent},
  { path: 'admin/compra/plist', component: CompraPlistAdminRoutedComponent},
  { path: 'admin/compra/view/:id', component: CompraViewAdminRoutedComponent},
  { path: 'admin/compra/remove/:id', component: CompraRemoveAdminRoutedComponent},
  { path: 'admin/compra/new', component: CompraNewAdminRoutedComponent},
  { path: 'admin/compra/edit/:id', component: CompraEditAdminRoutedComponent},
  { path: 'admin/tasacion/plist', component: TasacionPlistAdminRoutedComponent},
  { path: 'admin/tasacion/view/:id', component: TasacionViewAdminRoutedComponent},
  { path: 'admin/tasacion/remove/:id', component: TasacionRemoveAdminRoutedComponent},
  { path: 'admin/tasacion/new', component: TasacionNewAdminRoutedComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
