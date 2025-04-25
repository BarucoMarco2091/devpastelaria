import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CardapioItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  menuItems = [
    { name: 'Pastel de Bacalhau', description: 'Bacalhau refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 50.00, image: '/pastelbacalhau.webp' },
    { name: 'Pastel de Camarão', description: 'Camarões frescos refogados no alho, limão e pimenta dedo-de-moça, com catupiry. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 40.00, image: '/pastelcamarao.webp'},
    { name: 'Pastel de Carne', description: 'Patinho moído refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 30.00, image: '/pastelcarne.webp'},
    { name: 'Pastel de Frango', description: 'Peito de frango desfiado refogado no alho, cebola e pimenta dedo-de-moça, com catupiry. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 25.00, image: '/pastelfrango.webp'},
    { name: 'Pastel de Palmito', description: 'Palmito refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 25.00, image: '/pastelpalmito.webp'},
    { name: 'Pastel de Queijo', description: 'Queijo mussarela. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 20.00, image: '/pastelqueijo.webp'},
  ];

  cart: CardapioItem[] = [];
  isModalOpen = false;
  address = '';
  showAddressWarning = false;

  get total(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addToCart(name: string, price: number) {
    const existingItem = this.cart.find(item => item.name === name);
    if(existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({name, price, quantity: 1 });
    }
  }

  removeItemCart(name: string) {
    const index = this.cart.findIndex(item => item.name === name);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  checkout() {
    if (this.cart.length === 0) return;

    if (!this.address.trim()) {
      this.showAddressWarning = true;
      return;
    }

    const cartItems = this.cart.map(item => `${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price}`).join(' | ');
    const phone = '5511996221043';
    const message = encodeURIComponent(cartItems + ` Endereço: ${this.address}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    this.cart = [];
    this.address = '';
    this.showAddressWarning = false;
  }
}
