import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Ad/Button';
import InputSearch from '../../common/Ad/Input';
import Menu from '../../common/Ad/Menu';
import Buttons from '../../common/Post/PostForm/Button';
import PostForm from '../../common/Post/PostForm';
import PostItem from '../../common/Post/PostItem';
import PostList from '../../common/Post/PostList';
import Postik from '../../common/Postik';
import PostikList from '../../common/Postik/PostikList';
import styles from './AdPages.module.scss';
import left from '../../../assets/img/left.png';
import right from '../../../assets/img/right.png';

const AdPages = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: 'Техника',
      title: 'Стиральная машина Bosch',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 2,
      category: 'Одежда',
      title: 'Шапочка',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 3,
      category: 'Одежда',
      title: 'Толстовка',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 4,
      category: 'Спорт',
      title: 'Велосипед',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 5,
      category: 'Техника',
      title: 'Наушники',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 6,
      category: 'Техника',
      title: 'Кофемашина',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 7,
      category: 'Техника',
      title: 'Сумка женская',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 8,
      category: 'Одежда',
      title: 'Ботинки мужские зимние',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
    {
      id: 9,
      category: 'Спорт',
      title: 'Доска для сноубординга',
      publication: '14 апреля 2021',
      isPublication: 'Да',
    },
  ]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className={styles.ad}>
        <div className={styles.ad_menu}>
          <Menu ad="Объявления" logout="Выход" />
        </div>

        <div className={styles.ad_right}>
          <div className={styles.ads_count}>
            <p className={styles.ads}>Объявления</p>
            <p className={styles.count}>Всего: 0</p>
          </div>
          <Link to="/add">
            <Button title="Добавить " />
          </Link>
        </div>
        <div className={styles.inputs_checkbox}>
          <button className={styles.inputs_button} type="button">
            Фильтровать
          </button>
          {/* Выбор элементов */}
          <div className={styles.category}>
            <div className={styles.category_left}>
              <span className={styles.category_title}>Категория</span>
              <div className={styles.category__item}>
                <input type="checkbox" id="car" />
                <label htmlFor="car" />
                <span className={styles.category_tovar}>Автомобили</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="acc" />
                <label htmlFor="acc" />
                <span className={styles.category_tovar}>Аксессуары</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="clothing" />
                <label htmlFor="clothing" />
                <span className={styles.category_tovar}>Одежда</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="furniture" />
                <label htmlFor="furniture" />
                <span className={styles.category_tovar}>Мебель</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="sport" />
                <label htmlFor="sport" />
                <span className={styles.category_tovar}>Спорт</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="technique" />
                <label htmlFor="technique" />
                <span className={styles.category_tovar}>Техника</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="household" />
                <label htmlFor="household" />
                <span className={styles.category_tovar}>Товары для дома</span>
              </div>
              <div className={styles.category_button}>
                <button className={styles.btn_premin} type="button">
                  Применить
                </button>
                <button className={styles.btn_sbros} type="button">
                  Сбросить
                </button>
              </div>
            </div>
            <div className={styles.category_right}>
              <span className={styles.category_title}>Опубликовано</span>
              <div className={styles.category__item}>
                <input type="checkbox" id="yes" />
                <label htmlFor="yes" />
                <span className={styles.category_tovar}>Да</span>
              </div>
              <div className={styles.category__item}>
                <input type="checkbox" id="no" />
                <label htmlFor="no" />
                <span className={styles.category_tovar}>Нет</span>
              </div>
            </div>
          </div>
          {/* Конец элементов */}
        </div>
        <div className={styles.category_pagination}>
          <span className={styles.category_count}>1 — 8 из 145</span>
          <div className={styles.arrow}>
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </div>
        <div className={styles.ad_name}>
          <div className={styles.ad_ad}>Название объявления</div>
          <div className={styles.ad_category}>Категория</div>
          <div className={styles.ad_date}>Дата публикации</div>
          <div className={styles.ad_publication}>Публикация</div>
        </div>
        <InputSearch className={styles.input_search} placeholder="Найти объявление" type="search" />
        <PostikList remove={removePost} posts={posts} />
      </div>
    </>
  );
};

export default AdPages;
