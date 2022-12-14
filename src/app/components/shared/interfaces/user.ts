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
    nameAuthor: string | null;
    _id:string;
    comment:string;
    _ownerId: string;
    _tripId:string;
}
