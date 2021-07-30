const back = document.getElementById('back');
const listMenu = document.getElementById('menu');
let current = 0;

const mainList = [
    {
        option1: `
        <li class="one" id="a">Mobile money</li>
        <li id="b">Airtime</li>
        <li id="c" >Balance Check</li>
        `
    },
    {
        option2: [`
        <li id="d">Send Money</li>
        <li id="e">Withdraw Money </li>
        <li id="f">Check balance</li>
        <div class="button">
        <button id="back">Go back</button>
    </div>
        `,
            `
        <li>Voice Data</li>
        <li>Bundles</li>
        <li>Check airtime</li>
        <div class="button">
        <button id="back">Go back</button>
    </div>
        `,
            `
        <li>Voice Data</li>
        <li>Data Bundles</li>
        <div class="button">
        <button id="back">Go back</button>
    </div>
        `]
    },
    {
        option3: [`
        <li style="display:flex;"><input type="number" placeholder="07975000" style="width:80%;font-size:24px;font-weight:bold;border:none;background-color:#eee;padding:8px;"><button id="ok" style="border:none; background:brown;color:white;padding:12px 20px;">ok</button></li>
        <div class="button">
        <button id="back">Go back</button>
    </div>
        `,
            `
        <li>Voice Data</li>
        <li>Bundles</li>
        <li>Check airtime</li>
        `,
            `
        <li>Voice Data</li>
        <li>Data Bundles</li>
        `]
    },
    {
        option4: [`
        <li>
        <input type="number" placeholder="UGX" style="width:100%;font-size:24px;margin-bottom:2px;font-weight:bold;border:none;background-color:#eee;padding:5px;text-align:center;">
        <input type="text" placeholder="****" pattern="\d*" maxlength="4" style="width:100%;font-size:20px;font-weight:bold;border:none;background-color:#eee;padding:5px;text-align:center;">
        <button id="okV" style="border:none; background:brown;color:white;padding:10px 20px;width:100%">Submit</button>
        </li>
        <div class="button">
        <button id="back">Go back</button>
    </div>
        `,
            `
        <li>Voice Data</li>
        <li>Bundles</li>
        <li>Check airtime</li>
        `,
            `
        <li>Voice Data</li>
        <li>Data Bundles</li>
        `]
    },
    {
        option5: [`
        <li><h2>Transaction Successed your main account is ${5000} UGX</h2><h1>
       <div class="button">
        <button id="back">Go to Main Menu</button>
    </div>
        `,
            `
        <li>Voice Data</li>
        <li>Bundles</li>
        <li>Check airtime</li>
        `,
            `
        <li>Voice Data</li>
        <li>Data Bundles</li>
        `]
    },


]


console.log(current);

let currentOption = mainList[current];

listMenu.innerHTML = currentOption.option1;

function selectHandlerParameter() {
    current++;
    if (current >= mainList.length) {
        current = 0;
    }

    // currentOption = mainList[current];
    // listMenu.innerHTML = currentOption.option2[number];
    // console.log(current);
}
function backHandler() {
    current--;
    if (current < 0) {
        current = mainList.length - 1;
    }
    // currentOption = mainList[current];
    // listMenu.innerHTML = currentOption.option1;
};

function a(){
    
}
function b(){
    
}
function c(){
    
}

// if (current === 0) {

//     function aHandler() {
//         selectHandlerParameter();
//         currentOption = mainList[current];
//         listMenu.innerHTML = currentOption.option2[0];
//         console.log(current);

//         const back = document.getElementById('back');
//                 back.addEventListener('click',()=>{
//                     backHandler();
//                     console.log(current);
//                     currentOption = mainList[current];
//                 listMenu.innerHTML = currentOption.option1;
//                 });


//         if (current === 1) {
//             const selectD = document.getElementById('d');

//             function dHandler() {
//                 selectHandlerParameter();
//                 currentOption = mainList[current];
//                 listMenu.innerHTML = currentOption.option3[0];

//                 const back = document.getElementById('back');
//                 back.addEventListener('click',()=>{
//                     backHandler();
//                     console.log(current);
//                     currentOption = mainList[current];
//                 listMenu.innerHTML = currentOption.option2[0];

                    
//                 })
                
//                 if (current === 2) {
//                     const ok = document.getElementById('ok');

//                     function okHandler() {
//                         selectHandlerParameter();
//                         currentOption = mainList[current];
//                         listMenu.innerHTML = currentOption.option4[0];

//                         const back = document.getElementById('back');
//                         back.addEventListener('click',()=>{
//                             backHandler();
//                             console.log(current);
//                             currentOption = mainList[current];
//                         listMenu.innerHTML = currentOption.option3[0];

                            
//                         })

//                         if (current === 3) {
//                             const okV = document.getElementById('okV');

//                             function okVHandler() {
//                                 selectHandlerParameter();
//                                 currentOption = mainList[current];
//                                 listMenu.innerHTML = currentOption.option5[0];

//                                 const back = document.getElementById('back');
//                                 back.addEventListener('click',()=>{
//                                     current = 0;
//                                     currentOption = mainList[current];
//                                     listMenu.innerHTML = currentOption.option1
//                                     aHandler();
//                                 })
//                             }
                           

//                             okV.addEventListener('click', okVHandler);
//                         }
//                     }


//                     ok.addEventListener('click', okHandler);
//                 }
//             }

//             selectD.addEventListener('click', dHandler);
//         }
//     };

//     function bHandler() {
//         selectHandlerParameter();
//         currentOption = mainList[current];
//         listMenu.innerHTML = currentOption.option2[1];

//         console.log(current);

//     }

//     function cHandler() {
//         selectHandlerParameter();
//         currentOption = mainList[current];
//         listMenu.innerHTML = currentOption.option2[2];

//         console.log(current);
//     }

//     const selectA = document.getElementById('a');
//     const selectB = document.getElementById('b');
//     const selectC = document.getElementById('c');

//     selectA.addEventListener('click', aHandler);
//     selectB.addEventListener('click', bHandler);
//     selectC.addEventListener('click', cHandler);

// };


