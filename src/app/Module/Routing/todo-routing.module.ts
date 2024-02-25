import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './routes';
import { AuthGuard } from 'src/app/gaurds/auth.guard';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class todoRoutingModule { }
