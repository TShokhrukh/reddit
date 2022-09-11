import ky from 'ky';

export const reddit = ky.create({
  prefixUrl: 'https://www.reddit.com/api/v1',
  headers: {
    Authorization: 'bearer '
  }
});
