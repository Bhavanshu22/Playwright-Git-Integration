# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.js >> global set up for auto login
- Location: tests\global.setup.js:6:5

# Error details

```
TypeError: _nodeConsole.error is not a constructor
```

# Test source

```ts
  1  | import CryptoJS from "crypto-js";
  2  | import { error } from "node:console";
  3  | 
  4  | export default class CommonUtils{
  5  |     constructor()
  6  |     {
  7  |         // this.secretKey = process.env.SECRETE_KEY ?process.env.SECRETE_KEY:""
  8  | 
  9  |         if(process.env.SECRET_KEY){
  10 |             this.secretkey = process.env.SECRET_KEY
  11 |         }else{
> 12 |             throw new error("Please provide secret key while starting execution")
     |                   ^ TypeError: _nodeConsole.error is not a constructor
  13 |         }
  14 |         // systems
  15 |     }
  16 | 
  17 |     encryptData(data){
  18 |         const encryptedData = CryptoJS.AES.encrypt(data, this.secretkey).toString()
  19 |         console.log(encryptedData)
  20 |         return encryptedData
  21 |     }
  22 | 
  23 |     decryptData(endata){
  24 |         const decreptedData = CryptoJS.AES.decrypt(endata, this.secretkey).toString(CryptoJS.enc.Utf8)
  25 |         return decreptedData
  26 |     }
  27 | }
```