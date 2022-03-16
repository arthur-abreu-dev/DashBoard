import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroPrincipalComponent } from './quadro-principal.component';

describe('QuadroPrincipalComponent', () => {
  let component: QuadroPrincipalComponent;
  let fixture: ComponentFixture<QuadroPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
