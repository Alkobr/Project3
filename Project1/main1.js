// Room.js
class Room {
    #isBooked;
    constructor(roomNumber,floorNum, price) {
      this.roomNumber = roomNumber;
      this.floorNum = floorNum;
      this.price = price;
      this.#isBooked = false;
    }
  
    getisBook() {
      return this.#isBooked ;
    }
  
    setisBook(book) {
      return this.#isBooked= book;
    }
  
    printRoom(){
        console.log("The floor Number is "+this.floorNum)
        console.log("the Room number is "+this.roomNumber);
        console.log("the price is "+this.price);
        console.log("is Booked? "+this.#isBooked);
        console.log("======================");
    };
  }
  // sleepingRoom.js
  class SleepingRoom extends Room{
    personCapacity;
    room;
    constructor(floorNum,roomNum,price,personCapacity){
        super(floorNum,roomNum,price);
      this.personCapacity=personCapacity;
        
    }
    printRoom(){
      console.log("The floor Number is "+this.floorNum)
      console.log("the Room number is "+this.roomNumber);
      console.log("the price is "+this.price);
      console.log("is Booked? "+this.getisBook());
      console.log("The Person Capacity is "+this.personCapacity);
      console.log("The Number ofBeds is "+this.numberOfBeds);
      console.log("======================");
  };
}

//RoomWithView.js
class RoomWithView extends Room{
  view;
  numberOfBeds;
  constructor(view,numberOfBeds,floorNum,roomNum,price){
      super(floorNum,roomNum,price);
      this.numberOfBeds=numberOfBeds;
      this.view=view;
  }
  printRoom(){
    console.log("The floor Number is "+this.floorNum)
    console.log("the Room number is "+this.roomNumber);
    console.log("the price is "+this.price);
    console.log("is Booked? "+this.getisBook());
    console.log("The View is "+this.view);
    console.log("The Number ofBeds is "+this.numberOfBeds);
    console.log("======================");
};
}
  
  // Hotel.js
  class Hotel {
    #minFloor;
    #maxFloor;
   constructor(address,numberOfRooms,minFloor,maxFloor){
       this.address=address;
       this.numberOfRooms=numberOfRooms;
       this.#maxFloor=maxFloor;
       this.#minFloor=minFloor;
       this.rooms=[];
   }
   printAdvertisemen(){
    console.log("The Address is "+this.address);
    console.log("the number Of Rooms is "+this.numberOfRooms)
    console.log("min Floor is "+this.#minFloor)
    console.log("max Floor is "+this.#maxFloor);
    this.rooms.forEach(room => {
        room.printRoom();
      });
    }
    addRoom(room) {
      this.rooms.push(room);
    }
  
  
    printBookedRooms() {
      this.rooms.forEach(room => {
        if (room.getisBook()) {
          room.printRoom();
        }
      });
    }
  }
  
  // Example usage
  const h1=new Hotel("Alkader",10,1,20);
  const room2 = new Room(102, 1, 150);
  const room3 = new Room(103, 3, 300);
  const room4=new SleepingRoom(2,105,300,5);
  h1.addRoom(room2);
  h1.addRoom(room3);
  h1.addRoom(room4);
  room3.setisBook(true);
  room4.setisBook(true);
  console.log("========= These Room are Booked");
  h1.printBookedRooms();
  console.log("========= All Infromation");
  h1.printAdvertisemen();
  