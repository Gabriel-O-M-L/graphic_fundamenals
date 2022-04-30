class Vector{
    constructor(x,y,z) {
        this.vertex=[x,y,z]
    }

    get x (){
       return this.vertex[0]
    }
    get y (){
        return this.vertex[1]
    }
    get z (){
        return this.vertex[2]
    }

    set x (data){
        this.vertex[0] = data
    }
    set y (data){
        this.vertex[1] = data
    }
    set z (data){
        this.vertex[2] = data
    }
}


