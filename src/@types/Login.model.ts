export enum ELogin {
    UserName = 'username',
    Password = 'password',
}

export interface ILogin {
    [ELogin.UserName]: string;
    [ELogin.Password]: string;
}