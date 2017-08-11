/* jshint undef: true, unused: true, esversion: 6, asi: true */

let tables = []
let bookings = []

tables.push(new Table(1, 3, 6))
tables.push(new Table(2, 3, 6))
tables.push(new Table(3, 1, 2))
tables.push(new Table(4, 1, 2))
tables.push(new Table(5, 1, 2))
tables.push(new Table(6, 1, 2))
tables.push(new Table(7, 1, 2))
tables.push(new Table(8, 3, 5))

let date = new Date()
bookings.push(new Booking('Satoshi', 4, date, '5:30', '7:30'))
bookings.push(new Booking('Ayako', 4, date, '6:30', '8:30'))
bookings.push(new Booking('Mark', 4, date, '5:30', '7:00'))
bookings.push(new Booking('Miyuki', 4, date, '7:00', '9:00'))

let allocator = new Allocator
allocator.allocateTable(bookings, tables)

console.log(bookings)
console.log(tables)
