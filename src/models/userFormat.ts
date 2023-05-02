export class UserFormatType {
  email: string;
  password: string;
  repassword: string;
  dName: string;
  fName: string;
  lName: string;

  // constructor(userEmail: string, formHtmlName: string, formInputLabel: string){
  //     this.email= userEmail;
  //     this.htmlName = formHtmlName;
  //     this.label = formInputLabel;
  //     this.id = new Date().toISOString();
  // }

  constructor(
    userEmail: string,
    userPassword: string,
    userRepassword: string,
    displayName: string,
    userFName: string,
    userLName: string
  ) {
    this.email = userEmail;
    this.password = userPassword;
    this.repassword = userRepassword;
    this.dName = displayName;
    this.fName = userFName;
    this.lName = userLName;
  }
}
