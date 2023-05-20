import './DirectoryItem.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];

const DirectoryItem = () => {
  return (
    <div className="categories-container-cate">
      {categories.map(category => (
        <div className="category-container" key={category.id}>
          <div
            className="background-image"
            loading="lazy"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          />
          <div className="category-body-container-item">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
