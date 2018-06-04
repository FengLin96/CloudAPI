import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByIdComponent } from './find-by-id.component';

describe('FindByIdComponent', () => {
  let component: FindByIdComponent;
  let fixture: ComponentFixture<FindByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
