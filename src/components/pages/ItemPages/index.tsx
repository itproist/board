import React, { useState } from 'react';
import Item from '../../common/Item';
import styles from './ItemPages.module.scss';
import { useNavigate } from 'react-router-dom';
import Picture from '../../common/Picture';
import arrow from '../../../assets/img/arrow/back.png';
import eyes from '../../../assets/img/eyes.png';
import logo from '../../../assets/img/item/item_01.png';
import logo1 from '../../../assets/img/item/item_02.png';
import logo2 from '../../../assets/img/item/item_03.png';
import logo3 from '../../../assets/img/item/item_04.png';
import logo4 from '../../../assets/img/item/item_05.png';
import logo5 from '../../../assets/img/item/01.png';
import logo6 from '../../../assets/img/item/02.png';
import map from '../../../assets/img/map.png';

const ItemPages = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };

  const isShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item_arrow}>
          <Picture src={arrow} alt="arrow" onClick={back} />
        </div>

        <p className={styles.item_publication}>14 апреля 2022</p>
        <p className={styles.item_title}>Стиральная машина Bosch</p>
        <p className={styles.item_code}>WS-25645-253-55</p>

        <div onClick={addNumber}>
          <div className={styles.item_item}>
            <img src={eyes} alt="eyes" />
            <span className={styles.item_count}>356</span>
          </div>
        </div>

        <div className={styles.priceandnumber}>
          <p className={styles.item_price}>22 500 Р</p>
          <button type="button" className={styles.item_number} onClick={isShow}>
            {!show ? 'Показать номер' : '+7 (930) 456 - 65 - 69'}
          </button>
        </div>

        <div className={styles.item_container}>
          <Picture src={logo} alt="01" />

          <div className={styles.item_images}>
            <Picture src={logo1} alt="02" />
            <Picture src={logo2} alt="03" />
            <Picture src={logo3} alt="04" />
            <Picture src={logo4} alt="05" />
          </div>
        </div>

        <div>
          <p className={styles.item_description}>Описание: </p>
          <p className={styles.item_text}>
            Стиральная машина в отличном состянии, чистая, без накипи. <br />С машиной отдам новый
            шланг для подключения воды и упаковку средства против накипи.
          </p>
          <div className={styles.item_terrain}>
            <p className={styles.item_location}>Местоположение: </p>
            <p className={styles.item_city}>г. Кстово</p>
          </div>
        </div>

        <div className={styles.item_map}>
          <Picture src={map} alt="map" />
        </div>

        {/* right block */}
        <div className={styles.right_block}>
          <span className={styles.see_also}>Cмотрите также: </span>
          <br />
          <img src={logo5} alt="logo5" />
          <div>
            <br />
            <span className={styles.name}>Стиральная машинa</span> <br />{' '}
            <span className={styles.model}>Samsung</span>
          </div>
          <br />
          <img src={logo6} alt="logo6" />
          <div>
            <br />
            <span className={styles.name}>Стиральная машинa</span> <br />{' '}
            <span className={styles.model}>Indesit</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPages;
