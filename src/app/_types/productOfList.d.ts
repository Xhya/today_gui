interface ProductOfListI {
    id: string;
    name: string;
    product: ProductI;
    listOfProductId: string;
    creatorId: string;
    note: string;

    modificationDate: string;
    creationDate: string;

    quantity: number;
    quantityUnit: string;

    isChecked: boolean;
    checkedById: string;
}