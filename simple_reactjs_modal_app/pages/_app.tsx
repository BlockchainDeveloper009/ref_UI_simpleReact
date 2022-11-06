import '../styles/globals.css'
import home from '../styles/Home.module.css'

import type { AppProps } from 'next/app'
import Link from 'next/link'
const logo = './BondBank-logos';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className="App">
    <div className="container">
      <a className="footer-text">BondBank Dapp</a>
     
      <div>
      <Link href='/' className="link-nav">Home</Link>
      
      <Link href = ''>        </Link>
      
      <Link href='/About' className="link-nav">About</Link>
      </div>
      
      <Component {...pageProps} />
    </div>
  </div>
  )
  // (<>
  //   This is Sample NextJs APp!!!
  //<div className={home.logo}><Image src={logo} alt=""></Image></div>
  // </>
  // );
}
