import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Your Personal AI Diary
      <br className='max-md:hidden' />
      <span className='sunset_gradient text-center'>A Journey Within</span>
    </h1>
    <p className='desc text-center'>
    Discover a diary like no other, enriched by the brilliance of AI, as it unravels the mysteries of your emotions, provides personalized insights, and nurtures your mental well-being.
    </p>

    <Feed />
  </section>
);

export default Home;
