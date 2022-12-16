import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoodComponent } from './no-food.component';

describe('NoFoodComponent', () => {
  let component: NoFoodComponent;
  let fixture: ComponentFixture<NoFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
