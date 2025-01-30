import Link from "next/link";
import Image from "next/image";
import { authOptions } from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import { getServerSession } from "next-auth";
import User from "@/model/user";
import axios from "axios";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiChevronLeft, BiMoneyWithdraw } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import BigIcon from "./bigicon";
import { GrGrow } from "react-icons/gr";
import outPrices from "@/libs/prices";
import history from "@/model/history";
import { IoIosSend } from "react-icons/io";
import { CiWallet } from "react-icons/ci";

export default async function Short({ params, searchParams }: { params: { short: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
  const Userresponce = (await getServerSession(authOptions)) as any;
  await dbConnect();

  let price: any;
  try {
    // const apiKey = "39e7cd6f-038f-4557-bcfd-655c30c16238";
    // const baseUrl = "https://rest.coinapi.io/v1/";
    // const endpointPath = "assets";
    // const limit = 1;
    // const headers = {
    //   "X-CoinAPI-Key": apiKey,
    // };
    // const responce = await axios.get(
    //   `${baseUrl}${endpointPath}?filter_asset_id=${params.short}&limit=${limit}`,
    //   {
    //     headers,
    //   }
    // );
    // price = responce.data[0].price_usd;


    let prices = outPrices

    let priceIndex = prices.findIndex(
      (res: { asset_id: string }) => res.asset_id === params.short
    );
    price = prices[priceIndex].price_usd;
  } catch (err: any) {
    console.log(err);
  }

  const userInfo = await User.findOne({
    email: Userresponce?.user?.email,
  });
  const dbhistories = await history.find({
    user: Userresponce?.user?.id,
  });
  let histories: any[] = [];

  dbhistories.map((res) => {
    if (res.coin === params.short) {
      histories.push(res);
    }
  });

  return (
    <div className="bg-cyan-100 w-full h-full">
      <div className="flex-col justify-center items-center pb-32">
        <div className="h-32 w-full">
          <Link className="text-gray-700 flex pt-4 pl-2" href={"/main/assetpage"}>
            <BiChevronLeft />{" "}
            <div className="text-xs text-gray-700">
              {params.short}

              <div className="text-gray-700">$ {Math.round((price + Number.EPSILON) * 100) / 100}</div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto  rounded-full flex justify-center items-center">
              <Image
                src={`/${params.short.toLocaleLowerCase()}.png`}
                alt={`${params.short} Icon`}
                width={90}
                height={90}
                className="rounded-full"
              />
            </div>
            <div className="mt-1 text-gray-700">
              {userInfo.balance[`${params.short}`]} {params.short}({searchParams['network']})
            </div>
            <div className="mt-1 text-gray-700">
              $
              {Math.floor(
                (price * userInfo.balance[`${params.short}`] + Number.EPSILON) *
                100
              ) / 100}
            </div>
          </div>
          <div className="md:w-1/4 w-4/5 mx-auto flex justify-between mt-5">
            <Link
              href={`${params.short}/withdraw `}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-xl  flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 shadow-md shadow-blue-500">
                <IoIosSend className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Send {params.short}
              </p>
            </Link>
            <Link
              href={`${params.short}/deposit?network=${searchParams['network']}`}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-md shadow-blue-500 flex items-center justify-center">

                <BiMoneyWithdraw className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Recieve {params.short}
              </p>
            </Link>
            <a
              href={"https://www.moonpay.com/"}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-md shadow-blue-500 flex items-center justify-center">

                <BsMoonStars className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">Buy</p>
            </a>

            <Link
              href={`/main/connect-wallet`}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-green-600 shadow-md shadow-blue-500 flex items-center justify-center">

                <CiWallet className="text-[12px] md:text-base text-white" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Connect Wallet
              </p>
            </Link>
          </div>
        </div>
      </div>

      {histories.length > 0 ? (
        <>
          <div className="pt-4 text-center font-thin md:text-4xl text-2xl">
            Transaction Histroy
          </div>

          <div className="flex justify-center md:w-2/3 w-full mt-5 mx-auto px-2">
            <table className="min-w-full text-sm text-gray-400 rounded">
              <thead className="bg-gray-800 text-xs uppercase font-medium">
                <tr>
                  <th></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Coin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {histories.map((res, index) => {
                  return (
                    <tr
                      className={`${res.direction === "in" ? "bg-green-800" : "bg-red-800"
                        }`}
                      key={index}
                    >
                      <td className="pl-4">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.coin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {res.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(res.createdOn).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <BigIcon className="mx-auto mt-4" />
      )}
    </div>
  );
}
