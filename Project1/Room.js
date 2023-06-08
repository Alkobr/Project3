class Room{
#isBooked;
constructor(floorNum,roomNumber,price){
    this.floorNum=floorNum;
    this.roomNumber=roomNumber;
    this.price=price;
    this.#isBooked=false;
}
 isBooked(){
    return this.#isBooked;
}
 isBooked(book){
    return this.#isBooked=book;
}
printRoom(){
    console.log("The floor Number is "+this.floorNum)
    console.log("the Room number is "+this.roomNumber);
    console.log("the price is "+this.price);
    console.log("is Booked? "+this.#isBooked);
};
book(){
    if (this.#isBooked==true){
        return "Is Booked ";
    }else {
        return "Is not Booked"
    }
}


}
module.exports = { Room };