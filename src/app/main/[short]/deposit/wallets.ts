const wallets = [

  {
    coin: "ETH",
    network: 'erc',
    wallet_address: "0xea4A27Ef5AB20712d976a502220431B395F6cdab",
    wallet_address_small: "0xea4A27Ef5AB20712d976a50 2220431B395F6cdab",
  },
  {
    coin: "BTC",
    network: 'btc',
    wallet_address: "bc1qf0d72pnee5jpk3srexm5s3xqxny8jvhxkem5mu",
    wallet_address_small: "bc1qf0d72pnee5jpk3srexm5s3x qxny8jvhxkem5mu",
  },
  {
    coin: "BNB",
    network: 'bsc',
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0cce9 C4df2902f6Ccff500",
  },
  {
    coin: "USDT",
    network: 'erc',
    wallet_address: "0xea4A27Ef5AB20712d976a502220431B395F6cdab",
    wallet_address_small: "0xea4A27Ef5AB20712d976a5 02220431B395F6cdab",
  },
  {
    coin: "USDT",
    network: 'trc',
    wallet_address: "TTrHdMtTygA7kBhojdtBHurtXhriwHSM6s",
    wallet_address_small: "TTrHdMtTygA7kBhojdt BHurtXhriwHSM6s",
  },
  {
    coin: "TRON",
    network: 'trc',
    wallet_address: "TTrHdMtTygA7kBhojdtBHurtXhriwHSM6s",
    wallet_address_small: "TTrHdMtTygA7kBhojdtBHurtXhriwHSM6s",
  },

];

export const getWallet = (opened: string, network: string) => {
  const coinIndex = wallets.findIndex((res) => {
    if (res.coin === opened && res.network === network) {
      return res.coin == opened;
    }

  });
  console.log(coinIndex, opened);
  if (coinIndex != -1) {
    return {
      big: wallets[coinIndex].wallet_address,
      small: wallets[coinIndex].wallet_address_small,
    };
  } else {
    return {
      big: wallets[2].wallet_address,
      small: wallets[2].wallet_address_small,
    };
  }
};
