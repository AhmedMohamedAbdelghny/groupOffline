import mysql from "mysql2"

const connection = mysql.createConnection("mysql://ut2hmiicn1z31mp0:mWq3yGHgWYl4ewPuhpO7@bn3dkssytarzyofjbrcb-mysql.services.clever-cloud.com:3306/bn3dkssytarzyofjbrcb")

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {

        console.log("Connected to database")
    }
})

export default connection;