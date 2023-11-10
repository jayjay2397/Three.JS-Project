import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTextrue: false,
    logoDecal: './threejs.png',
    fullDecal: './three.js.png',

});

export default state;