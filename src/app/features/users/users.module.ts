import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users/users.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [UsersComponent],
  providers: [
    UsersService
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
