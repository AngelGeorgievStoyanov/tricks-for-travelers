export interface IUser {
    email: string;
    _id: string;
    __v: string;
    accessToken: string;
}


export interface ITrip {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    transport: string;
    price: string
    countPeoples: string,
    typeOfPeople: string,
    destination: string,
    coments: string[],
    likes: string[],
    _ownerId: string
}


export interface IComment{
    _id:string;
    description:string;
    _ownerId: string;
    _tripId:string;
}
