import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByPrefixComponent } from './find-by-prefix.component';

describe('FindByPrefixComponent', () => {
  let component: FindByPrefixComponent;
  let fixture: ComponentFixture<FindByPrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByPrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
