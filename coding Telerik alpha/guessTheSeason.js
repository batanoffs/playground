let input = ["June","24"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month = gets();
let date = +gets();
let seasonIs = ``;

switch (month) {
    case `April`: case `May`:
        seasonIs = `Spring`;
        break;
    case `July`: case `August`:
        seasonIs = `Summer`;
        break;
    case `October`: case `November`:
        seasonIs = `Autumn`;
        break;
    case `January`: case `February`:
        seasonIs = `Winter`;
        break;
    case `March`:
        if (date >= 20) {
            seasonIs = `Spring`;
        } else {
            seasonIs = `Winter`;
        }
        break;
    case `June`:
        if (date >= 21) {
            seasonIs = `Summer`;
        } else {
            seasonIs = `Spring`;
        }
        break;
    case `September`:
        if (date >= 22) {
            seasonIs = `Autumn`;
        } else {
            seasonIs = `Summer`;
        }
        break;
    case `December`:
        if (date >= 21) {
            seasonIs = `Winter`;
        } else {
            seasonIs = `Autumn`;
        }
        break; 
    }
print(seasonIs);



// if (month === `March` || month === `April` || month === `May` || month === `June`) {
//     if (month === `March` && date >= 20) {
//         seasonIs = `Spring`;
//     } else if (month === `March` && date < 20) {
//         seasonIs = `Winter`;
//     } else if (month === `June` && date < 21) {
//         seasonIs = `Spring`;
//     } else if (month === `June` && date >= 21) {
//         seasonIs = `Summer`;
//     } else {
//         seasonIs = `Spring`;
//     }

// } else if (month === `June` || month === `July` || month === `August` || month === `September`) {
//     if (month === `June` && date >= 21) {
//         seasonIs = `Summer`;
//     } else if (month === `June` && date < 21) {
//         seasonIs = `Spring`;    
//     } else if (month === `September` && date < 22) {
//         seasonIs = `Summer`;
//     } else if (month === `September` && date >= 22) {
//         seasonIs = `Autumn`;
//     } else {
//         seasonIs = `Summer`;
//     }

// } else if (month === `September` || month === `October` || month === `November` || month === `December`) {
//     if (month === `September` && date >= 22) {
//         seasonIs = `Autumn`;
//     } else if (month === `September` && date < 22) {
//         seasonIs = `Summer`;    
//     } else if (month === `December` && date < 21) {
//         seasonIs = `Autumn`;
//     } else if (month === `December` && date >= 21) {
//         seasonIs = `Winter`;    
//     } else {
//         seasonIs = `Autumn`;
//     }

// } else if (month === `December` || month === `January` || month === `February` || month === `March`) {
//     if (month === `December` && date >= 21) {
//         seasonIs = `Winter`;
//     } else if (month === `December` && date < 21) {
//         seasonIs = `Autumn`;    
//     } else if (month === `March` && date < 20) {
//         seasonIs = `Winter`;
//     } else if (month === `March` && date >= 20) {
//         seasonIs = `Spring`;
//     } else {
//         seasonIs = `Winter`;
//     }
// }


