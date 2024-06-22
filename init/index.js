const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_URL='mongodb://127.0.0.1:27017/wanderlust';


main()
.then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});


async function main() {
    await mongoose.connect(Mongo_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"6672e9d8c8a893f84ad68787"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();


