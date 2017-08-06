import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TodoDoneDirective } from './todo-done.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodoDoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
