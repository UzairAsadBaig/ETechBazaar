/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const fs=require( "fs" );

const mongoose=require( "mongoose" );
// const dotenv=require( "dotenv" );

// eslint-disable-next-line import/no-dynamic-require
const Product=require( './../../models/productModel' );
const User=require( './../../models/userModel' );
const Order=require( './../../models/orderModel' );


// dotenv.config( {
//     path: "./config.env"
// } ); // read all the variables from config.env file and put them in nodejs environment


// ! Connecting our App with hosted datatbase on Atlas Cloud
// const DB=process.env.DATABASE.replace( "<password>", process.env.DATABASE_PASSWORD );
const DB="mongodb://localhost:27017/etechbazaar";
mongoose.connect( DB )
    .then( () => console.log( "Database connection successfull!✨✨" ) );
const products=JSON.parse( fs.readFileSync( `${__dirname}/productData.json`, "utf-8" ) );
const users=JSON.parse( fs.readFileSync( `${__dirname}/userData.json`, "utf-8" ) );
const orders=JSON.parse( fs.readFileSync( `${__dirname}/orderData.json`, "utf-8" ) );

const importData=async () => {

    try {
        await Product.create( products );
        await User.create( users, {
            validateBeforeSave: false
        } );
        await Order.create( orders );
        console.log( "Data has been stored into DB successfully 📑" );
    } catch ( error ) {
        console.log( error );
    }
    process.exit();
}

const deleteData=async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();
        console.log( "Data has been deleted from DB successfully ⛔" );
    } catch ( error ) {
        console.log( error );
    }
    process.exit();
}


if ( process.argv[ 2 ]==="--import" ) {
    importData();
} else if ( process.argv[ 2 ]==="--delete" ) {
    deleteData();
}