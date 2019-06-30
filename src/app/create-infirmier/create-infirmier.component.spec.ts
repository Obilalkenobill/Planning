import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfirmierComponent } from './create-infirmier.component';

describe('CreateInfirmierComponent', () => {
  let component: CreateInfirmierComponent;
  let fixture: ComponentFixture<CreateInfirmierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInfirmierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
