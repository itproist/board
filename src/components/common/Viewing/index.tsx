import React from 'react';
import Picture from '../Picture';
import styles from './Viewing.module.scss';
import map from '../../../assets/img/map.png';

const Viewing = () => {
  return (
    <div className={styles.view}>
      <form className={styles.view_form}>
        <h5 className={styles.add_title}>Название товара</h5>
        <input className={styles.add_nameTovar} type="text" />

        <h5 className={styles.add_title}>Категория</h5>
        <select>
          <option>Одежда</option>
          <option>Спорт</option>
          <option>Мебель</option>
          <option>Техника</option>
          <option>Имущество</option>
        </select>
        <h5 className={styles.add_title}>Стоимость</h5>
        <input type="text" />
        <h5 className={styles.add_title}>Телефон</h5>
        <input type="tel" placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _" />
        <h5 className={styles.add_title}>Описание</h5>
        <input type="text" placeholder="Введите текст (до 3000 символов)" />
        <h5 className={styles.add_title}>Фотография</h5>
        <input type="file" />
        <h5 className={styles.add_title}>Местоположение</h5>
        <input type="text" placeholder="Введите адрес" />
        <Picture src={map} alt="map" />
      </form>
    </div>
  );
};

export default Viewing;
