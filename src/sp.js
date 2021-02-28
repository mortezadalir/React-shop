const myObj={
    myarr:[
        {
            name:'morteza',
            age: 29,
        },
        {
            name:'ali',
            age: 19,
        }

    ]
}

const mySecObj={
    ...myObj,
    myarr:[...myObj.myarr,
        {
            ...myObj.myarr[0],
            name: 'nima',
        }],
};

const cart=[
    {name: 'mort'},
    {name: 'hos'},
];

const ccart=[...cart,
    {...cart[0]
    , name: 'ali'}];

console.log(ccart);