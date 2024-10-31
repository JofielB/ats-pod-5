import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCardComponent } from './form-new-card.component';

describe('FormNewCardComponent', () => {
  let component: FormNewCardComponent;
  let fixture: ComponentFixture<FormNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
