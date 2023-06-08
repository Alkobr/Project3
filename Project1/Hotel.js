
//=============Hotel==================

 class Hotel{
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
    }
    printListBookedRooms() {
      for (let i = 0; i < this.rooms.length; i++) {
        const room = this.rooms[i];
        if (room.isBooked()) {
        room.
        } else {
          console.log(`Room ${room.roomNumber} is not booked`);
        }
      }
    }
      addRoom(numberOfRoom, numberOfFloor, price) {
        const room = new Room(numberOfRoom, numberOfFloor, price);
        this.rooms.push(room);
      }
}
const h1=new Hotel("Alkader",10,1,20);
const room1 = new Room(101, 1, 100);
room1.isBooked(true);
const room2 = new SleepingRoom(102, 1, 120, 2);
h1.addRoom(room1); // logs "Room 101 has been added to the hotel."
h1.addRoom(room2); // logs "Room 102 has been added to the hotel."
h1.addRoom(new Room(201, 2, 150)); // logs "Sorry, Room 201 is not on a valid floor."
h1.addRoom(new SleepingRoom(202, 3, 200, 4)); 
//hotel1.printAdvertisemen();

h1.printListBookedRooms();