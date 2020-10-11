import Vue from 'vue';

const ServiceFilter = (eng) => {
  switch (eng) {
    case 'Wi-Fi':
      return '無線網路';
    case 'Breakfast':
      return '早餐';
    case 'Mini-Bar':
      return '迷你吧台';
    case 'Room-Service':
      return '客房服務';
    case 'Television':
      return '電話';
    case 'Air-Conditioner':
      return '冷氣';
    case 'Refrigerator':
      return '冰箱';
    case 'Sofa':
      return '沙發';
    case 'Great-View':
      return '風景';
    case 'Smoke-Free':
      return '無吸菸房';
    case 'Child-Friendly':
      return '兒童友善';
    case 'Pet-Friendly':
      return '寵物友善';
    default:
      return 'servie';
  }
};

Vue.filter('service', ServiceFilter);
