// generic statistics for bank
const query =  `select sum(qty) as itemcount
from inventory;`

const stats = (args, message, db) => {
    stmt = db.prepare(query)
    row = stmt.get()
    return `We have a total of: `+row.itemcount+`.`
}

module.exports = stats