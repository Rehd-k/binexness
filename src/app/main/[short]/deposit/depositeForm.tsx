'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getWallet } from './wallets';




export default function DepositForm({ props, user, userid, network }: any) {
    const router = useRouter()
    const [amount, setAmount] = useState(0);
    const notify = () => toast("Stand by for confirmation")


    function getAmount(event: any) {
        setAmount(event.target.value)
    }

    const transaction = {
        coin: props,
        amount: amount,
        direction: 'in',
        user: user,
        userid: userid
    }

    const wallet = getWallet(props, network)

    async function handleSubmit() {
        try {
            await axios.post(`/main/api`, transaction);
            notify()
            setTimeout(() => {
                router.push("/main/assetpage")
            }, 5000);

        } catch (err) {
        }
    }
    return <>
        <div className="text-xl font-bold text-center mt-5 px-2 md:block hidden">
            {wallet.big}
        </div>

        <div className="text-xl font-bold text-center mt-5 px-2 md:hidden">
            {wallet.small}
        </div>

        <div className="w-4/5 h-10 mx-auto mt-5">
            <input type="number" placeholder="Enter Amount" className="w-full h-full border-0 shadow shadow-gray-800 rounded active:border px-2" onChange={getAmount} />
        </div>


        <div className="mt-5 text-gray-800 text-center">
            Send {props} to the above address and the button below
        </div>


        <div className="md:w-2/6 w-1/2 mx-auto mt-5">
            <button onClick={handleSubmit} className="w-full py-4 bg-gray-800 text-white rounded">
                Have Made Payment
            </button>
        </div>

        <ToastContainer />
    </>
}