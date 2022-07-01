import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Postik from '..';
import styles from './PostikList.module.scss';

const PostikList = ({ posts, remove }) => {
  return (
    <div className={styles.postik}>
      {posts.map((post) => (
        <>
          <div className={styles.postik_list}>
            <Postik remove={remove} key={post.id} post={post} />
          </div>
        </>
      ))}
    </div>
  );
};

export default PostikList;
