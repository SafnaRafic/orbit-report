export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    satellite: object = [];

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    
    }
    shouldShowWarning(type:string): boolean{
        if(type.toLowerCase()=== "space debris"){            
            return true;
        }   
        else
            return false;
    }
}
