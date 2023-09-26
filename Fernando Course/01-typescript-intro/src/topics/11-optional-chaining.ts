
export interface Passanger {
    name: string;
    children?: string[];
}

const passenger1: Passanger = {
    name: 'German'
}

const passenger2: Passanger = {
    name: 'Sindy',
    children: ["Oliver", "Emma"]
}

const returnPrintChildren = (passenger : Passanger): number =>  {
    
    if( !passenger.children ) {
        console.log(passenger.name, 0);
        return 0;
    }

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnPrintChildren(passenger1);
returnPrintChildren(passenger2);