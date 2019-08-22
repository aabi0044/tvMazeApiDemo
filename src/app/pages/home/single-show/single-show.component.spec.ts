import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowComponent } from './single-show.component';

describe('SingleShowComponent', () => {
  let component: SingleShowComponent;
  let fixture: ComponentFixture<SingleShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
