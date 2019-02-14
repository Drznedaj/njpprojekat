import { Slika } from "./slika";

export class User {
    username: string;
    password: string;
    email: string;
    aktiviran: boolean;
    kojePrati: User[];
    kojiGaPrate: User[];
    slikeKorisnika: Slika[];
    profilna: Slika;
}
