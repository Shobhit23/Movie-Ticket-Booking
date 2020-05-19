import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTheaterComponent } from './selected-theater.component';

describe('SelectedTheaterComponent', () => {
  let component: SelectedTheaterComponent;
  let fixture: ComponentFixture<SelectedTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
