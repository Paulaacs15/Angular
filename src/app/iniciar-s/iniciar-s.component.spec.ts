import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSComponent } from './iniciar-s.component';

describe('IniciarSComponent', () => {
  let component: IniciarSComponent;
  let fixture: ComponentFixture<IniciarSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciarSComponent]
    });
    fixture = TestBed.createComponent(IniciarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
