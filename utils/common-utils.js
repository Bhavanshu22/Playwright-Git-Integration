import CryptoJS from "crypto-js";
import { error } from "node:console";

export default class CommonUtils{
    constructor()
    {
        // this.secretKey = process.env.SECRETE_KEY ?process.env.SECRETE_KEY:""

        if(process.env.SECRET_KEY){
            this.secretkey = process.env.SECRET_KEY
        }else{
            throw new error("Please provide secret key while starting execution")
        }
        // systems
    }

    encryptData(data){
        const encryptedData = CryptoJS.AES.encrypt(data, this.secretkey).toString()
        console.log(encryptedData)
        return encryptedData
    }

    decryptData(endata){
        const decreptedData = CryptoJS.AES.decrypt(endata, this.secretkey).toString(CryptoJS.enc.Utf8)
        return decreptedData
    }
}