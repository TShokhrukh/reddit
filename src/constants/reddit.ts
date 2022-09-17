import { REDDIT_APP_ID } from './env';

export const REDDIT_URL = 'https://www.reddit.com';
export const REDDIT_API_URL = 'https://www.reddit.com/';

// export const REDDIT_DURATION: 'temporary'|'permanent' = 'permanent';

// used reddit scopes
export const REDDIT_SCOPES = [
  'identity', 
  'edit', 
  'flair', 
  'history', 
  'modconfig',
  'modflair',
  'modlog',
  'modposts',
  'modwiki',
  'mysubreddits',
  'privatemessages',
  'read',
  'report',
  'save',
  'submit',
  'subscribe',
  'vote',
  'wikiedit',
  'wikiread'
];

export const REDDIT_STATE = 'random_string';
export const REDDIT_AUTH_REDIRECT_URI = 'http://localhost:3000/auth';

export const REDDIT_AUTH_URL = `${REDDIT_URL}/api/v1/authorize?client_id=${REDDIT_APP_ID}&response_type=code&state=${REDDIT_STATE}&redirect_uri=${REDDIT_AUTH_REDIRECT_URI}&scope=${REDDIT_SCOPES.join(' ')}`;