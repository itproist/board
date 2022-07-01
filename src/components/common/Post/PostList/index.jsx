import React from 'react';
import Card from '../../Card';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './PostList.module.scss';

const PostList = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
