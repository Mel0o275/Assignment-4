// const fs = require("fs");
// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.json());

// // Add User
// app.post('/user', (req, res, next) => {
//     let body = req.body;
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     if (users.some(u => u.email === body.email)) {
//         res.status(400).json({ message: "Email already exists!" });
//         return;
//     }
//     const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
//     body.id = maxId + 1;
//     users.push(body);
//     fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
//     res.status(201).json(body);
// });

// // Filter Users By Age
// app.get('/user/filter', (req, res, next) => {
//     const key = parseInt(req.query.key);
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     const filteredUsers = users.filter(u => u.age >= key);
//     res.status(200).json(filteredUsers);
// });

// // Update User
// app.patch('/user/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const updatedData = req.body;
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     const userIndex = users.findIndex(u => u.id === id);
//     const found = users.find(u => u.email === updatedData.email);
//     if(found){
//         res.status(400).json({ message: "Email already exists!" });
//         return;
//     }
//     if(userIndex === -1){
//         res.status(404).json({message : "User not found"});
//         return;
//     }
//     const updatedUser = {...users[userIndex], ...updatedData};
//     users[userIndex] = updatedUser;
//     fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
//     res.status(200).json(updatedUser);
// });

// // Delete User
// app.delete('/user/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     const userIndex = users.findIndex(u => u.id === id);
//     if(userIndex === -1){
//         res.status(404).json({message : "User not found"});
//         return;
//     }
//     users.splice(userIndex, 1);
//     fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
//     res.status(200).json({message : "User deleted successfully"});
// });

// // Get All Users
// app.get('/user', (req, res, next) => {
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     res.status(200).json(users);
// });

// // Get Specific User
// app.get('/user/:id', (req, res, next) => {
//     let id = parseInt(req.params.id);
//     let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//     const user = users.find(u => u.id === id);
//     if(!user){
//         res.status(404).json({message : "User not found"});
//         return;
//     }
//     res.status(200).json(user);
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

// ---------------------------------------------------------

// Musician
//-----------
// musician_id (PK)
// name
// street
// city
// phone_number

// Instrument
//-----------
// instrument_name (PK)
// musical_key

// Album
//-----------
// album_id (PK)
// title (Unique)
// copyright_date
// producer_id (FK)

// Song
//-----------
// song_id (PK)
// title (Unique)
// author
// album_id (FK

// Musician_Instrument (Many-to-Many)
//---------------------
// musician_id (FK)
// instrument_name (FK)

// Musician_Song (Many-to-Many)
//----------------
// musician_id (FK)
// song_id (FK)


// ---------------------------------------------------------

// BOUNS

// function longestCommonPrefix(strs) {
//     if (!strs || strs.length === 0) return "";
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         let j = 0;
//         while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
//             j++;
//         }
//         prefix = prefix.substring(0, j);
//         if (prefix === "") return "NO Prefix";
//     }

//     return prefix;
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));

