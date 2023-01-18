import { MatSidenavModule } from '@angular/material/sidenav';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    PageWrapperComponent,
    HeaderComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule,
    DashboardRoutingModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
