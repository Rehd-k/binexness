"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function AdminTables() {
  const doToast = (message: string) => toast(message);
  const [users, setUser] = useState([]);
  const [updateDetails, setUpdateDetails] = useState<{
    email: string;
    coin: string;
    amount: number;
  }>({
    email: "",
    coin: "",
    amount: 0,
  });
  const [updatedAmount, setUpdatedAmount] = useState(0);

  async function getUsers() {
    const users = await axios.get("/admin/users/api");
    setUser(users.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(email: string, coin: string) {
    setUpdateDetails({
      email,
      coin,
      amount: 0,
    });
    setIsOpen(true);
  }

  async function DoSubmitAmout() {
    const details_to_update = {
      email: updateDetails.email,
      coin: updateDetails.coin,
      amount: updatedAmount,
    };
    try {
      await axios.put(`/admin/users/api`, details_to_update);
      doToast("Success");
      setIsOpen(false);
    } catch (err) {
      doToast("An Error Occured try again letter");
    }
  }

  function getUpdateAmount(event: any) {
    setUpdatedAmount(event.target.value);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <table className="min-w-full text-sm text-gray-400">
        <thead className="bg-gray-800 text-xs uppercase font-medium">
          <tr>
            <th></th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              BTC
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              ETH
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              XLM
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              XRP
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              USDT
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              BNB
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              ADA
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              DOGE
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              LTC
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              SHIB
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              MATIC
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              FTM
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              PEPE
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              SOL
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              XDC
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              LUNC
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              SUI
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              HBAR
            </th>
            <th scope="col" className="px-6 py-3 text-left tracking-wider">
              LUNA
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800">
          {users.map((user: any, index: number) => {
            return (
              <tr className="bg-black bg-opacity-20 cursor-pointer" key={index}>
                <td className="pl-4">{index + 1}</td>
                <td className="flex px-6 py-4 whitespace-nowrap">
                  <span className="ml-2 font-medium">{user.email}</span>
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "BTC")}
                >
                  {user.balance.BTC}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "ETH")}
                >
                  {user.balance.ETH}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "XLM")}
                >
                  {user.balance.XLM}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "XRP")}
                >
                  {user.balance.XRP}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "USDT")}
                >
                  {user.balance.USDT}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "BNB")}
                >
                  {user.balance.BNB}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "ADA")}
                >
                  {user.balance.ADA}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "DOGE")}
                >
                  {user.balance.DOGE}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "LTC")}
                >
                  {user.balance.LTC}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "SHIB")}
                >
                  {user.balance.SHIB}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "MATIC")}
                >
                  {user.balance.MATIC}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "FTM")}
                >
                  {user.balance.FTM}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "PEPE")}
                >
                  {user.balance.PEPE}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "SOL")}
                >
                  {user.balance.SOL}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "XDC")}
                >
                  {user.balance.XDC}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "LUNC")}
                >
                  {user.balance.LUNC}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "SUI")}
                >
                  {user.balance.SUI}
                </td>

                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "HBAR")}
                >
                  {user.balance.HBAR}
                </td>

                <td
                  className="px-6 py-4 whitespace-nowrap w-full"
                  onClick={() => openModal(user.email, "LUNA")}
                >
                  {user.balance.LUNA}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          Update {updateDetails.coin} for {updateDetails.email}
        </div>

        <div className="py-2">
          <input
            type="number"
            className="w-full p-2 rounded bg-gray-200"
            onChange={getUpdateAmount}
          />
        </div>

        <div className="flex justify-between w-full">
          <button
            onClick={closeModal}
            className="p-2 rounded bg-red-500 text-white"
          >
            close
          </button>

          <button
            onClick={() => DoSubmitAmout()}
            className="p-2 rounded bg-green-500 text-white"
          >
            Update
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
}
