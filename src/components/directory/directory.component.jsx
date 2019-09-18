import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'custom funko pop',
          imageUrl: 'https://i.pinimg.com/originals/52/19/dc/5219dc9316c6207439314851d51d151f.jpg',
          id: 1,
          linkUrl: 'poppage',
        },
        {
          title: '3D printed models',
          imageUrl: 'https://3dprint.com/wp-content/uploads/2016/07/unnamed-17-768x576.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'custom masks',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81I%2BXewq1%2BL._SY550_.jpg',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'custom costplay costumes',
          imageUrl: 'https://www.simcosplay.com/media/catalog/product/cache/1/image/800x800/040ec09b1e35df139433887a97daa66f/s/p/spider_man_into_the_spider_verse_cosplay_costumes_miles_morales_suit_top_level.jpg',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'fan art',
          imageUrl: 'https://pbs.twimg.com/profile_images/891036695902040065/7Riewjce.jpg',
          size: 'large',
          id: 5,
          linkUrl: '',
        }
      ],
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps  }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
