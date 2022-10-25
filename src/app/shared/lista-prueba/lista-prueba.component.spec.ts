import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPruebaComponent } from './lista-prueba.component';

describe('ListaPruebaComponent', () => {
  let component: ListaPruebaComponent;
  let fixture: ComponentFixture<ListaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
