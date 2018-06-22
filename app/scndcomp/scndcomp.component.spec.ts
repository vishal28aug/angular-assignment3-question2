import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScndcompComponent } from './scndcomp.component';

describe('ScndcompComponent', () => {
  let component: ScndcompComponent;
  let fixture: ComponentFixture<ScndcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScndcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScndcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
