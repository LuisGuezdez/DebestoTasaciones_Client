import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { UsuarioPlistAdminRouterComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-router/usuario-plist-admin-router.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationService } from './service/pagination.service';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { SucursalFinderAdminUnroutedComponent } from './component/application/sucursal/unrouted/admin/sucursal-finder-admin-unrouted/sucursal-finder-admin-unrouted.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';
import { SucursalPlistAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-plist-admin-routed/sucursal-plist-admin-routed.component';
import { UsuarioBackButtonUnroutedComponent } from './component/application/usuario/unrouted/usuario-backButton-unrouted/usuario-backButton-unrouted.component';
import { SucursalDetailAdminUnroutedComponent } from './component/application/sucursal/unrouted/admin/sucursal-detail-admin-unrouted/sucursal-detail-admin-unrouted.component';
import { SucursalViewAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-view-admin-routed/sucursal-view-admin-routed.component';
import { SucursalBackButtonUnroutedComponent } from './component/application/sucursal/unrouted/admin/sucursal-backButton-unrouted/sucursal-backButton-unrouted.component';
import { SucursalRemoveAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-remove-admin-routed/sucursal-remove-admin-routed.component';
import { SucursalNewAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-new-admin-routed/sucursal-new-admin-routed.component';
import { SucursalEditAdminRoutedComponent } from './component/application/sucursal/routed/admin/sucursal-edit-admin-routed/sucursal-edit-admin-routed.component';
import { CocheBacButtonUnroutedComponent } from './component/application/coche/unrouted/admin/coche-bacButton-unrouted/coche-bacButton-unrouted.component';
import { CocheDetailAdminUnroutedComponent } from './component/application/coche/unrouted/admin/coche-detail-admin-unrouted/coche-detail-admin-unrouted.component';
import { CochePlistAdminRoutedComponent } from './component/application/coche/routed/admin/coche-plist-admin-routed/coche-plist-admin-routed.component';
import { CocheEditAdminRoutedComponent } from './component/application/coche/routed/admin/coche-edit-admin-routed/coche-edit-admin-routed.component';
import { CocheNewAdminRoutedComponent } from './component/application/coche/routed/admin/coche-new-admin-routed/coche-new-admin-routed.component';
import { CocheRemoveAdminRoutedComponent } from './component/application/coche/routed/admin/coche-remove-admin-routed/coche-remove-admin-routed.component';
import { CocheViewAdminRoutedComponent } from './component/application/coche/routed/admin/coche-view-admin-routed/coche-view-admin-routed.component';
import { UsuarioFinderAdminUnroutedComponent } from './component/application/usuario/unrouted/usuario-finder-admin-unrouted/usuario-finder-admin-unrouted.component';
import { CompraBacButtonAdminUnroutedComponent } from './component/application/compra/unrouted/compra-bacButton-admin-unrouted/compra-bacButton-admin-unrouted.component';
import { CompraDetailAdminUnroutedComponent } from './component/application/compra/unrouted/compra-detail-admin-unrouted/compra-detail-admin-unrouted.component';
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/compra-plist-admin-routed/compra-plist-admin-routed.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/compra-view-admin-routed/compra-view-admin-routed.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/compra-remove-admin-routed/compra-remove-admin-routed.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/compra-new-admin-routed/compra-new-admin-routed.component';
import { CocheFinderAdminUnroutedComponent } from './component/application/coche/unrouted/admin/coche-finder-admin-unrouted/coche-finder-admin-unrouted.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/compra-edit-admin-routed/compra-edit-admin-routed.component';
import { TasacionBackButtonUnroutedComponent } from './component/application/tasacion/unrouted/admin/tasacion-backButton-unrouted/tasacion-backButton-unrouted.component';
import { TasacionDetailAdminUnroutedComponent } from './component/application/tasacion/unrouted/admin/tasacion-detail-admin-unrouted/tasacion-detail-admin-unrouted.component';
import { TasacionPlistAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-plist-admin-routed/tasacion-plist-admin-routed.component';
import { TasacionViewAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-view-admin-routed/tasacion-view-admin-routed.component';
import { TasacionRemoveAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-remove-admin-routed/tasacion-remove-admin-routed.component';
import { TasacionNewAdminRoutedComponent } from './component/application/tasacion/routed/admin/tasacion-new-admin-routed/tasacion-new-admin-routed.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { AuthInterceptor } from './component/interceptor/auth.interceptor';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsuarioPlistAdminRouterComponent,
    UsuarioFinderAdminUnroutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioBackButtonUnroutedComponent,
    UsuarioEditAdminRoutedComponent,
    SucursalPlistAdminRoutedComponent,
    SucursalFinderAdminUnroutedComponent,
    SucursalDetailAdminUnroutedComponent,
    SucursalViewAdminRoutedComponent,
    SucursalBackButtonUnroutedComponent,
    SucursalRemoveAdminRoutedComponent,
    SucursalNewAdminRoutedComponent,
    SucursalEditAdminRoutedComponent,
    CocheBacButtonUnroutedComponent,
    CocheDetailAdminUnroutedComponent,
    CochePlistAdminRoutedComponent,
    CocheEditAdminRoutedComponent,
    CocheNewAdminRoutedComponent,
    CocheRemoveAdminRoutedComponent,
    CocheViewAdminRoutedComponent,
    CocheFinderAdminUnroutedComponent,
    CompraBacButtonAdminUnroutedComponent,
    CompraDetailAdminUnroutedComponent,
    CompraPlistAdminRoutedComponent,
    CompraViewAdminRoutedComponent,
    CompraRemoveAdminRoutedComponent,
    CompraNewAdminRoutedComponent,
    CompraEditAdminRoutedComponent,
    TasacionBackButtonUnroutedComponent,
    TasacionDetailAdminUnroutedComponent,
    TasacionPlistAdminRoutedComponent,
    TasacionViewAdminRoutedComponent,
    TasacionRemoveAdminRoutedComponent,
    TasacionNewAdminRoutedComponent,
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    TipousuarioFinderAdminUnroutedComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    PaginationService,
    CryptoService,
    DecodeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
