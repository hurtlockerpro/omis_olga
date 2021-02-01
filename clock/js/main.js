
let myArray = ["audi", 10, true]; // array

let myObject = {
    key:"value",
    key1:10,
    key2:true,
    key4:{
        key11:"valu11",
        key12:10,
        key13:true
    },
    key5:myArray,
    key6:[
        {
            key21:"value21",
            key22: 210,
            key23:false
        },{
            key31:"value21",
            key32: 210,
            key33:false 
        }
    ]
}; // object

let news = {
    title:"news 1",
    description:"description 1"
}
console.log("news (1): ", news.title)

let entries = Object.entries(myObject)
let values =  Object.values(myObject)
let keys = Object.keys(myObject)

console.log("entries: ", entries, ", keys: ", 
keys, ", values: ", values)

console.log("value (1): ", myObject.key)
console.log("value (2): ", myObject.key4.key11)
console.log("value (3): ", myObject.key5[0])
console.log("value (4): ", myObject.key6[0].key21)

for (let index = 0; index < entries.length; index++) {
    //const element = array[index];
    console.log("key = ", entries[index][0],  ", value = ", entries[index][1])
    if (typeof entries[index][1] == "object")
    {
        let level2Object = Object.entries(entries[index][1])
        level2Object.forEach((element, key) => {
            console.log(" (2 level) key = ", element[0],  ", value = ", element[1])
        });
    }
}




class Clock{

    #clock;
    
    #hourArm;
    #minuteArm;
    secondArm;

    constructor(clockDivName){

        this.#clock = document.querySelector('.' + clockDivName)

        this.#hourArm = this.#clock.querySelector('.hourArm')
        this.#minuteArm = this.#clock.querySelector('.minuteArm')
        this.secondArm = this.#clock.querySelector('.secondArm')

        //this.startClock()
    }

    startClock(){
        let dateTime = new Date()

        let h = dateTime.getHours()
        let m = dateTime.getMinutes()
        let s = dateTime.getSeconds()

        let sec2Degrees = this.transformSecondsToDegrees(s)
        let min2Degrees = this.transformMinutesToDegrees(m, sec2Degrees)
        let hour2Degrees = this.transformHoursToDegrees(h, min2Degrees)

        this.secondArm.style.transform = 'rotateZ(' + sec2Degrees + 'deg)'
        this.#minuteArm.style.transform = 'rotateZ(' + min2Degrees + 'deg)'
        this.#hourArm.style.transform = 'rotateZ(' + hour2Degrees + 'deg)'

        //console.log("h:m:s ", h + ":" + m + ":" + s )
    }

    transformHoursToDegrees(hours, minutes)
    {
        return hours * 360 / 12 + minutes / 12
    }

    transformMinutesToDegrees(minutes, seconds)
    {
        return minutes * 360 / 60 + seconds / 60
    }

    transformSecondsToDegrees(seconds)
    {
        return seconds * 360 / 60
    }
}

let clock = new Clock('clock') 

setInterval(function(){
    clock.startClock()
}, 1000)

console.log(clock)