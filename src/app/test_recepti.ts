import {Recept} from './recept';
import { PROIZVODI1 } from './test_proizvodi';
import { PROIZVODI2 } from './test_proizvodi';
import { PROIZVODI3 } from './test_proizvodi';

export const RECEPTI: Recept[] = [
    {id: 10, name: 'recept1', opis: 'opisRecepta1', listaProizvoda: PROIZVODI1},
    {id: 11, name: 'recept2', opis: 'opisRecepta2', listaProizvoda: PROIZVODI2},
    {id: 12, name: 'recept3', opis: 'opisRecepta3', listaProizvoda: PROIZVODI3},
    {id: 13, name: 'recept4', opis: 'opisRecepta4', listaProizvoda: PROIZVODI1},
    {id: 14, name: 'recept5', opis: 'opisRecepta5', listaProizvoda: PROIZVODI3},
    {id: 15, name: 'recept6', opis: 'opisRecepta6', listaProizvoda: PROIZVODI1},
    {id: 16, name: 'recept7', opis: 'opisRecepta7', listaProizvoda: PROIZVODI2},
];
