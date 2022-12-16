import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWikiComponent } from './display-wiki.component';

describe('DisplayWikiComponent', () => {
  let component: DisplayWikiComponent;
  let fixture: ComponentFixture<DisplayWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWikiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
