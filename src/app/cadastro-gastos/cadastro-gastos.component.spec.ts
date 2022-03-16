import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGastosComponent } from './cadastro-gastos.component';

describe('CadastroGastosComponent', () => {
  let component: CadastroGastosComponent;
  let fixture: ComponentFixture<CadastroGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
