/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Allocator {
    constructor() {}

    allocateTable(bookings, tables) {
        bookings.forEach(aBooking => {
            aBooking.table = ''

            for (let aTable of tables) {
                if (aTable.min <= aBooking.num && aBooking.num <= aTable.max) {
                    if (aTable.isAvailable(aBooking.from, aBooking.to)) {
                        aTable.addBooking(aBooking)
                        aBooking.table = aTable
                        console.log(`Table allocated: ${aBooking.name}, ${aTable.tableNum}, ${aBooking.from}`)
                        break
                    }
                }
            }
            if (aBooking.table === '') {
                console.log(`Table not allocated: ${aBooking.name}, ${aBooking.from}`)
            }
        })
    }
}
