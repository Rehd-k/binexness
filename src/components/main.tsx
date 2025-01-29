'use client'

import Link from 'next/link';
import '../../public/css/main.css';
import Image from 'next/image';


export default function MainIndex() {


    return <body id="body">
        {/* Start Preloader ==================================== */}
        <div id="preloader">
            <div className="preloader">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
        </div>





        {/*
        Fixed Navigation
   ==================================== */}
        {/* <section className="top-header"> */}
        {/*     <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    </div>
                </div>
            </div> */}
        {/* </section> */}
        <section className="header  navigation">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.php.html">
                                <img src="static/landing/images/logo.png" alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="tf-ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="https://stavehub.com/index">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="index.html#about" role="button">
                                            About us
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="index.html#services">
                                            Our services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="app/signup.html">Sign In</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="app.1.html">Log In</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Welcome Slider ==================================== --> */}
        <section className="hero-area">
            <div className="container">
                <div className="row" id="heading">
                    <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
                        <div className="video-player">
                            {/* <iframe width="100%" src="https://www.youtube.com/embed/W6NQd2CZd8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"></iframe> */}
                            {/* <img src="static/landing/images/slider/pn.webp" width="90%" /> */}
                            <div>
                                <img src="static/landing/images/slider/phone2.png" width="100%" style={{ padding: '0px', margin: '-78px', marginLeft: '15px' }} />
                                <img src="static/landing/images/slider/phone1.png" width="100%" style={{ padding: '0px', margin: '-272px', marginLeft: '11px', marginTop: '-552px' }} />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="block">
                            <h3>Welcome to stavehub Wallet!</h3>
                            <p>Securely manage and store your cryptocurrencies with our state-of-the-art digital wallet. Our wallet is designed to provide you with a convenient and user-friendly experience while prioritizing the highest level of security for your digital assets.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a data-scroll href="app.1.html" className="btn btn-main">Explore Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div style={{ height: '62px', overflow: 'hidden', textAlign: 'right', lineHeight: '14px', blockSize: '62px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', padding: '0px', margin: '0px', width: '100%' }}>
            <div style={{ height: "40px", padding: "0px", margin: "0px", width: "100%" }}>
                <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no" width="100%" height="36px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder="0" style={{ border: "0", margin: "0", padding: "0" }}></iframe>
            </div>
        </div>

        <section className="counter section-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-3">
                        <div className="counters-item">
                            <span>$50B+</span>
                            <p>Bitcoin Served</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="counters-item">
                            <span>10M+</span>
                            <p>Server Build</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="counters-item">
                            <span>68</span>
                            <p>Countries Supported</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="counters-item kill-border">
                            <span>10B</span>
                            <p>Active Trades</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 
        <!-- Start About Section ==================================== --> */}
        <section className="about-2 section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            <h2>A New Kind of Digital Currency to change the world what we think</h2>
                            <p>stavehub supports a wide range of popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and more. With our wallet, you can conveniently manage all your digital assets in one place.</p>

                            <p>We believe empowering individuals with the necessary tools to control their own private keys and transaction information will lead to better financial security everywhere, for everyone.</p>
                            <a href="app.1.html" className="btn btn-main">Explore</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            {/* <!-- column start --> */}
                            <div style={{ height: "333px", overflow: "hidden", textAlign: "right", lineHeight: "16px", fontSize: "12px", fontFeatureSettings: "normal", textSizeAdjust: "100%", padding: "0px", margin: "0px", width: "100%" }}>
                                <div style={{ height: "313px", padding: "0px", margin: "0px", width: "100%" }}>
                                    <img src="static/landing/images/slider/pn.webp" width="90%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End section --> */}

        <section className="about-2 section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            {/* <!-- column start --> */}
                            <div style={{ height: "333px", overflow: "hidden", lineHeight: "20px", fontSize: "10px", fontFeatureSettings: "normal", textSizeAdjust: "100%", padding: "0px", margin: "0px", width: "100%" }}>
                                <div style={{ height: "313px", padding: "0px", margin: "0px", width: "100%" }}>
                                    <img src="static/landing/images/slider/online-wallet.svg" width="80%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            <h2>Online Crypto Wallet</h2>
                            <p>Online Wallet is a wallet that you can access via the internet, typically through your browser. It is commonly known as a web wallet. Hot wallets are also available, but they are different types available. A web wallet is not always a hot wallet, but every hot wallet is a web wallet. Storing your Bitcoin in an online wallet is almost as secure as storing it in a cold wallet.</p>

                            <p>Web wallets take various forms, but the main component is a clean interface that has nothing to do with the interface. Aside from that, you can exchange your currencies safely and quickly.</p>
                            <a href="app.1.html" className="btn btn-main">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End section -->


        <!--Start Call To Action==================================== --> */}
        <section className="call-to-action section-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Instant Exchange with Cashback</h2>
                        <p>Swap 60+ crypto pairs anonymously and receive a cash back for exchange!</p>
                        <a href="app.1.html" className="btn btn-main">Explore Now</a>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Start About Section ==================================== --> */}
        <section className="about-2 section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            <h2>Securing digital assets doesn't have to be difficult</h2>
                            <p><strong>stavehub.com</strong> Managing multiple wallets for multiple cryptocurrency assets is hard. </p>
                            <p>Add in complicated backups like sensitive seed phrases and private keys, and you’ve got serious usability challenges. </p>
                            <p>Not at Edge. Hold all of your assets in one place with the Edge app — all you need is a username and password.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            {/* <!-- column start --> */}
                            {/* <!-- <img src="static/landing/images/billionare.jpg" width="100%" /> --> */}
                            <div style={{height:"333px", overflow:"hidden", textAlign: "right", lineHeight:"14px", fontSize: "12px", fontFeatureSettings: "normal", textSizeAdjust: "100%", padding: "0px", margin: "0px", width: "100%"}}>
                                <div style={{height:"313px", padding:"0px", margin:"0px", width: "100%"}}>
                                    <img src="static/landing/images/slider/secured.svg" width="90%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        <section className="services section-xs" id="services">
            <div className="container">
                <div className="row">
                  
                    <div className="col-md-4 col-sm-6 col-xs-12" >
                        <div className="service-block color-bg text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/bitcoin-network.png" alt="" />
                            </div>
                            <h3>Multi-Asset Support</h3>
                            <p>Connectivity across payment networks</p>
                        </div>
                    </div>
                  
                    <div className="col-md-4 col-sm-6 col-xs-12" >
                        <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/bitcoin-safety-shield.png" alt="" />
                            </div>
                            <h3>Exchange between assets</h3>
                            <p>Seamlessly trade between digital currencies/assets on the go.</p>
                        </div>
                    </div>
                 
                    <div className="col-md-4 col-sm-6 col-xs-12 mx-auto"  >
                        <div className="service-block color-bg text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/bitcoin-exchange.png" alt="" />
                            </div>
                            <h3>In-app buy, sell and more</h3>
                            <p>Exchange your fiat money for the financial assets of the future.</p>
                        </div>
                    </div>
                </div> 		
            </div>   	



            <div className="container">
                <div className="row">
              
                    <div className="col-md-4 col-sm-6 col-xs-12" >
                        <div className="service-block color-bg text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/icon-1.png" alt="" width="80px" />
                                {/* <!-- <h3 className="fa fa-lock"></h3> --> */}
                            </div>
                            <h3>Superb security</h3>
                            <p>Your private keys never leave your device. Strong wallet encryption and cryptography guarantee that your funds will remain safe under your ultimate control.</p>
                        </div>
                    </div>
               
                    <div className="col-md-4 col-sm-6 col-xs-12" >
                        <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/neural.png" alt="" width="80px" />
                            </div>
                            <h3>Multi-chain</h3>
                            <p>Native support for bitcoin and most major altcoins and tokens. Continuous integration of key altcoins and tokens. Highest levels of diligence are applied to coin selection and addition.</p>
                        </div>
                    </div>
                   
                    <div className="col-md-4 col-sm-6 col-xs-12 mx-auto"  >
                        <div className="service-block color-bg text-center">
                            <div className="service-icon text-center">
                                <img src="static/landing/images/icons/earth.png" alt="" width="80px" />
                            </div>
                            <h3>Wallet Connect</h3>
                            <p>Easily and securely access DApps on the big-screen with the use of WalletConnect - link your Coinomi wallet with other apps which support this feature.</p>
                        </div>
                    </div>
                </div> 
            </div>    
        </section>





        <section className="testimonial section" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      
                        <div className="testimonial-slider">

                            <div className="item">
                                <div className="block">
                                    <div className="media client-meta">
                                        <div className="media-body">
                                            <h4 className="mt-0">Available everywhere</h4>
                                        </div>
                                    </div>
                                    <div className="client-details">
                                        <p>Buy Bitcoin through web wallet all around the globe using the local currency of your bank account.</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="item">
                                <div className="block">
                                    <div className="media client-meta">
                                        <div className="media-body">
                                            <h4 className="mt-0">Desktop/Mobile versions</h4>
                                        </div>
                                    </div>
                                    <div className="client-details">
                                        <p>Use an online wallet, desktop wallet or download our mobile wallet app. Also, iOS and Android apps are available to manage your wallet on your phone.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="block">
                                    <div className="media client-meta">
                                        <div className="media-body">
                                            <h4 className="mt-0">High Customer Trust level</h4>
                                        </div>
                                    </div>
                                    <div className="client-details">
                                        <p>stavehub has been working since 2017 to gain customers' trust and recognition. Excellent rate 4.7 on TrustPilot, 4.8 on Investopedia.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="block">
                                    <div className="media client-meta">
                                        <div className="media-body">
                                            <h4 className="mt-0">Cold staking</h4>
                                        </div>
                                    </div>
                                    <div className="client-details">
                                        <p>Let your crypto work for you. Cold stake supported assets with a single click and earn rewards even when offline.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="block">
                                    <div className="media client-meta">
                                        <div className="media-body">
                                            <h4 className="mt-0">Perfectly in-sync</h4>
                                        </div>
                                    </div>
                                    <div className="client-details">
                                        <p>Perfect harmony. Restore your mobile wallet and see all your transactions on your computer as well.</p>
                                    </div>
                                </div>
                            </div>


                          
                        </div>
                    </div> 		
                </div>	    
            </div>       
        </section>
  
        <section className="about-2 section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                        
                            <div className="tradingview-widget-container">
                                <div className="tradingview-widget-container__widget"></div>
                                <img src="static/landing/images/slider/pros.svg" width="90%" />
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                         
                            <div className="pb-5">
                                <h2 className="title title-regular">stavehub vs other guys</h2>
                                {/* <!-- <p>What’s next? We want digital currencies to be so easy to use that even your Grandma would be able to use them. Alleron Investment will enable you to signup and access your Alleron Investment from any device and transact as easily as you can with PayPal, but using cryptocurrency. Stay tuned…</p> --> */}
                            </div>
                            <ul className="list list-check list-check-s3 list-check-s3-sm">
                                <li>
                                    <h4 className="title title-md"><i className="fas fa-check-circle text-main"></i> One app for all of your assets</h4>

                                    <h4 className="title title-md"><i className="fas fa-check-circle"></i> Backup with just username and password</h4>

                                    <h4 className="title title-md"><i className="fas fa-check-circle"></i> Easy, secure access with PIN or Transaction Pin</h4>

                                    <h4 className="title title-md"><i className="fas fa-check-circle"></i> Seamlessly login using multiple devices</h4>
                                </li>
                                <li className="text-center">
                                    <a data-scroll="" href="app/signup.html" className="btn btn-main">Sign up</a>
                                    <a data-scroll="" href="app.1.html" className="btn btn-main">Explore Us</a>
                                </li>
                            </ul>
                            {/* <!-- <ul className="pb-5">
                                <li><a data-scroll="" href="#services" className="btn btn-main">Explore Us</a></li>
                                <li><a data-scroll="" href="#services" className="btn btn-main">Explore Us</a></li>
                            </ul> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="blog section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title text-center">
                            <h2>Latest Crypto News</h2>
                            <span className="border"></span>
                            <p>Latest tech and crypto news from around the globe</p>
                        </div>
                    </div>
                </div>

                <center>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <script src="https://cointelegraph.com/news-widget" data-ct-widget-limit="25" data-ct-widget-theme="light" data-ct-widget-images="true" data-ct-widget-language="en"></script>
                        </div>
                    </div>
                </center>

            </div>
        </section> 

        <section className="about-2 section bg-gray" id="about">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title text-center">
                            <h2>What We Offer You</h2>
                            <span className="border"></span>
                            <p>We offer endless opportunities for wealth creation.</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="offer-box">
                            <div className="mb-4">
                                <img src="static/landing/images/icons/icon-1.png" width="100px" />
                            </div>
                            <div className="offer-div">
                                <h3>One-Touch 2-Factor Authentication</h3><br />
                                <p>Easily set up 2-Factor Authentication (2FA) with just a touch of a button. 2FA increases security by only allowing logins from previously logged in devices. Even if a malicious actor gets access to your username and password, they won't be able to log-in to your 2FA enabled account.</p><br />
                                    <h3>Password Recovery</h3><br />
                                    <p>Many of us forget passwords and this can be unforgiving to holders of digital assets. We have created password recovery with this in mind. Users can set up password recovery for their Edge Wallet with just two recovery questions and an email.</p>
                                    <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="offer-box">
                            <div className="mr-4 mb-4">
                                <img src="static/landing/images/icons/icon-2.png" width="100px" />
                            </div>
                            <div className="offer-div">
                                <h3>Risk's management</h3><br />
                                <p>decisions are based on thorough analysis, Taking into account trends, news, and market paralysis. Rick's team respects his leadership and vast expertise, As we guides them through challenges and keeps them at ease.</p>
                                <p>With our calm demeanor and calculated approach, Rick's management style is one that all should approach.</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="offer-box">
                            <div className="mb-4">
                                <img src="static/landing/images/icons/icon-1.png" width="100px" />
                            </div>
                            <div className="offer-div">
                                <h3>Empowerment</h3><br />
                                <p>Freeing people from the need to rely either solely on themselves or a 3rd party–independence, but with support when you need it.</p><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="offer-box">
                            <div className="mr-4 mb-4">
                                <img src="static/landing/images/icons/icon-2.png" width="100px" />
                            </div>
                            <div className="offer-div">
                                <h3>Community</h3><br />
                                <p>Open source, open door, open mind. Collaboration helps build better products and a better ecosystem.</p><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-2 section call-to-action" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                            <h2>Our Cold wallet</h2>
                            <p>The stavehub platform provides a fully client-side account that creates, manages, and encrypts private keys, public keys, and application data on the user’s client device and uses server side assistance for backup and synchronization of encrypted data and for authenticating users. stavehub platform users retain full control of their
                                private keys at all times with neither stavehub nor third parties having access to private keys or transaction data. The
                                platform has optional blockchain “plugins” that provide functionality to transact on various blockchains such as
                                Bitcoin, Litecoin, Bitcoin Cash, Ethereum, and ERC20 Ethereum tokens.
                            </p>
                            <p>stavehub Wallet does not provide any virtual asset services or any financial services, nor does provide any advisory, mediation, brokerage or agent services. Virtual asset services are provided to stavehub Wallet’ customers by third party service providers, which activities and services are beyond stavehub’ control. We urge all stavehub Wallet’ customers to familiarize themselves with the terms and conditions of third-party virtual asset service providers before engagement into a business relationship.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                        <div className="align-self-center">
                          
                            <img src="static/landing/images/team.jpg" width="100%" className="mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
        <section className="service-2 section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title text-center">
                            <h2>Get Started Now</h2>
                            <span className="border"></span>
                            <p>Can’t wait to try stavehub.com? You don’t have to! Getting started is a matter of minutes.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                            <span className="count">1.</span>
                            <h4>Sign Up</h4>
                            <p>To get started, quickly sign up with us. We’ll guide you through the process.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                            <span className="count">2.</span>
                            <h4>Try your new wallet</h4>
                            <p>Buy crypto through our partners or transfer in funds.</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="service-item text-center">
                            <span className="count">3.</span>
                            <h4>Explore the ecosystem</h4>
                            <p>See how easy it is to trade, pay and invest with alleroninvestment.com!</p>
                        </div>
                    </div>
                </div>  
                <div className="mb-5 mt-5 text-center"><a data-scroll href="app/signup.html" className="btn btn-lg btn-main">Sign up</a></div><br />
            </div>  
        </section>  


        <section>
            <div className="container">
                <div className="row">
                    <div className="image-slider">
                        <img alt="" src="static/landing/images/partners/p1.png" />
                        <img alt="" src="static/landing/images/partners/p2.png" />
                        <img alt="" src="static/landing/images/partners/p3.png" />
                        <img alt="" src="static/landing/images/partners/p4.png" />
                        <img alt="" src="static/landing/images/partners/p5.png" />
                        <img alt="" src="static/landing/images/partners/p6.png" />
                        <img alt="" src="static/landing/images/partners/p7.png" />
                        <img alt="" src="static/landing/images/partners/p8.png" />
                    </div>
                </div>
            </div>
        </section>




        <footer id="footer" className="bg-one">
            <div className="top-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-6 col-lg-4">
                            <h3>Company</h3>
                            <p>stavehub Wallet does not provide any virtual asset services or any financial services, nor does provide any advisory, mediation, brokerage or agent services. Virtual asset services are provided to stavehub Wallet’ customers by third party service providers, which activities and services are beyond stavehub’ control. We urge all stavehub Wallet’ customers to familiarize themselves with the terms and conditions of third-party virtual asset service providers before engagement into a business relationship.</p>
                        </div>
                      

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>Company</h3>
                            <p>Headquarters in:<br />Φλωρίνης, 7, GREG TOWER, Floor 2 1065, Λευκωσία, Κύπρος Cyprus</p>
                            <p>Email:<br />support@stavehub.com</p>
                            <p>Director:<br />ΣΤΑΜΑΤΗΣ ΣΚΙΑΝΗΣ</p>
                            <p>Secretary:<br />ΕΛΕΝΑ ΦΩΤΙΟΥ</p>
                        </div>
                        

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>NAVIGATION</h3>
                            <ul>
                                <li><a href="index.php.html">Home</a></li>
                                <li><a href="index.html#about">About us</a></li>
                                <li><a href="index.html#services">services</a></li>
                                {/* <!-- <li><a href="tac/index.html">Terms And Conditions</a></li>
                                <li><a href="contact/index.html">Contact us</a></li> --> */}
                            </ul>
                        </div>
                    

                        <div className="col-sm-3 col-md-3 col-lg-3">
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h5>&copy;2018 - 2025  stavehub.com.<br />All rights reserved.</h5>
            </div>
        </footer> 
    </body>


}