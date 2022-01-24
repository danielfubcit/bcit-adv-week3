import {Save, Read} from '@/utils/helpers';
import books from '@/utils/books.json';
export default async function handler(req, res) {

//   //HELPER FUNCTIONS FOR YOU TO USE!
  console.log(req.query, req.body)
//   //await Save("test", json);
//   //const files = await Read();

  //detect if filter/save/read
  var lists = [];

  if(req.query.page){
    const max = req.query.max || 5;
    lists = PageBooks((req.query.page-1)*max, max)
  }

  // var lists = books.slice(0,5);
  if(req.query.bookID){
    lists = books.filter(o=>o.bookID === Number(req.query.bookID));
  }
  res.status(200).json(lists);
}

function PageBooks(
  start=0,
  num_items=5,
  ){
  const books = require("../../utils/books.json")
  //splice and slice
  //slice will take the amount of items and clone them based on the starting point we selected
  //splice with take the amount of items and remove from the data, so the next tie we splice, the data is different
  //eg: we move the old data to a new data, we use splice
  const new_list = books.slice(Number(start), Number(start)+Number(num_items));

  // console.log(new_list);
  return new_list;
}

const page = 2; //change the number to change page
//page1
PageBooks((page-1)*5,5);  //(0,5)
//page2
// PageBooks(5,5);
//page3
// PageBooks(10,5);
//run node books in api file
