const userModel = require('../models/user.model');
// const foodpartner = require('../models/foodpartner.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartner.model');
// const e = require('express');


async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUseAlreadyExists = await userModel.findOne({
        email
    })

    if (isUseAlreadyExists) {
        return res.status(400).json({
            message: "user already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    // const token = jwt.sign({
    //     id: user._id,
    // }, process.env.JWT_SECRET)


      const token = jwt.sign(
  {
    id: user._id,
    role: "user"
  },
  process.env.JWT_SECRET
);




    // res.cookie("token", token)
    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false // localhost ke liye
});



    res.status(201).json({
        message: "user register succesfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email
    })
    if (!user) {
        return res.status(400).json({
            message: "Invalid email or Password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or Password"
        })
    }
    // const token = jwt.sign({
    //     id: user._id,

    // }, process.env.JWT_SECRET)



       const token = jwt.sign(
  {
    id: user._id,
    role: "user"
  },
  process.env.JWT_SECRET
);


    // res.cookie("token", token)
    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false // localhost ke liye
});


    res.status(200).json({
        message: "User logged in succesfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "user logged out successfully"
    });
}



// foodpartner

// async function registerFoodPartner(req, res) {
//     const { name, email, password } = req.body;

//     const isAccountAlreadyExists = await foodPartnerModel.findOne({
//         email
//     })

//     if (!isAccountAlreadyExists) {
//         return res.status(400).json({
//             message: "Food partner account already exists"
//         })
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const foodPartner = await foodPartnerModel.create({
//         name,
//         email,
//         password: hashedPassword
//     })
//     const token = jwt.sign({
//         id: foodPartner._id,

//     }, process.env.JWT_SECRET)

//     res.cookie("token", token)

//     res.status(201).json({
//         message: "Food partner register successfully",
//         foodPartner: {
//             _id: foodPartner._id,
//             email: foodPartner.email,
//             name: foodPartner.name
//         }
//     })


// }
async function registerFoodPartner(req, res) {
    const { name, email, password } = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({
        email
    })

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food partner account already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword
    });

    // const token = jwt.sign({
    //     id: foodPartner._id,
    // }, process.env.JWT_SECRET);


        const token = jwt.sign(
  {
    id: foodPartner._id,
    role: "partner"
  },
  process.env.JWT_SECRET
);



    // res.cookie("token", token);
    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false // localhost ke liye
});


    res.status(201).json({
        message: "Food partner register successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    });
}



async function loginFoodPartner(req, res) {
    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({
        email
    })

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }


    // const token = jwt.sign({
    //     id: foodPartner._id,

    // }, process.env.JWT_SECRET)


       const token = jwt.sign(
  {
    id: foodPartner._id,
    role: "partner"
  },
  process.env.JWT_SECRET
);




    // res.cookie("token", token)
    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false // localhost ke liye
});

    res.status(200).json({
        message: "food partner logged successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    })
}

function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"food partner logged out successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner,
}