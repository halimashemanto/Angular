import { Usermodel } from "./userModel.model";

export interface AuthResponse {
    token:string;
    user:Usermodel;

}