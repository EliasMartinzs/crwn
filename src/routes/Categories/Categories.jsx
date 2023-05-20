import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoriesPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default Categories;
