import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmodelComponent } from './sendmodel.component';

describe('SendmodelComponent', () => {
  let component: SendmodelComponent;
  let fixture: ComponentFixture<SendmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
