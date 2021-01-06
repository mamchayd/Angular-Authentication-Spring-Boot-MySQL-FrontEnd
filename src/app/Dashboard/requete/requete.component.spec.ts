import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteComponent } from './requete.component';

describe('RequeteComponent', () => {
  let component: RequeteComponent;
  let fixture: ComponentFixture<RequeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
