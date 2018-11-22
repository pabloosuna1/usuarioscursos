import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirCursoUsuarioComponent } from './anadir-curso-usuario.component';

describe('AnadirCursoUsuarioComponent', () => {
  let component: AnadirCursoUsuarioComponent;
  let fixture: ComponentFixture<AnadirCursoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirCursoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirCursoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
