const mongoose=require( "mongoose" );



const userSchema=new mongoose.Schema( {

  username: {
    type: String,
    trim: true,
    required: [ true, "Must provide name!" ]
  },
  password: {
    type: String,
    required: [ true, "Must provide password!" ],
    trim: true,
  }


} );


const User=mongoose.model( "User", userSchema );
module.exports=User;