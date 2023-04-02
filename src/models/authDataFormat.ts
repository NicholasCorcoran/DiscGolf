export class AuthDataFormat{
    accessToken: string;
    displayName: string | null;
    email: string;
    uid: string;

    constructor(authToken: string, displayName: string|null, userEmail: string, uid: string){
        this.accessToken = authToken;
        this.displayName = displayName;
        this.email = userEmail;
        this.uid = uid
    }
}