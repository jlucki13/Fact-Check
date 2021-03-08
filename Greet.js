export default function Greet(name) {
    if (name === null) {
        return 'Hello there!';
    }
    if (name === name.toUpperCase) {
        return 'HELLO ' + name + "!";
    }
    if (name === typeof []){
        if (name.length > 1) {
            let greetAll = '';
            name.forEach((ele) => {
                greetAll += ', ' + ele;
            })
            return "Hello, " + greetAll;
        } 
        }
    else {
        return 'Hello ' + name;
    }
    
}