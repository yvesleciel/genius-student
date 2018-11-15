import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapmatComponent } from './chapmat.component';

describe('ChapmatComponent', () => {
  let component: ChapmatComponent;
  let fixture: ComponentFixture<ChapmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
