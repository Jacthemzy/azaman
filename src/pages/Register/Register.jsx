// import { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import classes from './register.module.css';
// import {FaAngleLeft} from 'react-icons/fa'


// export default function Register({setIsFilled,setBankData}) {
//     const navigate = useNavigate();
//     const [holder, setHolder] = useState('');
//     const [bank, setBank] = useState('');
//     const [account, setAccount] = useState('');

//     const handleNextClick = async () => {
//         if (holder && bank && account) {
//       setBankData({
//         accountHolder: holder,
//         bankName: bank,
//         accountNumber: account
//       })
//             setIsFilled(true)
//         } else {
//             alert('Please fill all fields before proceeding.');
//         }
//     }

//     return (
// <>
//                 <h1>PLEASE INPUT YOUR ACCOUNT DETAILS</h1>
//                 <div className={classes.inputs}>
//                     <div className={classes.input}>
//                         <label htmlFor="holder">Account Holder</label>
//                         <input type="text" id="holder" required value={holder} onChange={e => setHolder(e.target.value)} />
//                     </div>
//                     <div className={classes.input}>
//                         <label htmlFor="bank">Bank Name</label>
//                         <input type="text" id="bank" required value={bank} onChange={e => setBank(e.target.value)} />
//                     </div>
//                     <div className={classes.input}>
//                         <label htmlFor="account">Account Number</label>
//                         <input type="text" id="account" required value={account} onChange={e => setAccount(e.target.value)} />
//                     </div>
//                 </div>
//                 <button className={classes.button} onClick={handleNextClick}>Submit</button> 
//     </>
//     );
// }

import { useState } from 'react';

const Register = ({ setIsFilled, setBankData }) => {
    const [holder, setHolder] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');

    const handleNextClick = async () => {
        if (holder && bank && account) {
            setBankData({
                accountHolder: holder,
                bankName: bank,
                accountNumber: account
            });
            setIsFilled(true);
        } else {
            alert('Please fill all fields before proceeding.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
            <div className="w-full max-w-md bg-blue-700 p-6 rounded-lg shadow-md">
                <h2 className="text-white text-center text-xl font-bold mb-6">PLEASE INPUT YOUR ACCOUNT DETAILS</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-white mb-1" htmlFor="holder">Account Holder</label>
                        <input
                            type="text"
                            id="holder"
                            required
                            value={holder}
                            onChange={(e) => setHolder(e.target.value)}
                            className="w-full p-2 bg-zinc-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white mb-1" htmlFor="bank">Bank Name</label>
                        <input
                            type="text"
                            id="bank"
                            required
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            className="w-full p-2 bg-zinc-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white mb-1" htmlFor="account">Account Number</label>
                        <input
                            type="text"
                            id="account"
                            required
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            className="w-full p-2 bg-zinc-300 rounded"
                        />
                    </div>
                    <button
                        className="w-full bg-green-500 text-black font-bold py-2 rounded"
                        onClick={handleNextClick}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
