import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFormComponent } from './control-form.component';

describe('ControlFormComponent', () => {
  let component: ControlFormComponent;
  let fixture: ComponentFixture<ControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
