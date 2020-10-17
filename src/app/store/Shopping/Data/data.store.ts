import { Injectable } from '@angular/core';
import { ListOfProductI } from 'src/app/_types/listOfProduct';
import { Store } from '../../store';

const initialState = {
    listOfListOfProduct: [],
    currentListOfProduct: null
};

interface InitialStateI {
    listOfListOfProduct?: ListOfProductI[];
    currentListOfProduct?: ListOfProductI;
};

@Injectable({
    providedIn: 'root',
})
export default class ShoppingDataStore extends Store<InitialStateI> {
    
    constructor() { 
        super(initialState)
    }

    public setListOfProduct(nextState: { listOfListOfProduct: ListOfProductI[] }): void {
        const currentState = this.getState();

        this.setState({
            listOfListOfProduct: nextState.listOfListOfProduct,
            currentListOfProduct: currentState.currentListOfProduct
        });
    }

    public addListOfProduct(nextState: { listOfProduct: ListOfProductI }): void {
        const currentState = this.getState();

        this.setState({
            listOfListOfProduct: [ ...currentState.listOfListOfProduct, nextState.listOfProduct ] ,
            currentListOfProduct: currentState.currentListOfProduct
        });
    }

    public setCurrentListOfProduct(nextState: { currentListOfProduct: ListOfProductI }): void {
        const currentState = this.getState();

        console.log('nextState.currentListOfProduct:', nextState.currentListOfProduct);

        this.setState({
            listOfListOfProduct: currentState.listOfListOfProduct,
            currentListOfProduct: nextState.currentListOfProduct
        });
    }

    public setNameOfCurrentListOfProduct(nextState: { name: string }): void {
        const currentState = this.getState();

        if (currentState.currentListOfProduct === null) {
            return;
        }

        this.setState({
            listOfListOfProduct: currentState.listOfListOfProduct,
            currentListOfProduct: Object.assign(currentState.currentListOfProduct, { name: nextState.name })
        });
    }

}
