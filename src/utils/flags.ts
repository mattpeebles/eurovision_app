import croatia from '../resources/flags/croatia.svg';
import czech_republic from '../resources/flags/czech_republic.svg';
import eu from '../resources/flags/eu.svg';
import finland from '../resources/flags/finland.svg';
import france from '../resources/flags/france.svg';
import germany from '../resources/flags/germany.svg';
import israel from '../resources/flags/israel.svg';
import italy from '../resources/flags/italy.svg';
import moldova from '../resources/flags/moldova.svg';
import norway from '../resources/flags/norway.svg';
import portugal from '../resources/flags/portugal.svg';
import serbia from '../resources/flags/serbia.svg';
import spain from '../resources/flags/spain.svg';
import sweden from '../resources/flags/sweden.svg';
import switzerland from '../resources/flags/switzerland.svg';
import ukraine from '../resources/flags/ukraine.svg';
import united_kingdom from '../resources/flags/united_kingdom.svg';

const flags: {[country: string]: string} = {
croatia,
czech_republic,
eu,
finland,
france,
germany,
israel,
italy,
moldova,
norway,
portugal,
serbia,
spain,
sweden,
switzerland,
ukraine,
united_kingdom,
}

export default function getFlagForCountry(country: string): string {
    if(!(country in flags)){
        return eu;
    }

    return flags[country];
}