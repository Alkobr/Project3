const { Room } = require('./Room.js');
 class SleepingRoom extends Room{
    personCapacity;
    room;
    constructor(floorNum,roomNum,price,personCapacity){
        super(floorNum,roomNum,price);
this.personCapacity=personCapacity;
        
    }
}
module.exports = { SleepingRoom };