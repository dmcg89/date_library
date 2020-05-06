// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class D {
	constructor(...args) {
    this._date = new Date(...args)
  }

  // GETTERS
  get year() {
    return this._date.getFullYear()
  }
  get monthIndex() {
    return this._date.getMonth()
  }
  get date() {
    return this._date.getDate()
  }
  get hours() {
    return this._date.getHours()
  }
  get mins() {
    return this._date.getMinutes()
  }
  get secs() {
    return this._date.getSeconds()
  }
  get shortYear(){
    return this.year%100
  }
  get month() {
    return months[this.monthIndex]
  }

  // Methods
  format(input = null) {
    switch (true) {
      case (input === null):
        return `${this.year}` + " " + `${months[this.month]}` + " " + `${this.date}`
      case ((input.charAt(0) === "Y") && (input.charAt(2) === "M") && (input.charAt(4) === "D" &&
        (input.charAt(6) === "H") && (input.charAt(8) === "I") && (input.charAt(10) === "S"))):
        return `${this.year}` + "-" + `${months[this.month]}` + "-" + `${this.date}` + " " +
        `${this.hours}` + ":" + `${this.mins}` + ":" + `${this.secs}`
      case ((input.charAt(0) === "Y") && (input.charAt(2) === "M") && (input.charAt(4) === "D")):
        return `${this.year}` + "/" + `${months[this.month]}` + "/" + `${this.date}`
      case ((input.charAt(0) === "y") && (input.charAt(2) === "m") && (input.charAt(4) === "d")):
        return `${this.year}` + "/" + `${months[this.month].substring(0, 2)}` + "/" + `${parseInt(this.date, 10)}`
      case ((input.charAt(0) === "H") && (input.charAt(2) === "I") && (input.charAt(4) === "S")):
        return `${this.hours}` + ":" + `${this.mins}` + ":" + `${this.secs}`
      case ((input.charAt(0) === "h") && (input.charAt(2) === "i") && (input.charAt(4) === "s")):
        return `${parseInt(this.hours, 10)}` + ":" + `${parseInt(this.mins, 10)}` + ":" + `${parseInt(this.secs, 10)}`
    }
  }
}


// const d = new D('9/26/1965') // Create a date from a string
const e = new D(1970, 1, 1, 0, 0, 0)

// Gets the current date with no params
const d = new D() 
console.log(d.year)  // 2019 fullYear
console.log(d.month) // July 6
console.log(d.date)   // 27
console.log(d.hours) // 18
console.log(d.mins)  // 6
console.log(d.secs)  // 5
console.log(d.format())
console.log(d.format('h:i:s'))
console.log(d.format('Y-M-D H:I:S'))