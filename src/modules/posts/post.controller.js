import connection from "../../../DB/connectionDB.js"



export const getPosts = (req, res) => {
    connection.execute(`select * from posts `, (err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({ msg: "done", result })
    })
}

export const addPost = (req, res) => {
    const { title, description, price } = req.body
    connection.execute(`insert into posts (title,description,price)
     values("${title}","${description}","${price}")`, (err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        if (!result.affectedRows) {
            return res.status(400).json({
                msg: "fail to insert post"
            })
        }
        res.status(200).json({ msg: "done" })
    })
}
export const updatePost = (req, res) => {
    const { title, description, price, id } = req.body
    connection.execute(`update posts set title="${title}",description="${description}",price="${price}" where id="${id}"`, (err, result) => {
        if (err) {
            return res.status(400).json({
                msg:"query error",
                error: err
            })
        }
        if (!result.affectedRows) {
            return res.status(400).json({
                msg: "fail to update post"
            })
        }
        res.status(200).json({ msg: "done" })
    })
}
export const deletePost = (req, res) => {
    const { id } = req.body
    connection.execute(`delete from posts   where id="${id}"`, (err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        if (!result.affectedRows) {
            return res.status(400).json({
                msg: "fail to update post"
            })
        }
        res.status(200).json({ msg: "done" })
    })
}
