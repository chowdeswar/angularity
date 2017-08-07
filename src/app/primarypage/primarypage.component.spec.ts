import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarypageComponent } from './primarypage.component';

describe('PrimarypageComponent', () => {
  let component: PrimarypageComponent;
  let fixture: ComponentFixture<PrimarypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
