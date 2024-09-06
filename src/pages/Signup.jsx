// import {useState} from 'react'
// import si from '../css/signup.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Signup = () => {


//   const [formData, setFormData] = useState({fullName: '', email: '',  productionName: '', productionLocation: '', password: '' });
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [errors, setErrors] = useState({});
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

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             // Submit form
//             console.log('Form submitted', formData);
//             navigate("/register")
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//   return (
  
//         <div className={si.change}>
//             <div className={si.main}>
//                 <h3 className={si.h3}>
                    
//                     <Link className={si.quit} to="/"> Quit</Link>
//                 </h3>
                
//                 <h4 className={si.lag2}>Creator &apos;s Sign Up</h4>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="fullName"
//                         className={si.text}
//                         placeholder="Full Name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                     />
//           {errors.fullName && <p className={si.error}>{errors.fullName}</p>}
//           <input
//                         type="email"
//                         name="email"
//                         className={si.text}
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p className={si.error}>{errors.email}</p>}
//                     <input
//                         type="text"
//                         name="productionName"
//                         className={si.text}
//                         placeholder="Production Name?"
//                         value={formData.productionName}
//                         onChange={handleChange}
//                     />
//                     {errors.productionName && <p className={si.error}>{errors.productionName}</p>}
//                     <input
//                         type="text"
//                         name="productionLocation"
//                         className={si.text}
//                         placeholder="Production Location?"
//                         value={formData.productionLocation}
//                         onChange={handleChange}
//                     />
//                     {errors.productionLocation && <p className={si.error}>{errors.productionLocation}</p>}
//                     <div className={si.passwordContainer}>
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className={si.text3}
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className={si.eyeButton}
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//           {errors.password && <p className={si.error}>{errors.password}</p>}
//           <div className={si.passwordContainer}>
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className={si.text3}
//                             placeholder="Confirm Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className={si.eyeButton}
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.password && <p className={si.error}>{errors.password}</p>}
                   
//                     <button type="submit" className={si.but}>NEXT</button>
//                 </form>
//             </div>
//     </div>
//   )
// }

// export default Signup


// import { useState, useEffect } from 'react';
// import si from '../css/signup.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import axiosInstance from '../api/axios';
// import Register from './Register/Register';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         productionName: '',
//         productionLocation: '',
//         password: '',
//         confirmPassword: '',
//     });
//   const [bankData,setBankData] = useState({
//     accountHolder: "",
//     bankName: "",
//     accountNumber: "",
//   })
//   const [isSubmitted,setIsSubmitted] = useState(false)
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [errors, setErrors] = useState({});
//   const [isFilled,setIsFilled] = useState(false)
//     const navigate = useNavigate();
//     const axios = axiosInstance

//     const handleChange = (e) => {
//          const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

// const performValid = async()=>{
//     console.log(bankData)
//  const response = await axios.post("content-creator/register",{
//       ...formData, ...bankData
//     });
//       if(response.status === 200){
//         console.log("Yep seems fine UwU")
//             navigate("/register");
//       }else{
//         window.alert("Shorry this shouldn't be habbening.")
//         console.log(response)
//       }

// }
//   useEffect(() => {
//     if(isFilled){
//       performValid()
//     }
//   }, [isFilled])
//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.productionName) {
//             newErrors.productionName = 'Production Name is required';
//         }
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }
//         if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match';
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length === 0) {
//             setIsSubmitted(true) 
//         } else {
//             setErrors(formErrors);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className={si.change}>
//             <div className={si.main}>
//                 <h3 className={si.h3}>
//                     <Link className={si.quit} to="/">Quit</Link>
//                 </h3>
//                 <h4 className={si.lag2}>Creator &apos;s Sign Up</h4>
//         {isSubmitted ? <Register setBankData={setBankData} setIsFilled={setIsFilled}/> :
//                 (<form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="fullName"
//                         className={si.text}
//                         placeholder="Full Name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                     />
//                     {errors.fullName && <p className={si.error}>{errors.fullName}</p>}
//                     <input
//                         type="email"
//                         name="email"
//                         className={si.text}
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p className={si.error}>{errors.email}</p>}
//                     <input
//                         type="text"
//                         name="productionName"
//                         className={si.text}
//                         placeholder="Production Name?"
//                         value={formData.productionName}
//                         onChange={handleChange}
//                     />
//                     {errors.productionName && <p className={si.error}>{errors.productionName}</p>}
//                     <input
//                         type="text"
//                         name="productionLocation"
//                         className={si.text}
//                         placeholder="Production Location?"
//                         value={formData.productionLocation}
//                         onChange={handleChange}
//                     />
//                     {errors.productionLocation && <p className={si.error}>{errors.productionLocation}</p>}
//                     <div className={si.passwordContainer}>
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="password"
//                             className={si.text3}
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className={si.eyeButton}
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.password && <p className={si.error}>{errors.password}</p>}
//                     <div className={si.passwordContainer}>
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             name="confirmPassword"
//                             className={si.text3}
//                             placeholder="Confirm Password"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className={si.eyeButton}
//                         >
//                             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     {errors.confirmPassword && <p className={si.error}>{errors.confirmPassword}</p>}
//                     <button type="submit" className={si.but}>NEXT</button>
//                 </form>)
//         }
//             </div>
//         </div>
//     );
// };

// export default Signup;


import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axiosInstance from '../api/axios';
import Register from './Register/Register';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        productionName: '',
        productionLocation: '',
        password: '',
        confirmPassword: '',
    });
    const [bankData, setBankData] = useState({
        accountHolder: '',
        bankName: '',
        accountNumber: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFilled, setIsFilled] = useState(false);
    const navigate = useNavigate();
    const axios = axiosInstance;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const performValidation = async () => {
        console.log(bankData);
        const response = await axios.post('content-creator/register', {
            ...formData,
            ...bankData,
        });
        if (response.status === 200) {
            console.log("Registration successful!");
            navigate('/register');
        } else {
            window.alert("Registration failed. Please try again.");
            console.log(response);
        }
    };

    useEffect(() => {
        if (isFilled) {
            performValidation();
        }
    }, [isFilled]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.productionName) {
            newErrors.productionName = 'Production Name is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setIsSubmitted(true);
        } else {
            setErrors(formErrors);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-600">
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-white text-center text-xl font-bold mb-6">Creator's Sign Up</h2>
                {isSubmitted ? (
                    <Register setBankData={setBankData} setIsFilled={setIsFilled} />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                        />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <input
                            type="text"
                            name="productionName"
                            placeholder="Production Name?"
                            value={formData.productionName}
                            onChange={handleChange}
                            className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                        />
                        {errors.productionName && <p className="text-red-500">{errors.productionName}</p>}
                        <input
                            type="text"
                            name="productionLocation"
                            placeholder="Production Location?"
                            value={formData.productionLocation}
                            onChange={handleChange}
                            className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                        />
                        {errors.productionLocation && <p className="text-red-500">{errors.productionLocation}</p>}
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2 cursor-pointer"
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-2 border border-white rounded bg-white text-zinc-800"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2 cursor-pointer"
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="bg-red-600 text-white py-2 px-4 rounded"
                                onClick={() => navigate('/')}
                            >
                                QUIT
                            </button>
                            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
                                NEXT
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Signup;
