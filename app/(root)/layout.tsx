import {ReactNode} from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="root-layout">
       <link rel="stylesheet" href="/" className=''/>
      </div>
    </div>
  )
}

export default RootLayout;