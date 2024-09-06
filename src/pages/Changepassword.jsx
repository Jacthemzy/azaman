// import React, { useState, useEffect } from 'react';
// import '../css/change.css';
// import axiosInstance from "../api/axios"
// import { Link, useNavigate } from 'react-router-dom';
// import { FaAngleLeft } from 'react-icons/fa';
// import Otp from './Otp';

// const Changepassword = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         newPassword: '',
//         confirmPassword: '', 
//     });
//   const axios = axiosInstance
//     const [register,setRegister] = useState(false)
//     const [errors, setErrors] = useState({});
//   const [otpCode,setOtpCode] = useState(null);
//     const [isValidOtp,setIsValidOtp] = useState(false)

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = 'Email address is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!formData.newPassword) {
//             newErrors.newPassword = 'New password is required';
//         }
//         if (!formData.confirmPassword) {
//             newErrors.confirmPassword = 'Confirm password is required';
//         } else if (formData.newPassword !== formData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match';
//         }
//         return newErrors;
//     };
//   useEffect(() => {
//     if(isValidOtp){
//         console.log("hehe")
//           const response = axios.post("content-creators/initiate-password-change",formData)
//         if(response.status ===200){
//           console.log("Success Now redirecting to dashboard")
//         }
//         console.log("something went wrong")
//       }else{
//         console.log("Invalid OTP code");
//       }
//   }, [isValidOtp])
// const isValid=()=>{
//     setIsValidOtp(true)
//   }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
        
//             // Submit form
//             //const response = await axios.get("your-otp-api-endpoint");
//             if(true || 200===200){
// //              const code = response?.data?.otp_code;
//         const code = 233221
//               setOtpCode(code);
              
              
//       }else{
//         window.alert("Ohh shorry this is not happening!")
//         console.log(response);
//         return 0;
//       }
//             setRegister(true)

//         } else {
//             setErrors(formErrors);
//         }
//     };

//     return (
//         <div className="change">
//             <div className="main">
//                 <Link className="h3" to="/"><h3><FaAngleLeft />Back</h3></Link>
//                 <h2>CHANGE PASSWORD</h2>
//         {register?<Otp otpCode={otpCode} setIsValidOtp={isValid} />:
//                 <form onSubmit={handleSubmit}>
//                     <label>EMAIL ADDRESS</label>
//                     <input
//                         type="text"
//                         name="email"
//                         className="text"
//                         placeholder=""
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
                    
//                     <label>NEW PASSWORD</label>
//                     <input
//                         type="password"
//                         name="newPassword"
//                         className="text"
//                         placeholder=""
//                         value={formData.newPassword}
//                         onChange={handleChange}
//                     />
//                     {errors.newPassword && <p className="error">{errors.newPassword}</p>}
                    
//                     <label>CONFIRM PASSWORD</label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         className="text"
//                         placeholder=""
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                     />
//                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    
//                     <button className="but" type="submit" onClick={handleSubmit}>CHANGE PASSWORD</button>
//                 </form>
//         }
//             </div>
//         </div>
//     );
// }

// export default Changepassword;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import axiosInstance from "../api/axios";
import Otp from './Otp';

const Changepassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [register, setRegister] = useState(false);
    const [errors, setErrors] = useState({});
    const [otpCode, setOtpCode] = useState(null);
    const [isValidOtp, setIsValidOtp] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState({ newPassword: false, confirmPassword: false });

    const axios = axiosInstance;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    useEffect(() => {
        if (isValidOtp) {
            const changePassword = async () => {
                try {
                    const response = await axios.post("content-creators/initiate-password-change", formData);
                    if (response.status === 200) {
                        console.log("Success! Now redirecting to dashboard");
                        // Add redirection logic here if needed
                    } else {
                        console.log("Something went wrong");
                    }
                } catch (error) {
                    console.log("An error occurred:", error);
                }
            };
            changePassword();
        }
    }, [isValidOtp, axios, formData]);

    const handleOtpValidation = () => {
        setIsValidOtp(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Simulate OTP generation and display OTP form
            const code = 233221; // Simulated OTP code
            setOtpCode(code);
            setRegister(true);
        } else {
            setErrors(formErrors);
        }
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisible({
            ...passwordVisible,
            [field]: !passwordVisible[field],
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-600">
            <div className="absolute top-4 left-4 text-white">
                <Link to="/" className="flex items-center space-x-2">
                    <FaAngleLeft className="h-6 w-6" />
                    <span>Home</span>
                </Link>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-center text-2xl font-bold text-green-400 mb-4">CHANGE PASSWORD</h2>
                {register ? (
                    <Otp otpCode={otpCode} setIsValidOtp={handleOtpValidation} />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-white text-sm font-bold mb-2" htmlFor="email">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="relative mb-4">
                            <label className="text-white text-sm font-bold mb-2" htmlFor="new-password">NEW PASSWORD</label>
                            <input
                                type={passwordVisible.newPassword ? 'text' : 'password'}
                                name="newPassword"
                                className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="New Password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('newPassword')}
                                className="absolute right-3 top-10 text-zinc-600 cursor-pointer"
                            >
                                {passwordVisible.newPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
                        </div>
                        <div className="relative mb-4">
                            <label className="text-white text-sm font-bold mb-2" htmlFor="confirm-password">CONFIRM PASSWORD</label>
                            <input
                                type={passwordVisible.confirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                className="absolute right-3 top-10 text-zinc-600 cursor-pointer"
                            >
                                {passwordVisible.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                        <button className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600" type="submit">CHANGE PASSWORD</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Changepassword;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
// import axiosInstance from '../api/axios';
// import Otp from './Otp';

// const Changepassword = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         newPassword: '',
//         confirmPassword: '',
//     });
//     const [register, setRegister] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [otpCode, setOtpCode] = useState(null);
//     const [isValidOtp, setIsValidOtp] = useState(false);
//     const [passwordVisible, setPasswordVisible] = useState({ newPassword: false, confirmPassword: false });

//     const axios = axiosInstance;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.email) {
//             newErrors.email = 'Email address is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!formData.newPassword) {
//             newErrors.newPassword = 'New password is required';
//         }
//         if (!formData.confirmPassword) {
//             newErrors.confirmPassword = 'Confirm password is required';
//         } else if (formData.newPassword !== formData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match';
//         }
//         return newErrors;
//     };

//     useEffect(() => {
//         if (isValidOtp) {
//             const changePassword = async () => {
//                 try {
//                     const response = await axios.post("content-creators/initiate-password-change", formData);
//                     if (response.status === 200) {
//                         console.log("Success! Now redirecting to dashboard");
//                         // Add redirection logic here if needed
//                     } else {
//                         console.log("Something went wrong");
//                     }
//                 } catch (error) {
//                     console.log("An error occurred:", error);
//                 }
//             };
//             changePassword();
//         }
//     }, [isValidOtp, axios, formData]);

//     const handleOtpValidation = () => {
//         setIsValidOtp(true);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             // Simulate OTP generation and display OTP form
//             const code = 233221; // Simulated OTP code
//             setOtpCode(code);
//             setRegister(true);
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = (field) => {
//         setPasswordVisible({
//             ...passwordVisible,
//             [field]: !passwordVisible[field],
//         });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-blue-600">
//             <div className="absolute top-4 left-4 text-white">
//                 <Link to="/" className="flex items-center space-x-2">
//                     <FaAngleLeft className="h-6 w-6" />
//                     <span>Back</span>
//                 </Link>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-center text-2xl font-bold text-blue-800 mb-8">CHANGE PASSWORD</h2>
//                 {register ? (
//                     <Otp otpCode={otpCode} setIsValidOtp={handleOtpValidation} />
//                 ) : (
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="email">Email Address</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                         </div>
//                         <div className="relative mb-4">
//                             <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="new-password">New Password</label>
//                             <input
//                                 type={passwordVisible.newPassword ? 'text' : 'password'}
//                                 name="newPassword"
//                                 className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 placeholder="New Password"
//                                 value={formData.newPassword}
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => togglePasswordVisibility('newPassword')}
//                                 className="absolute right-3 top-3 text-gray-600 cursor-pointer"
//                             >
//                                 {passwordVisible.newPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                             {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
//                         </div>
//                         <div className="relative mb-4">
//                             <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="confirm-password">Confirm Password</label>
//                             <input
//                                 type={passwordVisible.confirmPassword ? 'text' : 'password'}
//                                 name="confirmPassword"
//                                 className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => togglePasswordVisibility('confirmPassword')}
//                                 className="absolute right-3 top-3 text-gray-600 cursor-pointer"
//                             >
//                                 {passwordVisible.confirmPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                             {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//                         </div>
//                         <button className="w-full bg-blue-800 text-white p-3 rounded-lg font-bold hover:bg-blue-900" type="submit">Change Password</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Changepassword;

