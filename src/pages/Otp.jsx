// import React, { useState } from 'react';
// import si from '../css/otp.module.css';

// const Otp = ({otpCode,setIsValidOtp}) => {
//     const [otp, setOtp] = useState(new Array(6).fill(""));
//     const [error, setError] = useState("");

//     const handleChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//         // Focus next input
//         if (element.nextSibling) {
//             element.nextSibling.focus();
//         }
//     };

//     const handleKeyUp = (element, index) => {
//         if (element.key === "Backspace" && element.target.previousSibling) {
//             element.target.previousSibling.focus();
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (otp.join("").length !== 6) {
//             setError("Please fill all the fields");
//         } else {
//             setError("");
//       const otpValid=Number(otp.join("")) === otpCode
//             setIsValidOtp(otpValid);
//             // You can add further validation or API calls here
//         }
//     };

//     return (
//         <>
//                     <h4 className={si.lag2}>PLEASE INPUT CODE SENT TO EMAIL</h4>
//                     <form onSubmit={handleSubmit}>
//                         <div className={si.otpContainer}>
//                             {otp.map((data, index) => {
//                                 return (
//                                     <input
//                                         className={si.ade}
//                                         type="text"
//                                         name="otp"
//                                         maxLength="1"
//                                         key={index}
//                                         value={data}
//                                         onChange={(e) => handleChange(e.target, index)}
//                                         onKeyUp={(e) => handleKeyUp(e, index)}
//                                     />
//                                 );
//                             })}
//                         </div>
//                         {error && <p className={si.error}>{error}</p>}
//                         <button type="submit" className={si.but}>VERIFY CODE</button>
//                     </form>
//         </>
//     );
// };

// export default Otp;



import React, { useState } from 'react';

const Otp = ({ otpCode, setIsValidOtp }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyUp = (element, index) => {
    if (element.key === "Backspace" && element.target.previousSibling) {
      element.target.previousSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("").length !== 6) {
      setError("Please fill all the fields");
    } else {
      setError("");
      const otpValid = Number(otp.join("")) === otpCode;
      setIsValidOtp(otpValid);
      // You can add further validation or API calls here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-4">
      <div className="w-full max-w-sm">
        <h4 className="text-lg font-semibold text-center mb-4">PLEASE INPUT CODE SENT TO EMAIL</h4>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                className="w-12 h-12 text-center text-black bg-zinc-200 border border-zinc-300 rounded"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button type="submit" className="w-full py-3 bg-green-500 text-black font-bold rounded">VERIFY CODE</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

