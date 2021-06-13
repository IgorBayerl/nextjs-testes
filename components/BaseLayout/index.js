import BackgroundCanvas from './BackgroundCanvas';
import ForgroundContent from './ForgroundContent';
import Navbar from './NavBar';

export default function BaseLayout({children, content, bg}) {
  return (
    <>
      
      <BackgroundCanvas>
      {bg}
      </BackgroundCanvas >
      <ForgroundContent>
        {content}
      </ForgroundContent>

      <Navbar/>
    </>
  )
}



