import Image from 'next/image';
import Questions from '../app/components/questions/Questions';
export default function Home() {
  return (
    <main className="">
      <div className="container">
        <img
          src="https://medeja.com.ua/wp-content/uploads/fyz2.jpg"
          alt="woman getting a massage"
          width={'100%'}
        />
      </div>
      <div>
        <Questions />
      </div>
    </main>
  );
}
