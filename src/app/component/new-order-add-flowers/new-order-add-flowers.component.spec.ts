import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderAddFlowersComponent } from './new-order-add-flowers.component';

describe('NewOrderAddFlowersComponent', () => {
  let component: NewOrderAddFlowersComponent;
  let fixture: ComponentFixture<NewOrderAddFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderAddFlowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderAddFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
