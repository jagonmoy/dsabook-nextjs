import '@styles/globals.css'
import '@components/Nav'
import Nav from '@components/Nav'

interface Props {
    children: React.ReactNode
}

export const metadata = {
    title: "DSABook",
    description: 'DSABook Application with NextJs'
}


const RootLayout : React.FC<Props> = ({children}) => {
  return (
    <html lang ='en'>
        <head>
        <link rel="icon" href="/assets/images/dsabook.svg" />
        </head>
        <body>
            <div className = 'main' >
                <div className = 'gradient' />
            </div>
            <main className ="app" >
                <Nav/>
                {children}
            </main>
        </body>

    </html>
  );
}

export default RootLayout;
