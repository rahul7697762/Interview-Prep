import {ReactNode} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
  
      <div className="root-layout">
        <nav className='flex items-center gap-2'>
       <Link  href="/" className='flex items-center gap-2'>
        <Image src="/logo.svg" alt="logo" width={38} height={32} />
       </Link>
       </nav>
       {children}
      </div>
    
  )
}

export default RootLayout;