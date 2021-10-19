'use strict'

class MyArray{
    constructor(){
        this.length = 0;
        for (let i = 0; i < arguments.length; i++){
            this.push(arguments[i]);
        }
    }
    push(){
        for(let i = 0; i < arguments.length; i++){
            this[this.length++] = arguments[i];
        }
        return this.length;
    }
    pop(){
        if(this.length===0){
            return;
        }
        const item = this[--this.length];
        delete this[this.length];
        return item;
    }
    forEach(func){
        for(let i=0; i<this.length; i++){
            func(this[i]);
        }
    }
    some(func){
        for(let i=0; i<this.length; i++){
            if(func(this[i])){
                return true;
            }
        }
        return false;
    }
    every(func){
        for(let i=0; i<this.length; i++){
            if(func(this[i])===false){
                return false;
            }
        }
        return true;
    }
    filter(func){
        const result = new MyArray();
        for (let i=0; i<this.length; i++) {
            if(func(this[i])){
                result.push(this[i]);  
            }
        }
        return result;
    }
    concat(MyArrayInstance){
        const newMyArray = new MyArray();
        for(let i = 0; i < this.length; i++){
            newMyArray.push(MyArrayInstance[i]);
        }
        return newMyArray;
    }
    flat(depth=1){
        // let result = new MyArray();
        // for(let i = 0; i < this.length; i++){
        //     const isArray = MyArray.isMyArray(this[i]);
        //     if(isArray && depth){
        //         const subResult = this[i].flat(depth-1);
        //         result.concat(subResult);
        //     }else if(this[i]!==undefined){
        //         result.push(this[i]);
        //     }
        // }
        this.forEach((item)=>{
            if(MyArray.isMyArray(item) && depth){ 
                result = result.concat(item.flat(depth-1))
        }else if(item!==undefined){
            result.push(item);
        }
    });
    return result;
}
    static isMyArray(obj){
        return obj instanceof MyArray;
    }    
}

