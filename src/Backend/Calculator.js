

export const totalrequiredwater = 1000;
export let waterdrank = 0;
export let remainingwater = totalrequiredwater;
export default calculate = (input) => {
    waterdrank = waterdrank + parseInt(input);
    remainingwater = remainingwater - parseInt(input);
}

let lastUpdateTime = new Date().getTime();




//refresh every 24 hrs

