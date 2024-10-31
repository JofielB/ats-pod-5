import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCardComponentComponent } from './form-edit-card-component.component';

describe('FormEditCardComponentComponent', () => {
  let component: FormEditCardComponentComponent;
  let fixture: ComponentFixture<FormEditCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
