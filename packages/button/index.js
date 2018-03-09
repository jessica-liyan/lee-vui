import LyButton from './button';

LyButton.install = function(Vue) {
  Vue.component(LyButton.name, LyButton);
};

export default LyButton;