import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioComponent } from './cardapio.component';

describe('CardapioComponent', () => {
  let component: CardapioComponent;
  let fixture: ComponentFixture<CardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar item ao carrinho', () => {
    component.addToCart('Pastel de Bacalhau', 50.00)
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].name).toBe('Pastel de Bacalhau');
    expect(component.cart[0].quantity).toBe(1);
  });

  it('deve aumentar a quantidade do item existente no carrinho', () => {
    component.addToCart('Pastel de Bacalhau', 50);
    component.addToCart('Pastel de Bacalhau', 50);
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].quantity).toBe(2);
  });

  it('deve remover item do carrinho', () => {
    component.addToCart('Pastel de Bacalhau', 50.00);
    component.removeItemCart('Pastel de Bacalhau');
    expect(component.cart.length).toBe(0);
  });

  it('deve diminuir quantidade do item antes de remover', () => {
    component.addToCart('Pastel de Bacalhau', 50.00);
    component.addToCart('Pastel de Bacalhau', 50.00);
    component.removeItemCart('Pastel de Bacalhau');
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].quantity).toBe(1);
  });

  it('deve calcular o total do carrinho', () => {
    component.addToCart('Pastel de Bacalhau', 50.00);
    component.addToCart('Pastel de Bacalhau', 50.00);
    expect(component.total).toBe(100.00);
  });
});
