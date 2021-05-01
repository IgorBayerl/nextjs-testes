import Head from 'next/head'

// Components
import BaseLayout from '../components/BaseLayout';
import FormLogin from '../components/LoginPage/FormHome';
import HowItWorks from '../components/MainPage/HowItWorks';
import Informations from '../components/MainPage/Informations';
import Advantages from '../components/MainPage/Advantages';
import Customers from '../components/MainPage/Customers';
import Reviews from '../components/MainPage/Reviews';
import Questions from '../components/Questions';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoomy - Home</title>
        <meta name="description" content="INSERIR UMA DESCRIÇÃO AQUI" />
        <meta name="keywords" content="INSERIR AS KEYWORDS AQUI" />
      </Head>
      <BaseLayout>
        <FormLogin/>
      </BaseLayout>
    </div>
  )
}
