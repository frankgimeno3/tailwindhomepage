import Image from 'next/image'
import { Inter } from 'next/font/google'
import FirstVideoElement from '../components/homepage/FirstVideoElement'
import QuienesSomos from '../components/homepage/QuienesSomos'
import OurValues from '../components/homepage/OurValues'
import OurTeam from '../components/homepage/OurTeam'
import WhatWeDo from '../components/homepage/WhatWeDo'
import Clients from '../components/homepage/Clients'
import Discover from '../components/homepage/Discover'
import BePartOfPersian from '../components/homepage/BePartOfPersian'
import Contact from '../components/homepage/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <FirstVideoElement />
      <QuienesSomos />
      <OurValues />
      <OurTeam />
      <WhatWeDo/>
      <Clients/>
      <Discover />
      <BePartOfPersian />
      <Contact />

    </main>
  )
}
