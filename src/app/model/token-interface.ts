export interface IToken {
    jti: string;
    iss: string;
    iat: number;
    exp: number;
    name: string;
    usertype: string;
    id_user: string;
}