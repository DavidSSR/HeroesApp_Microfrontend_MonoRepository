import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [Error404PageComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [Error404PageComponent],
})
export class SharedModule {}
