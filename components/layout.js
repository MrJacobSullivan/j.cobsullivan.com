import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main className='flex-grow w-full py-5'>{children}</main>
      <Footer />
    </Container>
  )
}

export const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center w-screen'>
      <div className='flex flex-col items-center w-[65%] min-h-screen'>{children}</div>
    </div>
  )
}
