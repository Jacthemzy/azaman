// import si from '../css/welcome.module.css';
// import { Link } from 'react-router-dom';
// import { FaAngleLeft} from 'react-icons/fa';


// const Welcome = () => {
//   return (
//             <div className={si.change}>
//             <div className={si.main}>
//                 <h3 className={si.h3}>
                    
//                     <Link to="/con"><FaAngleLeft /> Home</Link>
//                 </h3>
//         <div className={si.tit}>
//           <h1>WELCOME</h1>
//           <h2>Proceed to SIGN UP</h2>
//           <Link className={si.button} to="/signup">
//             <button type='submit' className={si.but} >SIGN UP</button>
//           </Link>
//                 </div>
//     </div>
//     </div>
//   )
// }

// export default Welcome




import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <div className="absolute top-4 left-4">
        <Link to="/con" className="flex items-center text-white">
          <FaAngleLeft className="w-6 h-6 mr-2" />
          Home
        </Link>
      </div>
      <div className="max-w-md w-full p-6">
        <h1 className="text-4xl font-bold text-green-500 mb-4">WELCOME</h1>
        <p className="text-xl font-semibold mb-8">Proceed to SIGN UP</p>
        <Link to="/signup">
          <button className="bg-green-500 text-black font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-600">
            SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

