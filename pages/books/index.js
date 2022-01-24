import Head from 'next/head';
import ax from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from 'next/router';

import Book from '@/comps/Book';
import { useState, useEffect } from 'react';

const numItems = 45000;
var numpages = [];

export default function Books() {
  const router = useRouter()
  const [books, setBooks] = useState([])

  const getBooks = async (p)=>{
    const res = await ax.get("/api/books", {
      params:{
        page:p,
        max:15
      }
    });
    console.log(res.data)
    setBooks(res.data)
  }

  for(var i=1; i<45000; i+=15){
    numpages.push((i+14)/15)
  }

  numpages = numpages.slice(0,10);

  return (
    <div>
      {books.map((o,i)=><Book
        title={o.title}
        avg={o.average_rating}
        page={o.num_pages}
        id={o.bookID}
        onBookClick={()=>router.push(`/books/${o.bookID}`)}
      />)}
      
      <div>
        {numpages.map((o,i)=><button onClick={()=>getBooks(o)}>{o}</button>)}
        
        {/* <button onClick={()=>getBooks(1)}>1</button>
        <button onClick={()=>getBooks(2)}>2</button>
        <button onClick={()=>getBooks(3)}>3</button> */}
      </div>
      
      <button onClick={()=>{
        //make a new fav list!
        /* unique identifier */
        router.push(`/fav/${uuidv4()}`)
      }}>New Favs</button>
    </div>
  )
}
