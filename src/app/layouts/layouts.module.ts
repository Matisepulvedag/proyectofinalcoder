import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { PagesModule } from "../pages/pages.module";
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';



@NgModule({
    declarations: [
        DashboardLayoutComponent,
        CleanLayoutComponent
    ],
    exports: [
        DashboardLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        PagesModule,

    ]
})
export class LayoutsModule { }
