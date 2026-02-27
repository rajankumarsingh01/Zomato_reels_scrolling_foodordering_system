// const foodPartnerModel = require("../models/foodpartner.model")
// const jwt = require("jsonwebtoken")
// const userModel = require("../models/user.model")

// async function authFoodPartnerMiddleware(req,res,next){
//     const token = req.cookies.token;
//     if(!token){
//        return res.status(401).json({
//             message:"please login first"
//         })
//     }
//     try {
//        const decoded = jwt.verify(token,process.env.JWT_SECRET);
       
//        const foodPartner = await foodPartnerModel.findById(decoded.id);

//        req.foodPartner = foodPartner

//        next();

//     } catch (error) {
//         return res.status(401).json({
//             message:"Invalid token"
//         })
//     }
// }

// async function authUserMiddleware(req,res,next){
//   const token = req.cookies.token;

//   if(!token){
//      return res.status(401).json({
//         message:"Please login first"
//      })
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)

//     const user = await userModel.findById(decoded.id);

//     req.user = user

//     next()

//   } catch (error) {
//     return res.status(401).json({
//         message:"Invalid Token"
//      })
    
//   }

// }

// module.exports = {
//     authFoodPartnerMiddleware,
//     authUserMiddleware,
// }


// niche wala perfect working

// const foodPartnerModel = require("../models/foodpartner.model");
// const userModel = require("../models/user.model");
// const jwt = require("jsonwebtoken");

// // ================= FOOD PARTNER =================
// async function authFoodPartnerMiddleware(req, res, next) {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Please login first" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.role !== "partner") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const foodPartner = await foodPartnerModel.findById(decoded.id);
//     req.foodPartner = foodPartner;
//     next();

//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// }

// // ================= USER =================
// async function authUserMiddleware(req, res, next) {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Please login first" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.role !== "user") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const user = await userModel.findById(decoded.id);
//     req.user = user;
//     next();

//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// }

// module.exports = {
//   authFoodPartnerMiddleware,
//   authUserMiddleware,
// };




const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// ================= FOOD PARTNER =================
async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "partner") {
      return res.status(403).json({ message: "Access denied" });
    }

    const foodPartner = await foodPartnerModel
      .findById(decoded.id)
      .select("-password");

    if (!foodPartner) {
      return res.status(401).json({ message: "Account not found" });
    }

    req.foodPartner = foodPartner;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// ================= USER =================
async function authUserMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "user") {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await userModel
      .findById(decoded.id)
      .select("-password");

    if (!user) {
      return res.status(401).json({ message: "Account not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}









module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware,
};
