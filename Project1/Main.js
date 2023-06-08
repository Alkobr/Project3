const { Hotel } = require('./Hotel.js');
const { Room } = require('./Room.js');
const {SleepingRoom} = require('./SleepingRoom.js');
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


