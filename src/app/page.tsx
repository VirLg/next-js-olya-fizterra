import Image from 'next/image';
import Questions from '../app/components/questions/Questions';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main Page
      <div className="container">
        <img src="https://medeja.com.ua/wp-content/uploads/fyz2.jpg" alt="" />
      </div>
      <div>
        <Questions />
      </div>
    </main>
  );
}
