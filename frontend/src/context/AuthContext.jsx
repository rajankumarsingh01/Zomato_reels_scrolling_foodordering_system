// import { createContext, useEffect, useState } from "react";
// import api from "../api/axios";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     loading: true,
//     role: null, // "user" | "partner"
//     data: null,
//   });

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const userRes = await api.get("/auth/me/user");
//         setAuth({
//           loading: false,
//           role: "user",
//           data: userRes.data.user,
//         });
//       } catch {
//         try {
//           const partnerRes = await api.get("/auth/me/food-partner");
//           setAuth({
//             loading: false,
//             role: "partner",
//             data: partnerRes.data.partner,
//           });
//         } catch {
//           setAuth({
//             loading: false,
//             role: null,
//             data: null,
//           });
//         }
//       }
//     };

//     checkAuth();
//   }, []);

//   return (
//     <AuthContext.Provider value={auth}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// import { createContext, useEffect, useState } from "react";
// import axios from "axios";


// /*
// =================================
// CREATE CONTEXT
// =================================
// */
// export const AuthContext = createContext();

// /*
// =================================
// PROVIDER
// =================================
// */
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // "user" | "partner"
//   const [loading, setLoading] = useState(true);

//   /*
//   =================================
//   CHECK LOGGED IN USER
//   =================================
//   */
// //   const fetchCurrentUser = async () => {
// //     try {
// //       // USER CHECK
// //       const userRes = await axios.get("/api/auth/me/user", {
// //         withCredentials: true,
// //       });

// //       if (userRes.data?.success) {
// //         setUser(userRes.data.user);
// //         setRole("user");
// //         setLoading(false);
// //         return;
// //       }
// //     } catch (err) {
// //       // ignore
// //     }

// //     try {
// //       // FOOD PARTNER CHECK
// //       const fpRes = await axios.get("/api/auth/me/food-partner", {
// //         withCredentials: true,
// //       });

// //       if (fpRes.data?.success) {
// //         setUser(fpRes.data.partner);
// //         setRole("partner");
// //         setLoading(false);
// //         return;
// //       }
// //     } catch (err) {
// //       // ignore
// //     }

// //     // NOT LOGGED IN
// //     setUser(null);
// //     setRole(null);
// //     setLoading(false);
// //   };
// const fetchCurrentUser = async () => {
//   try {
//     // USER CHECK
//     const userRes = await axios.get("/api/auth/me/user", { withCredentials: true });
//     if (userRes.data.user) {
//       setUser(userRes.data.user);
//       setRole("user");
//       setLoading(false);
//       return;
//     }
//   } catch (err) {}

//   try {
//     // FOOD PARTNER CHECK
//     const fpRes = await axios.get("/api/auth/me/food-partner", { withCredentials: true });
//     if (fpRes.data.partner) {
//       setUser(fpRes.data.partner);
//       setRole("partner");
//       setLoading(false);
//       return;
//     }
//   } catch (err) {}

//   // NOT LOGGED IN
//   setUser(null);
//   setRole(null);
//   setLoading(false);
// };

//   /*
//   =================================
//   ON APP LOAD
//   =================================
//   */
//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   /*
//   =================================
//   CONTEXT VALUE
//   =================================
//   */
//   const value = {
//     user,
//     role,
//     loading,
//     setUser,
//     setRole,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };



// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // "user" | "partner"
//   const [loading, setLoading] = useState(true);

// const refreshAuth = async () => {
//   setLoading(true);
//   await fetchCurrentUser();
// };

//   const fetchCurrentUser = async () => {
//     try {
//       const userRes = await axios.get("/api/auth/me/user", { withCredentials: true });
//       if (userRes.data.user) {
//         setUser(userRes.data.user);
//         setRole("user");
//         setLoading(false);
//         return;
//       }
//     } catch (err) {}

//     try {
//       const fpRes = await axios.get("/api/auth/me/food-partner", { withCredentials: true });
//       if (fpRes.data.partner) {
//         setUser(fpRes.data.partner);
//         setRole("partner");
//         setLoading(false);
//         return;
//       }
//     } catch (err) {}

//     setUser(null);
//     setRole(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   const value = { user, role, loading, setUser, setRole, refreshAuth };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// };




import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // "user" | "partner"
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const userRes = await axios.get("/api/auth/me/user", { withCredentials: true });
      if (userRes.data.user) {
        setUser(userRes.data.user);
        setRole("user");
        setLoading(false);
        return;
      }
    } catch {}

    try {
      const fpRes = await axios.get("/api/auth/me/food-partner", { withCredentials: true });
      

      if (fpRes.data.foodPartner) {
        setUser(fpRes.data.foodPartner);
        setRole("partner");
        setLoading(false);
        return;
      }
    } catch {}

    setUser(null);
    setRole(null);
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  /* ✅ LOGOUT (frontend-only) */
  const logout = () => {
    setUser(null);
    setRole(null);
  };



  return (
    <AuthContext.Provider value={{ user, role, loading, setUser, setRole,logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// use upper code if any error










// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchCurrentUser = async () => {
//     try {
//       const userRes = await api.get("/auth/me/user");
//       if (userRes.data.user) {
//         setUser(userRes.data.user);
//         setRole("user");
//         setLoading(false);
//         return;
//       }
//     } catch {}

//     try {
//       const fpRes = await api.get("/auth/me/food-partner");
//       if (fpRes.data.partner) {
//         setUser(fpRes.data.partner);
//         setRole("partner");
//         setLoading(false);
//         return;
//       }
//     } catch {}

//     setUser(null);
//     setRole(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, role, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
