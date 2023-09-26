interface AudioPlayer {
    audioVolumne: number, 
    songDuration: number,
    song: string,
    details : Details
};

interface Details{
    author: string,
    year: number
}

const audioPlayer : AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Year';

//De ambas maneras es posible realizarlo
//const { song:songName, songDuration:duration, details: { author: authorName  }} = audioPlayer;
const { song:songName, songDuration:duration, details} = audioPlayer;
const {author: authorName} = details;

console.log('Song: ', songName);
console.log('Duration:', duration);
console.log('Author:', authorName);

const [,,P3='Not Found', P4='Not found'] : string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje:', P3);
console.log('Personaje:', P4);

export {}