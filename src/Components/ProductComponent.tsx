// src/components/Home.tsx
import React from 'react';
import Styles from  "../Assets/css/ProductComponent.module.css"
import ArtCard from './ArtCard';
import { Link } from 'react-router-dom';

const ProductComponent: React.FC = () => {

  const artItems = [
    {
      artName: 'Abstract Sculpture 1',
      artId: 1,
      artPrice: 50,
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/1.jpeg',
    },
    {
      artName: 'Abstract Sculpture 2',
      artId: 2,
      artPrice: 75,
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
    },
    {
      artName: 'Abstract Sculpture 2',
      artId: 3,
      artPrice: 75,
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
    },
    {
      artName: 'Abstract Sculpture 2',
      artId: 4,
      artPrice: 75,
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/4.jpeg',
    },
    // Add more art items as needed
  ];

  return <div>
    
  <div className={Styles.SearchContainer_wrapper}>
    <div className={Styles.toggle_menu_wrapper}>
      <span className='material-icons'>menu</span> 
       <span>shop by category</span>
    </div>
    <div className={Styles.search_container}>
        <input type="text" placeholder='search for item...' />
        <span className='material-icons search'>search</span>
    </div>

    <div className={Styles.shop_cartgory}>
        <span className='material-icons'>
            person
        </span>
        <span className='material-icons'>arrow_drop_down</span>
        <span className='material-icons'>shopping_cart</span>
    </div>
  </div>
  <div className={Styles.product_catergory_container}>
<div className={Styles.categories_list}>
   <div className={Styles.side_menu}>
   <h2>Products</h2>
   <div className={Styles.shop_side_bar}> 
    <span className='material-icons'>chevron_right</span>
   <span>shop</span>
   </div>

   <div className={Styles.Menu}>
    <h3>Shop by Cartegory</h3>
    <ul>
        <li>Art Cartegory</li>
        <li>Art Cartegory</li>
        <li>Art Cartegory</li>
        <li>Art Cartegory</li>
    </ul>
   </div>
   </div>
   <div>
   </div>
</div>

<div className={Styles.Products_card_wrapper}>
  <div className={Styles.card_container}>
  {artItems.map((artItem) => (
      <Link to={'art-details/'+artItem.artId}>
          <ArtCard
            key={artItem.artId}
            artName={artItem.artName}
            artId={artItem.artId}
            artPrice={artItem.artPrice}
            imageUrl={artItem.imageUrl}
          />
          </Link>
        ))}

  </div>
     
      </div>
  </div>
  </div>
};

export default ProductComponent;
