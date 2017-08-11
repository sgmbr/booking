/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Table {
    constructor(newTableNum, newMin, newMax) {
        this.tableNum = newTableNum
        this.min = newMin
        this.max = newMax
        this.bookings = []
    }

    addBooking(booking) {
        this.bookings.push(booking)
    }

    isAvailable(from, to) {
        let result = true

        this.bookings.forEach(booking => {
            if (booking.from <= from && from < booking.to ||
                booking.from < to && to <= booking.to ||
                from < booking.from && booking.to < to) {
                    result = false
            }
        })
        return result
    }
}
