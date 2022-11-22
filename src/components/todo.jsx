import { v4 as uuidv4 } from 'uuid';

// i wrote this for Day 2 as a todo object

export default class ToDo{
    constructor(txt){
        this.id = uuidv4();
        this.text = txt;
        this.complete = false;
    }
}

// // according to the Doc it should be more like this but that doesent work

//// export default class ToDo{
//  //   constructor(props){
//    //     this.state= {
//     //        id: uuidv4(),
//       //      text: '',
//         //    complete: false
//        // }
        
//     //}
// //}