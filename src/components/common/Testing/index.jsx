import React from 'react';

const Testing = (props) => {
  return (
    <form>
      <div>
        <h5 className={styles.add_titles}>Название товара</h5>
        <input className={styles.add_nameTovar} type="text" />
        {props.post.title}
      </div>
    </form>
  );
};

export default Testing;
