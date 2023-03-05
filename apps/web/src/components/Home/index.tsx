import MetaTags from '@components/Common/MetaTags';
import NewPost from '@components/Composer/Post/New';
import ExploreFeed from '@components/Explore/Feed';
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout';
import { Mixpanel } from '@lib/mixpanel';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useAppStore } from 'src/store/app';
import { PAGEVIEW } from 'src/tracking';

import EnableDispatcher from './EnableDispatcher';
import EnableMessages from './EnableMessages';
import FeedType from './FeedType';
import Highlights from './Highlights';
import RecommendedProfiles from './RecommendedProfiles';
import SetDefaultProfile from './SetDefaultProfile';
import SetProfile from './SetProfile';
import Timeline from './Timeline';

const Home: NextPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);
  const [feedType, setFeedType] = useState<'TIMELINE' | 'HIGHLIGHTS'>('TIMELINE');

  useEffect(() => {
    Mixpanel.track(PAGEVIEW, { page: 'home' });
  }, []);

  const [response, setResponse] = useState<any>();
  const [text, setText] = useState('');
  let puntajeMax;
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const responses = await axios.post('http://127.0.0.1:5000/predict', { data: text });
      setResponse(responses.data);
      puntajeMax = Math.max(response.adult, response.no_adult);
      console.log(puntajeMax, 'puntaje max');

      if (puntajeMax >= 9) {
        /*  mint(puntajeMax); */
      } else if (puntajeMax <= 8 && puntajeMax >= 5) {
        /* manda a los nodos  */
      } else {
        console.log('error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextareaChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <MetaTags />
      <div className="col-8 mx-auto">
        <form onSubmit={handleSubmit}>
          <textarea
            name=""
            id=""
            rows={10}
            onChange={handleTextareaChange}
            value={text}
            style={{ padding: '10px' }}
          />
          <button type="submit" style={{ backgroundColor: 'blue', padding: '10px' }}>
            Submit
          </button>
          if(text)
          {
            <span>
              {response && (
                <div>
                  <p>Literatura: {response.no_adult}</p>
                  <p>Biografias: {response.adult}</p>
                </div>
              )}
            </span>
          }
        </form>
      </div>
      {!currentProfile}
      <GridLayout>
        <GridItemEight className="space-y-5">
          {currentProfile ? (
            <>
              <NewPost />
              <FeedType feedType={feedType} setFeedType={setFeedType} />
              {feedType === 'TIMELINE' ? <Timeline /> : <Highlights />}
            </>
          ) : (
            <ExploreFeed />
          )}
        </GridItemEight>
        <GridItemFour>
          {currentProfile ? (
            <>
              <EnableDispatcher />
              <EnableMessages />
              <SetDefaultProfile />
              <SetProfile />
              <RecommendedProfiles />
            </>
          ) : null}
        </GridItemFour>
      </GridLayout>
    </>
  );
};

export default Home;
