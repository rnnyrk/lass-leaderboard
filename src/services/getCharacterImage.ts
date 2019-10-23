import donkeykong from 'images/chars/donkeykong.png';
import samus from 'images/chars/samus.png';
import jigglypuff from 'images/chars/jigglypuff.png';
import corrin from 'images/chars/corrin.png';
import ness from 'images/chars/ness.png';
import pokemontrainer from 'images/chars/pokemontrainer.png';
import mewtwo from 'images/chars/mewtwo.png';
import palutena from 'images/chars/palutena.png';
import simon from 'images/chars/simon.png';
import ike from 'images/chars/ike.png';

const getCharacterImage = (character: string): string => {
  switch (character) {
    case 'Donkey Kong': return donkeykong;
    case 'Samus': return samus;
    case 'Jigglypuff': return jigglypuff;
    case 'Corrin': return corrin;
    case 'Ness': return ness;
    case 'Pokemon Trainer': return pokemontrainer;
    case 'Mewtwo': return mewtwo;
    case 'Palutena': return palutena;
    case 'Simon': return simon;
    case 'Ike': return ike;
    default: return '';
  }
};

export default getCharacterImage;
