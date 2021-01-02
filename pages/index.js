import Layout from '../components/Layout';
import Image from 'next/image';

const Index = () => (
  <>
    <Layout title='Home'>
      <p>Welcome to the Home page!</p>
      <Image src='/me.png' alt='me' width='164' height='84' />
    </Layout>
  </>
);

export default Index;
