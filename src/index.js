// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class D {
	constructor(...args) {
    this._date = new Date(...args)
    this.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
  get shortMonth() {
    return this.shortMonths[this.monthIndex]
  }
  get longMonth() {
    return this.longMonths[this.monthIndex]
  }

  // Methods\
  format(input = null) {
    if (input === null) {
      return `${this.year}` + " " + `${this.longMonths[this.monthIndex]}` + " " + `${this.date}`
    }
    input = input.replace('Y', `${this.year}`)
    input = input.replace('y', `${this.shortYear}`)

    input = input.replace('M', `${this.longMonth}`)
    input = input.replace('m', `${this.shortMonth}`)

    input = input.replace('D', `${this.date}`)
    input = input.replace('d', `${this.date.toString().trim()}`)

    input = input.replace('H', `${this.hours}`)
    input = input.replace('h', `${this.hours.toString().trim()}`)

    input = input.replace('I', `${this.mins}`)
    input = input.replace('i', `${this.mins.toString().trim()}`)

    input = input.replace('S', `${this.secs}`)
    input = input.replace('s', `${this.secs.toString().trim()}`)
    return input
  }
}


// const d = new D('9/26/1965') // Create a date from a string
const e = new D(1970, 1, 1, 0, 0, 0)

// Gets the current date with no params
const d = new D() 
console.log(d.year)  // 2019 fullYear
console.log(d.shortMonth) // July 6
console.log(d.date)   // 27
console.log(d.hours) // 18
console.log(d.mins)  // 6
console.log(d.secs)  // 5
console.log(d.format())
console.log(d.format('Y-M-D'))
console.log(d.format('Y-M-D h:I:s'))

module.exports = D;