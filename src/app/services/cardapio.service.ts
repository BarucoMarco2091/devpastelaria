import { Injectable } from '@angular/core';

interface Pastel {
    name: string;
    description: string;
    price: number;
    image: string;
}

@Injectable({
    providedIn: 'root'
})
export class CardapioService {
    private _menuItems: Pastel[] = [
        { name: 'Pastel de Bacalhau', description: 'Bacalhau refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 50.00, image: '/pastelbacalhau.webp' },
        { name: 'Pastel de Camarão', description: 'Camarões frescos refogados no alho, limão e pimenta dedo-de-moça, com catupiry. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 40.00, image: '/pastelcamarao.webp' },
        { name: 'Pastel de Carne', description: 'Patinho moído refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 30.00, image: '/pastelcarne.webp' },
        { name: 'Pastel de Frango', description: 'Peito de frango desfiado refogado no alho, cebola e pimenta dedo-de-moça, com catupiry. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 25.00, image: '/pastelfrango.webp' },
        { name: 'Pastel de Palmito', description: 'Palmito refogado no alho, cebola e pimenta dedo-de-moça. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 25.00, image: '/pastelpalmito.webp' },
        { name: 'Pastel de Queijo', description: 'Queijo mussarela. Massa artesanal, fina e crocante, dourada no ponto perfeito.', price: 20.00, image: '/pastelqueijo.webp' },
    ];

    get menuItems(): Pastel[] {
        return this._menuItems;
    }

    adicionarPastel(pastel: Pastel) {
        this._menuItems.push(pastel);
        this.salvarNoLocalStorage();
    }

    removerPastel(index: number) {
        this._menuItems.splice(index, 1);
        this.salvarNoLocalStorage();
    }

    private salvarNoLocalStorage() {
        localStorage.setItem('cardapio', JSON.stringify(this._menuItems));
    }

    constructor() {
        const salvos = localStorage.getItem('cardapio');
        if (salvos) {
            this._menuItems = JSON.parse(salvos);
        }
    }
}