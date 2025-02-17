const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

// path:GET / users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => {
  res.json(users);
});

// path:POST / user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter
  counter += 1
  users.push(user);
  res.json({
    message: 'Create new user successfully',
    user: user
  });
 })

 // path: PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user โดยใชเ id เป็นตัวระบุ
 app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;
  // ค้าหา user ที่ต้องการแก้ไข
  let selectIndex = users.findIndex(user => user.id == id)// หาอะไรสักอย่างที่อยู่ใน array

  // แก้ไขข้อมูล user
  if (updateUser.firstname ) {
    users[selectIndex].firstname = updateUser.firstname || users[selectIndex].firstname
  }
  if (updateUser.firstname ) {
  users[selectIndex].lastname = updateUser.lastname || users[selectIndex].lastname
  }

  res.json({
    message: 'Update user successfully',
    data: {
      user: updateUser,
      indexUpdated: selectIndex
    }
  })
 })

 //path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
 app.delete('/user/:id', (req, res) => {
  let id = req.params.id;
  // หา index ของ user ที่ต้องการลบ
  let selectIndex = users.findIndex(user => user.id == id)

  // ลบ
  users.splice(selectIndex ,1)
  res.json({
    message: 'Delete user successfully',
    indexDeleted: selectIndex
  })
 })

app.listen(port, (req, res) => {  
  console.log('Http Server is running on port ' + port);
});