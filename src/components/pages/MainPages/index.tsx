import React, { useState } from 'react';
import styles from './MainPages.module.scss';
import PostList from '../../common/Post/PostList';
import shop from '../../../assets/img/shop.png';
import Picture from '../../common/Picture';
import Button from '../../common/Post/PostForm/Button';

const MainPages = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      src: '/img/ribbon/washing.png',
      category: 'Техника',
      title: 'Стиральная машина Bosch',
      text: 'Машина в хорошем состоянии.  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  Возможен разумный торг',
      price: '22 500 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 2,
      src: '/img/ribbon/cap.png',
      category: 'Одежда',
      title: 'Шапочка',
      text: 'Шапочка детская на ребенка 7-10 лет. \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  60% шерст, 40% вискоза',
      price: '500 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 3,
      src: '/img/ribbon/hoody.png',
      category: 'Одежда',
      title: 'Толстовка',
      text: 'Новая толстовка белая без принта  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  с карманом',
      price: '2 000 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 4,
      src: '/img/ribbon/bike.png',
      category: 'Спорт',
      title: 'Велосипед',
      text: 'Велосипед в отличном состоянии.  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  Ретро-стиль',
      price: '28 000 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 5,
      src: '/img/ribbon/headphones.png',
      category: 'Техника',
      title: 'Наушники',
      text: 'Наушники почти новые.  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  Срок эксплуатации - меньше месяца',
      price: '4 500 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 6,
      src: '/img/ribbon/coffeemachine.png',
      category: 'Техника',
      title: 'Кофемашина',
      text: 'Кофемашина с капучинатором.  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  Пакет кофе 1 кг. - в подарок',
      price: '8 500 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 7,
      src: '/img/ribbon/bag.png',
      category: 'Техника',
      title: 'Сумка женская',
      text: 'Итальянска сумка из натуральной кожи Качественная фурнитура, состояние новой',
      price: '7 500 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
    {
      id: 8,
      src: '/img/ribbon/boots.png',
      category: 'Одежда',
      title: 'Ботинки мужские зимние',
      text: 'Ботинки почти новые, качественные, теплые. Носили 2 недели',
      price: '8 000 Р',
      publication: '14 апреля 2021',
      isPublication: 'Да',
      count: 365,
    },
    {
      id: 9,
      src: '/img/ribbon/board.png',
      category: 'Спорт',
      title: 'Доска для сноубординга',
      text: 'Качественная красивая доска  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  \u00A0  с креплениями',
      price: '43 000 Р',
      publication: '14 апреля 2021',
      count: 365,
    },
  ]);

  return (
    <div className={styles.main}>
      <div className={styles.main_header}>
        <div>
          <h1 className={styles.main_title}>Доска объявлений</h1>
          <p className={styles.main_text}>
            Находи тысячи разнообразных товаров и услуг <br /> от продавцов со всей страны. <br />
            Безопасные расчеты. Удобный сервис доставки
          </p>
        </div>
        <div className={styles.main_img}>
          <Picture src={shop} alt="shop" />
        </div>
      </div>
      <div className={styles.main_button}>
        <Button className={styles.button_yellow} title="Вся доска" />
        <Button className={styles.button_white} title="Автомобили" />
        <Button className={styles.button_white} title="Аксессуары" />
        <Button className={styles.button_white} title="Мебель" />
        <Button className={styles.button_white} title="Одежда" />
        <Button className={styles.button_white} title="Спорт" />
        <Button className={styles.button_white} title="Техника" />
        <Button className={styles.button_white} title="Товары для дома" />
      </div>
      <div className={styles.main_ribbon}>Вся лента</div>
      <PostList posts={posts} />
      <div className={styles.main_dwn}>
        <button className={styles.main_download} type="button">
          <span>Загрузить еще</span>
        </button>
      </div>
    </div>
  );
};
export default MainPages;
