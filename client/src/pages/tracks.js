import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  } 
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `ERROR! ${error.message}`;

  return <Layout grid> {JSON.stringify(data)} </Layout>;
};

export default Tracks;
