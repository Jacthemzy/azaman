// // 
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
// import axiosInstance from '../api/axios';

// const Signin = () => {
//     const [formData, setFormData] = useState({ productionName: '', password: '' });
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [errors, setErrors] = useState({});

//     const axios = axiosInstance;
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.productionName) {
//             newErrors.productionName = 'Production Name is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             // Submit form
//             const response = await axios.post("content-creators/login", formData);
//             if (response.status === 200) {
//                 navigate('/dashboard');
//             } else {
//                 window.alert("Something went wrong");
//                 console.log(response);
//             }
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-blue-600">
//             <div className="absolute top-4 left-4 text-white">
//                 <Link to="/" className="flex items-center space-x-2">
//                     <FaAngleLeft className="h-6 w-6" />
//                     <span>Home</span>
//                 </Link>
//             </div>
//             <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-center text-2xl font-bold text-green-400 mb-4">WELCOME CREATOR</h2>
//                 <h4 className="text-center text-white mb-4">PLEASE SIGN IN</h4>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="productionName"
//                         className="w-full p-3 mb-4 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                         placeholder="Production Name?"
//                         value={formData.productionName}
//                         onChange={handleChange}
//                     />
//                     {errors.productionName && <p className="text-red-500 text-sm">{errors.productionName}</p>}
//                     <div className="relative mb-4">
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className="absolute right-3 top-3 text-zinc-600"
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                     <div className="flex items-center justify-between mb-4 text-white">
//                         <label className="flex items-center">
//                             <input type="checkbox" className="mr-2" />
//                             Remember Me
//                         </label>
//                         <Link to="/forgot" className="text-green-400">forgot password?</Link>
//                     </div>
//                     <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600">SIGN IN</button>
//                 </form>
//                 <div className="text-center mt-4 text-white">
//                     <span>Don't have an account? </span>
//                     <Link to="/con" className="text-green-400">Create Account</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
// import axiosInstance from '../api/axios';

// const Signin = () => {
//     const [formData, setFormData] = useState({ productionName: '', password: '' });
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [errors, setErrors] = useState({});

//     const axios = axiosInstance;
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.productionName) {
//             newErrors.productionName = 'Production Name is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             const response = await axios.post("content-creators/login", formData);
//             if (response.status === 200) {
//                 navigate('/dashboard');
//             } else {
//                 window.alert("Something went wrong");
//                 console.log(response);
//             }
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-blue-600">
//             <div className="absolute top-4 left-4 text-white">
//                 <Link to="/" className="flex items-center space-x-2">
//                     <FaAngleLeft className="h-6 w-6" />
//                     <span>Home</span>
//                 </Link>
//             </div>
//             <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-center text-2xl font-bold text-green-400 mb-4">WELCOME CREATOR</h2>
//                 <h4 className="text-center text-white mb-4">PLEASE SIGN IN</h4>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="productionName"
//                             className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                             placeholder="Production Name?"
//                             value={formData.productionName}
//                             onChange={handleChange}
//                         />
//                         {errors.productionName && <p className="text-red-500 text-sm">{errors.productionName}</p>}
//                     </div>
//                     <div className="relative mb-4">
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className="absolute right-3 top-3 text-zinc-600"
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                     <div className="flex items-center justify-between mb-4 text-white">
//                         <label className="flex items-center">
//                             <input type="checkbox" className="mr-2" />
//                             Remember Me
//                         </label>
//                         <Link to="/forgot" className="text-green-400">Forgot password?</Link>
//                     </div>
//                     <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600">SIGN IN</button>
//                 </form>
//                 <div className="text-center mt-4 text-white">
//                     <span>Don't have an account? </span>
//                     <Link to="/con" className="text-green-400">Create Account</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
// import axiosInstance from '../api/axios';

// const Signin = () => {
//     const [formData, setFormData] = useState({ productionName: '', password: '' });
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [errors, setErrors] = useState({});

//     const axios = axiosInstance;
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.productionName) {
//             newErrors.productionName = 'Production Name is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             const response = await axios.post("content-creators/login", formData);
//             if (response.status === 200) {
//                 navigate('/dashboard');
//             } else {
//                 window.alert("Something went wrong");
//                 console.log(response);
//             }
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-blue-600">
//             <div className="absolute top-4 left-4 text-white">
//                 <Link to="/" className="flex items-center space-x-2">
//                     <FaAngleLeft className="h-6 w-6" />
//                     <span>Home</span>
//                 </Link>
//             </div>
//             <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-center text-2xl font-bold text-green-400 mb-4">WELCOME CREATOR</h2>
//                 <h4 className="text-center text-white mb-4">PLEASE SIGN IN</h4>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="productionName"
//                             className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                             placeholder="Production Name?"
//                             value={formData.productionName}
//                             onChange={handleChange}
//                         />
//                         {errors.productionName && <p className="text-red-500 text-sm">{errors.productionName}</p>}
//                     </div>
//                     <div className="relative mb-4">
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className="absolute right-3 top-3 text-zinc-600"
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                     <div className="flex items-center justify-between mb-4 text-white">
//                         <label className="flex items-center">
//                             <input type="checkbox" className="mr-2" />
//                             Remember Me
//                         </label>
//                         <Link to="/forgot" className="text-green-400">Forgot password?</Link>
//                     </div>
//                     <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600">SIGN IN</button>
//                 </form>
//                 <div className="text-center mt-4 text-white">
//                     <span>Don't have an account? </span>
//                     <Link to="/con" className="text-green-400">Create Account</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import axiosInstance from '../api/axios';

const Signin = () => {
    const [formData, setFormData] = useState({ productionName: '', password: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const axios = axiosInstance;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.productionName) {
            newErrors.productionName = 'Production Name is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            const response = await axios.post("content-creators/login", formData);
            if (response.status === 200) {
                navigate('/dashboard');
            } else {
                window.alert("Something went wrong");
                console.log(response);
            }
        } else {
            setErrors(formErrors);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
                <h2 className="text-center text-2xl font-bold text-green-400 mb-4">WELCOME CREATOR</h2>
                <h4 className="text-center text-white mb-4">PLEASE SIGN IN</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="productionName"
                            className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Production Name?"
                            value={formData.productionName}
                            onChange={handleChange}
                        />
                        {errors.productionName && <p className="text-red-500 text-sm">{errors.productionName}</p>}
                    </div>
                    <div className="relative mb-4">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            className="w-full p-3 rounded bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-zinc-600"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    <div className="flex items-center justify-between mb-4 text-white">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <Link to="/forgot" className="text-green-400">Forgot password?</Link>
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600">SIGN IN</button>
                </form>
                <div className="text-center mt-4 text-white">
                    <span>Don't have an account? </span>
                    <Link to="/con" className="text-green-400">Create Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;

