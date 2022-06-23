import { Category } from "./category";
import { Thoroughbred } from "./thoroughbred";
import { UserSystem } from "./user-system";
import {Material} from './material';

export class Product {
    id?:number;
    productName?: string;
    introduce?: string;
    description?: string;
    priceImport?: number;
    priceSell?: number;
    quantityImport?: number;
    quantitySell?: number;
    inventory?: number;
    sale?: number;
    image?: string;
    thoroughbred?: Thoroughbred;
    category?: Category;
    material?: Material;
    lastUpdate?: string;
    userSystem?: UserSystem;
    pin?: number;
    byTime?: string;
}
