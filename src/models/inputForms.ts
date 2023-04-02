

export class InputFormType {
    id: string;
    inputType: string;
    htmlName: string;
    label: string;
  

    constructor(formInputType: string, formHtmlName: string, formInputLabel: string){
        this.inputType = formInputType;
        this.htmlName = formHtmlName;
        this.label = formInputLabel;
        this.id = new Date().toISOString();
    }
}