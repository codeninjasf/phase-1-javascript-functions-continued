//write code below
// defines saturdayFun function declaration as specified

function saturdayFun(fun = "roller-skate!"){
    return (`This Saturday, I want to ${fun}`);
}
saturdayFun(); 
saturdayFun("bathe my dog!");

// 
// defines mondayWork function expression as specified

const mondayWork = function (office = "go to the office."){
    return (`This Monday, I will ${office}`);
}
mondayWork();
mondayWork("work from home.");

// 
// defines wrapAdjective function according to the specification

function wrapAdjective(highLight = "*"){
    const praised = function(note = "a hard worker"){
        return (`You are ${highLight}${note}${highLight}!`);
    }
    return praised;
}


