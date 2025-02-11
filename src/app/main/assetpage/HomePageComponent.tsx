'use client'
import CoinCard from '@/components/coincard';
import Hero from '@/components/hero';
// import Loader from '@/components/loading';
import Logout from '@/components/logout';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiWallet } from 'react-icons/ci';
import { FaRegCopy } from 'react-icons/fa6';
import coinPrices, { CoinPrices } from '@/libs/prices';

const HomePage: React.FC<any> = ({ userInfoString }) => {
  const userInfo = JSON.parse(userInfoString)
  const [loading, isLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prices, setPrices] = useState<CoinPrices[]>([])

  useEffect(() => {
    const getPrices = async () => {
      try {
        const apiKey = ['39e7cd6f-038f-4557-bcfd-655c30c16238', 'abc3986d-ebb3-450e-bd11-165b57c42cc4', '1694df00-818e-467c-a926-4b84c1d66ae7', '82a9a09a-03e2-4f1a-937d-d023d77ebf40', '96b5b264-bf2b-4187-8ead-667aa375e8e6', '5B04AC9E-E22C-4666-9036-8CA5D880105A'][currentIndex];

        const baseUrl = 'https://rest.coinapi.io/v1/';
        const endpointPath = 'assets';
        const filter_symbol_id = 'BTC;ETH;USDT;TRX';
        const limit = 10
        const headers = {
          'X-CoinAPI-Key': apiKey
        };
        const responce = await axios.get(`${baseUrl}${endpointPath}?filter_asset_id=${filter_symbol_id}&limit=${limit}`, {
          headers
        })
        console.log(responce.data)
        setPrices(responce.data)
        isLoading(false)
      } catch (err: any) {
        if (currentIndex <= 4) {
          setCurrentIndex(currentIndex + 1)
        } else {
          isLoading(false)
        }

      }

    }
    getPrices()

    // setPrices(coinPrices)
    // isLoading(false)
  }, [
    currentIndex
  ])



  function extractPrice(coin: any) {
    let price = 0;
    if (prices.length > 0) {
      prices.map((e: { asset_id: any; price_usd: number }) => {
        if (e.asset_id === coin) {
          price = e.price_usd as number;
        }
      });
    }
    return price;
  }

  function getPriceAmounts(c: number, p: number) {
    if (c) {
      return c * p
    } else {
      return 0 * p
    }

  }

  const coinsThem = [
    {
      name: "Bitcoin",
      image: "/btc.png",
      short: "BTC",
      network: 'btc',
      price: extractPrice("BTC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.BTC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.BTC as number,
        extractPrice("BTC")
      ),
    },

    {
      name: "Ethereum",
      image: "/eth.png",
      short: "ETH",
      network: 'eth',
      price: extractPrice("ETH"),
      changePercent: 0.00089,
      amount: userInfo?.balance.ETH,
      priceAmount: getPriceAmounts(
        userInfo?.balance.ETH as number,
        extractPrice("ETH")
      ),
    },

    {
      name: "USDT (TRC20)",
      image: "/usdt.png",
      network: 'trc20',
      short: "USDT",
      price: extractPrice("USDT"),
      changePercent: 0.00089,
      amount: userInfo?.balance.USDTtrc20,
      priceAmount: getPriceAmounts(
        userInfo?.balance.USDTtrc20 as number,
        extractPrice("USDT")
      ),
    },

    {
      name: "TRON",
      image: "/trx.png",
      short: "TRX",
      network: 'trx',
      price: extractPrice("TRX"),
      changePercent: 0.00089,
      amount: userInfo?.balance.TRX,
      priceAmount: getPriceAmounts(
        userInfo?.balance.TRX as number,
        extractPrice("TRX")
      ),
    },


    {
      name: "USDT (ERC20)",
      image: "/usdt.png",
      network: 'erc20',
      short: "USDT",
      price: extractPrice("USDT"),
      changePercent: 0.00089,
      amount: userInfo?.balance.USDTerc20,
      priceAmount: getPriceAmounts(
        userInfo?.balance.USDTerc20 as number,
        extractPrice("USDT")
      ),
    },

  ];

  const Total =
    prices.length > 0
      ? coinsThem.reduce((acc, coins) => acc + coins.priceAmount, 0)
      : null;

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen" >
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div >
  }



  return <div className="md:px-20 pb-20 pt-5">
    <div className="w-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-md md:px-10 px-2 py-5 text-gray-100">
      <div className="flex justify-between font-bold text-sm">
        <div className="">
          Total Balance
        </div>

        <Link className="flex" href={'/main/connect-wallet'}>

          <CiWallet className='text-xl' />

          <div className="ml-1">Connect Wallet</div>
        </Link>
      </div>

      <div className="mt-5 grid md:grid-cols-2">
        <div className="">
          <div className="text-xs flex">Wallet ID <span className='font-bold ml-1'> 0x00000000</span> <FaRegCopy className='ml-1' /></div>
          <div className="text-let text-2xl font-bold">${Total !== null ? (
            (Math.round((Total + Number.EPSILON) * 100) / 100).toLocaleString()
          ) :
            // <Loader size={"30"} speed={"2"} color={"white"} />

            <div
              className="inline-block h-2 w-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div>

          }</div>
        </div>



      </div>
    </div>
    <div className="w-full mx-auto pb-5 pt-10 clear-both">
      {coinsThem.map((data, index) => {
        return (
          <div key={index} className='my-4 w-full rounded-lg bg-white shadow shadow-blue-200 md:p-5 py-5 px-2'>
            <CoinCard props={data} />
          </div>
        );
      })}
    </div>
  </div>
};

export default HomePage;
