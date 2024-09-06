// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import li from '../css/confirm.module.css';
// import { FaAngleLeft } from 'react-icons/fa';

// const Confirm = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className={li.container}>
//       {isHovered && <div className={li.overlay}></div>}
//       <div className={li.change}>
//         <div className={li.main}>
//           <h3 className={li.h3}>
//             <Link to="/"><FaAngleLeft /> Home</Link>
//           </h3>
//           <h2 className={li.tit}>ARE YOU A CONTENT CREATOR?</h2>
//           <span><Link to='/error1'>
//             <button
//               className={li.but1}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               NO I AM NOT
//             </button></Link>
//             <Link to="/wel"><button
//               className={li.but2}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               YES I AM
//             </button></Link>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirm;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const Confirm = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center text-white">
      {isHovered && <div className="absolute inset-0 bg-black opacity-50"></div>}
      <div className="relative max-w-md w-full p-6">
        <h3 className="text-white text-lg mb-4">
          <Link to="/" className="flex items-center space-x-2">
            <FaAngleLeft className="w-4 h-4" />
            Home
          </Link>
        </h3>
        <h2 className="text-center text-xl font-bold mb-8">ARE YOU A CONTENT CREATOR?</h2>
        <div className="flex space-x-4">
          <Link to="/error1" className="relative">
            <button
              className="bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-red-700"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              NO I AM NOT
            </button>
            {isHovered && (
              <div className="absolute inset-0 bg-red-600 opacity-75 rounded"></div>
            )}
          </Link>
          <Link to="/wel" className="relative">
            <button
              className="bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-700"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              YES I AM
            </button>
            {isHovered && (
              <div className="absolute inset-0 bg-green-600 opacity-75 rounded"></div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
