// inventory filterable by bankchars
const query =  `select chars.name, items.en, sum(inv.qty) as qty 
                from inventory as inv 
                join items on inv.item_id = items.id 
                join chars on inv.char_id = chars.id
                where chars.name like ?
                group by chars.name, item_id 
                order by chars.name, item.en;`

const inventory = (args, message, db) => {
    char = '%'
    if(args.length > 1) {
        char = args[1]
    }
    stmt = db.prepare(query)
    rows = stmt.all(char)
    return rows.map((row) => {
        qty = ('      '+row.qty).slice(-4)
        return qty+'x  '+row.en
    })
}

module.exports = inventory