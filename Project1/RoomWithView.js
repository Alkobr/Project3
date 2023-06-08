class RoomWithView extends Room{
    view;
    numberOfBeds;
    constructor(view,numberOfBeds,floorNum,roomNum,price){
        super(floorNum,roomNum,price);
        this.numberOfBeds=numberOfBeds;
        this.view=view;
    }
}
export default { RoomWithView };