import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrayComponent } from './stray.component';

describe('StrayComponent', () => {
  let component: StrayComponent;
  let fixture: ComponentFixture<StrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
