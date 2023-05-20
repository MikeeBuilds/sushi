import AOS from "aos";
import "aos/dist/aos.css";
import check from "/Users/algohussle/Documents/builds/sushi/assets /check.svg";
import star from "/Users/algohussle/Documents/builds/sushi/assets /star.svg";
import sushi12 from "/Users/algohussle/Documents/builds/sushi/assets /sushi-12.png";
import sushi11 from "/Users/algohussle/Documents/builds/sushi/assets /sushi-11.png";
import sushi10 from "/Users/algohussle/Documents/builds/sushi/assets /sushi-10.png";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Orauncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    
]