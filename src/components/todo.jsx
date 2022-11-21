import { v4 as uuidv4 } from 'uuid';

export default class ToDo{
    constructor(txt){
        this.id = uuidv4();
        this.text = txt;
        this.complete = false;
    }
}