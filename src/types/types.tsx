import { useState, useEffect } from 'react';
import axios from 'axios';

import TrickList from '../components/TrickList';

export interface ITrick {
  id: number;
  name: string;
  point: number;
  velocity: number;
  date_add: string;
  author_id: number;
  map_id: number;
}

export interface IResults {
  results: IPeople[];
}

export interface IPeople {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  gender: string;
}

const Tricks = () => {
  const [posts, setPosts] = useState<IPeople[]>([]);

  const fetchPost = async () => {
    const { data } = await axios.get<IResults>('https://swapi.dev/api/people/');
    setPosts(data.results);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {posts.map((post) => {
        return <TrickList key={post.name} {...post} />;
      })}
    </>
  );
};

export default Tricks;
