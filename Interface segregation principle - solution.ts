interface AreaInterface {
    calculateArea();
}

interface VolumeInterface {
    calculateVolume();
}

class Square implements AreaInterface {
    calculateArea(){
        // some logic
    }
}

class Cylinder implements AreaInterface, VolumeInterface {
    calculateArea(){
        // some logic
    }
    calculateVolume(){
        // some logic
    }    
}

