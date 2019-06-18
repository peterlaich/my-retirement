import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatactrlComponent } from './datactrl.component';

describe('DatactrlComponent', () => {
  let component: DatactrlComponent;
  let fixture: ComponentFixture<DatactrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatactrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatactrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
