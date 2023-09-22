export class GMensaje{
	public _id?: string
	public remite: string
	public mail: string
	public asunto: string
	public text: string
	
	constructor(remite: string, mail: string, asunto: string, text: string){
        this.remite = remite;
        this.mail = mail;
        this.asunto = asunto;
        this.text = text;
    }
}