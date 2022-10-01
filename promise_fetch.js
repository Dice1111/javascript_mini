

// const url ="https://jsonplaceholder.typicode.com/todos/1";

// const fetchResult = fetch(url);

// console.log(fetchResult);

// const responseResult = fetchResult.then((response) => response.json());

// console.log(responseResult);

// responseResult.then((data) => console.log(data));

// async await

const fetchData = async(url) => {
    const res = await fetch(url);
    console.log(res);
    const data= await res.json();
    return data;

};
const url ="https://api.github.com/search/users?q=aungpaing";
const resultData = fetchData(url);

resultData.then((data) => console.log(data));