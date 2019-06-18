import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepanelComponent } from './pagepanel.component';

describe('PagepanelComponent', () => {
  let component: PagepanelComponent;
  let fixture: ComponentFixture<PagepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
