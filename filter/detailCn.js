import Vue from 'vue';

const detailCnFilter = (setence) => {
  switch (setence) {
    case 'Deluxe Twin Room is reserved for 2-4 guests':
      return '豪華雙床房只限2-4位房客入住。';
    case 'Twin Room is reserved for 2-4 guests':
      return '雙床房只限2-4位房客入住。';
    case 'Deluxe Double Room is reserved for two or three guests':
      return '豪華家庭房只限2-4位房客入住。';
    case 'Double Room is reserved for two or three guests':
      return '家庭房只限2-4位房客入住。';
    case 'Deluxe Single Room is only reserved for one guest':
      return '豪華單人房只限1位房客入住';
    case 'Single Room is only reserved for one guest':
      return '單人房只限1位房客入住';
    case ' There is a bedroom with two double size beds and a private bathroom':
      return '房內包和1張加大雙人床以及1間獨立衛浴';
    case ' There is a bedroom with a small double size bed and a private bathroom':
      return '房內包含1張加大單人床以及1間獨立衛浴。';
    case ' There is a bedroom with a single size bed and a private bathroom':
      return '房內包含1張單人床以及1間獨立衛浴。';
    case ' There is a bedroom with two queen size beds and a private bathroom':
      return '房內包含2張6尺加大雙人床以及1間獨立衛浴。';
    case ' There is a bedroom with a queen size bed and a private bathroom':
      return '房內包含1張6尺加大雙人床以及1間獨立衛浴。';
    case ' Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided':
      return '房間提供以下備品: 毛毯、床單、浴巾、香皂、沐浴乳、吹風機。';
    case ' In the room there is AC and of course WiFi':
      return '房間提供空調以及無線網路';
    default:
      return '';
  }
};

Vue.filter('detailCn', detailCnFilter);
