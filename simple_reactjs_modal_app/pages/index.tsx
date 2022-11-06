import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {useEffect , useState} from 'react';
import { ethers } from 'ethers';
import type { GetStaticProps, NextPage} from "next";
import { Character,GetCharacterResults } from '../types';
import Link from "next/link";
import buyBond from "./buyBond";
import { useRouter } from 'next/router'

let web3Modal: Web3Modal;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL},
    },
  },
};

const Home: NextPage<{characters: Character[]}> = ({characters}) => {
  
  const [walletAddress, setWalletAddress] = useState<any>(null);
  
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState<any>(null);
  const [account, setAccount] = useState<any>();
  const [network, setNetwork] = useState<any>();
  useEffect(()=>{
    if (typeof window.ethereum !== "undefined"){
      console.log('no metamaks found!')
      web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,// required
    
      });
    }
  });
  async function connect() {
    try{
      const web3ModalProvider = await web3Modal.connect();
       const library = new ethers.providers.Web3Provider((web3ModalProvider as any));
       setProvider(web3ModalProvider);
       setLibrary(library);
      
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    setProvider(provider);
    setLibrary(library);
    if (accounts) {
      setAccount(accounts[0]);
      setWalletAddress(accounts[0]);
      console.log(`account found : ${accounts[0]}`);
      return greetUser();
    } else{
      console.log('no accounts found');
    }
    setNetwork(network);
      
      // setWalletAddress(await signer.getAddress());
    } catch(e){
      console.log(`connect()-->${e}`);
    }
  }
  //
  let adminArray: string [] = ["0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5",""];
  let userArray: string[] = ["0xf821142CC270dAb63767cFAae15dC36D1b043348",""];
  const totalBonds = 45;
  const totalLiquidity = 10000;
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connect}
    >
      login
    </button>
  );
  const renderAdminRegistrationPage = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connect}
    >
      Register as Bond Creator (Admin):
    </button>
  );
  const renderInvestorRegistrationPage = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connect}
    >
      Register as Investor
    </button>
  );
  function usegreetUser() {
    const router = useRouter()
    if(roleType =="bondBuyer")
    {
      console.log(roleType);
      router.push('/buyBond')
    } 
    if(roleType =="bondCreator")
    {
      console.log(roleType);
      router.push('/createBond')
    } 
  }
  const createBondFlow = () => {

  }
  const viewAllBonds = () => {
    return
  }
  // const handleClick = (e, path) => {
  //   if (path === "/about") {
  //     console.log("I clicked on the About Page");
  //   }
  //   if (path === "/posts") {
  //     console.log("I clicked on the Posts Page");
  //   }
  // };

  const bondBankCreatorFlow = () => {
    if(walletAddress!=null)
    {
      return (
      <div>
         <div>
            <button className="cta-button connect-wallet-button" onClick={() => createBondFlow()}>Create Bonds</button>
          </div>
          <br></br>
          <div>
            <button className="cta-button connect-wallet-button" onClick={() => connect()}>View All Bonds</button>
          </div>
          

      </div>)
    }
  }
  const bondBankBuyerFlow = () => {
    if(walletAddress!=null)
    {
      return (
      <div>
         <div>
            <button className="cta-button connect-wallet-button" onClick={() => connect()}>Create Bonds</button>
          </div>
          <br></br>
          <div>
            <button className="cta-button connect-wallet-button" onClick={() => connect()}>View All Bonds</button>
          </div>
          

      </div>)
    }
  }
  const [ roleType, setRoleType] = useState<any>();
  const addRadioButton = () => {
    return (
      <div>
        <input name="roleType" type="radio" value='bondBuyer' onChange={e=>setRoleType(e.target.value)}/>
        <label>BondBuyer</label>
        <input name="roleType" type="radio" value='bondCreator' onChange={e=>setRoleType(e.target.value)}></input>
        <label>BondCreator</label>
        <input name="roleType" type="radio" value='viewMyBonds' onChange={e=>setRoleType(e.target.value)}></input>
        <label>viewMyBonds</label>
      </div>
    )
  }
  return (
    <div className="App">
        <div className="container">
          <div className="header-container">
            <Head>
              BondBank
            </Head>
            <div>
            {renderInvestorRegistrationPage()}
            
            </div>
            <br/>
            <div>
            {renderAdminRegistrationPage()}
            </div>
            
            <div>
            {addRadioButton()}

            </div>
            <div>
             {!walletAddress && renderNotConnectedContainer()}
            </div>
            <br></br>
            <div>
              <button onClick={usegreetUser()}>Login</button>
            </div>
            {/* <Link href="/">
            <a onClick={(e) => handleClick(e, "/about")}>About</a>
            </Link>{" "} */}
           
            {/* <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/> */}
          </div>
          {/* <div className="header-container">
            {characters.map((
            character) => {
              return <div key={character.id}>{character.name}
              <Image
              src={character.image}
              alt={character.name}
              width="200"
              height="200"></Image>
              </div>
            })}
          </div> */}
          <br/>
           <div>
              <div><label>Summary:</label></div>
              <br></br>
              <div><label>Total Available Bonds:</label> {totalBonds}</div>
              
              <br></br>
              <div><label>Total Value: {totalLiquidity}</label></div>
              
            </div>
          <div className="footer-container">
          
          </div>
              
      </div>
    </div>
  )
}
export default Home;
export const getStaticProps: GetStaticProps = async (context) => {
const res = await fetch("https://rickandmortyapi.com/api/character")
const {results}: GetCharacterResults = await res.json();
return {
  props: {
    characters: results,
  },
};
}
