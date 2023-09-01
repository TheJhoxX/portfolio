import '../styles/globals.css'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";
import   MiNavbar  from "./components/MiNavbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio TheJhoxX',
  description: 'Creado mediante: NextJS y NextUI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='dark'>
      <body className={inter.className}>
        <Providers>
          <MiNavbar>
          </MiNavbar>
          {children}  
        </Providers>
      </body>
    </html>
  )
}
