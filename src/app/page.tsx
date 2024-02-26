import Sertification from './components/sertification/Sertification';
import Questions from '../app/components/questions/Questions';
import Feedback from '../app/components/feedback/Feedback';
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
      <div>
        <Sertification />
      </div>
      <div className="bg-lime-100">
        <h1>Customer feedback : </h1>
        <Feedback />
      </div>
    </main>
  );
}
