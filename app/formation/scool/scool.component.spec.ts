import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoolComponent } from './scool.component';

describe('ScoolComponent', () => {
  let component: ScoolComponent;
  let fixture: ComponentFixture<ScoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
