import React from 'react';
import styles from './Categories.module.scss';
import Container from '../../../common/Container/Container';
import CategoryCard from './CategoryCard/CategoryCard';

import primaryImage1 from '../../../assets/categories/primaryImages/category-1.png';
import primaryImage2 from '../../../assets/categories/primaryImages/category-2.png';
import primaryImage3 from '../../../assets/categories/primaryImages/category-3.png';
import primaryImage4 from '../../../assets/categories/primaryImages/category-4.png';
import primaryImage5 from '../../../assets/categories/primaryImages/category-5.png';
import primaryImage6 from '../../../assets/categories/primaryImages/category-6.png';
import primaryImage7 from '../../../assets/categories/primaryImages/category-7.png';
import primaryImage8 from '../../../assets/categories/primaryImages/category-8.png';

import categoryIcon1 from '../../../assets/categories/icons/category-1.svg';
import categoryIcon2 from '../../../assets/categories/icons/category-2.svg';
import categoryIcon3 from '../../../assets/categories/icons/category-3.svg';
import categoryIcon4 from '../../../assets/categories/icons/category-4.svg';
import categoryIcon5 from '../../../assets/categories/icons/category-5.svg';
import categoryIcon6 from '../../../assets/categories/icons/category-6.svg';
import categoryIcon7 from '../../../assets/categories/icons/category-7.svg';
import categoryIcon8 from '../../../assets/categories/icons/category-8.svg';
import HeadLine from '../../Utils/Headline/HeadLine';

const Categories = () => {
  const HARCODED_DATA = [
    { primaryImage: primaryImage1, icon: categoryIcon1, title: 'Art' },
    { primaryImage: primaryImage2, icon: categoryIcon2, title: 'Collectibles' },
    { primaryImage: primaryImage3, icon: categoryIcon3, title: 'Music' },
    { primaryImage: primaryImage4, icon: categoryIcon4, title: 'Photography' },
    { primaryImage: primaryImage5, icon: categoryIcon5, title: 'Video' },
    { primaryImage: primaryImage6, icon: categoryIcon6, title: 'Utility' },
    { primaryImage: primaryImage7, icon: categoryIcon7, title: 'Sport' },
    { primaryImage: primaryImage8, icon: categoryIcon8, title: 'Virtual Worlds' },
  ];
  return (
    <Container>
      <HeadLine title="Browse Categories" />
      <div className={styles.categories}>
        {HARCODED_DATA.map((data, index) => (
          <CategoryCard {...data} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
