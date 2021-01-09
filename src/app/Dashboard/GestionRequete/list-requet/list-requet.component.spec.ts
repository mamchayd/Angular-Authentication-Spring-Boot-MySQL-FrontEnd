import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequetComponent } from './list-requet.component';

describe('ListRequetComponent', () => {
  let component: ListRequetComponent;
  let fixture: ComponentFixture<ListRequetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
