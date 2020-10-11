import { UserI } from './user';

interface ListOfProductI {
    id: string;
    name: string;
    products: ProductOfListI[];
    owner: UserI;
    note: string;
    creationDate: string;
    modificationDate: string;
}