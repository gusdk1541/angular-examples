import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent }   from './group-list.component';
import { GuardMonitorService }  from '../core/guard-monitor.service';
import { GroupListGuard } from './group-list.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full',
        canActivate: [GuardMonitorService],
        canActivateChild: [GuardMonitorService],
        canDeactivate: [GuardMonitorService],
        canLoad: [GuardMonitorService]
    },
    {
        path: ':group',
        component: GroupListComponent,
        loadChildren: 'src-multipleroutes1/app/group-detail/group-detail.module#GroupDetailModule',
        canActivate: [GuardMonitorService],
        canActivateChild: [GuardMonitorService, GroupListGuard],
        canDeactivate: [GuardMonitorService],
        canLoad: [GuardMonitorService]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GroupListGuard]
})
export class GroupsRoutingModule { }
