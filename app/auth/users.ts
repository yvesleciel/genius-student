export class Users{
   
    constructor(public nom: string, public prenom:string, public email: string, public classe: string, public ville: string, public etalissement: string , public categorie : string){

    }
    get fullclasse():string {
        return this.classe;
    }
}