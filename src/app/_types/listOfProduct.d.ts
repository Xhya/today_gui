import { UserI } from './user';

interface ListOfProductI {
    id: string;
    name: string;
    products: any[]; // TODO: change
    owner: UserI;
    note: string;
    creationDate: string;
    modificationDate: string;
}