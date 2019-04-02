const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  {
    info: {
      name: 'Apollo',
      dimensions: '135/70/R12',
      weight: '202 g',
      displayType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1080 x 1920 pixels',
      os: 'iOS 11',
      cpu: 'Hexa-core (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)',
      batery: 'Non-removable Li-Ion 2691 mAh battery (10.28 Wh)',
      color: 'White',
      price: 700,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'Apollo',
      color: 'white',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.5',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Bridgestone',
      dimensions: '135/70/R12',
      weight: '174 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1125 x 2436 pixels',
      os: 'iOS 11.1.1',
      cpu: 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)',
      batery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
      color: 'Black',
      price: 950,
      photo: '/img/apple_iphone_x.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'Bridgestone',
      color: 'black',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.8',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'MRF',
      dimensions: '135/70/R12',

      weight: '169 g',
      displayType: 'Super LCD5 capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1440 x 2560 pixels',
      os: 'Android 7.1 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: '12 MP (f/1.7, 1.4 µm, Dual Pixel PDAF, 5-axis OIS)',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Ice White',
      price: 450,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'MRF',
      color: 'white',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '5.5',
      displayResolution: '1440x2560',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'JK Tyres',
      dimensions: '135/70/R12',
      weight: '178 g',
      displayType: 'AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 8.0 (Oreo)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)',
      batery: 'Non-removable Li-Po 4000 mAh battery',
      color: 'Titanium Gray',
      price: 800,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'JKTyres',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '6.0',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Apollo',
      dimensions: '135/70/R12',
      weight: '145 g',
      displayType: 'IPS-NEO LCD capacitive touchscreen, 16M colors',
      displaySize: '5.1"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 12 MP (f/2.2, PDAF, OIS) + 20 MP',
      batery: 'Non-removable Li-Ion 3200 mAh battery',
      color: 'Mystic Silver',
      price: 680,
      photo: '/img/huawei_p10.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'Apollo',
      color: 'grey',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.1',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Bridgestone',
      dimensions: '135/70/R12',
      weight: '163 g',
      displayType: 'IPS LCD capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '4 GB',
      camera: 'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Ice Platinum',
      price: 800,
      photo: '/img/lg_g6.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'Bridgestone',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Yokohama',
      dimensions: '135/70/R12',
      weight: '158 g',
      displayType: 'P-OLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.1.2 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Aurora Black',
      price: 800,
      photo: '/img/lg_v30.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'Yokohama',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '6.0',
      displayResolution: '1440x2880',
      camera: '16',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Yokohama',
      dimensions: '135/70/R12',
      weight: '110.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '4.5"',
      displayResolution: '540 x 960 pixels',
      os: 'Android 4.4.4 (KitKat)',
      cpu: 'Quad-core 1.2 GHz Cortex-A53',
      internalMemory: '16 GB',
      ram: '1 GB',
      camera: '8 MP (f/2.4, 31mm), autofocus, LED flash',
      batery: 'Non-removable Li-Ion 1900 mAh battery',
      color: 'Silver',
      price: 150,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'Yokohama',
      color: 'grey',
      os: 'android',
      internalMemory: '16',
      ram: '1',
      displaySize: '4.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad_core'
    }
  },
 
  
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;
