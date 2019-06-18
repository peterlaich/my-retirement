import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// functional modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

// components
import { PageheaderComponent } from './pageheader/pageheader.component'; // header component
import { PagemainComponent } from './pagemain/pagemain.component'; // main page area component
import { PagepanelComponent } from './pagepanel/pagepanel.component'; // data panel component
import { DatactrlComponent, EditEntryDialog } from './datactrl/datactrl.component'; // each of the data control and the dialog component

@NgModule({
  declarations: [
    AppComponent,
    PageheaderComponent,
    PagemainComponent,
    PagepanelComponent,
    DatactrlComponent,
    EditEntryDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  entryComponents: [
    EditEntryDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
