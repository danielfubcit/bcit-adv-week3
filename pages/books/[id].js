import Head from 'next/head';
import ax from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Book from '@/comps/Book';

export default function BooksID() {
  const router = useRouter();
  const {id} = router.query;

  const [b_data, setB] = useState(null)

  useEffect(()=>{
    //console.log(id);
    //debugger pause the loading
    //debugger;

    if(id){
      const GetBook = async ()=>{
        const res = await ax.get("/api/books", {
          params:{
            //pass the BookID to the id
            bookID:id
          }
        });
        console.log(res);
        if(res.data[0]){
          setB(res.data[0]);
        }
        
      }
      GetBook();
    }
  }, [id]);

  if(b_data === null){
    return <div>
      No book found
    </div>
  }
  return (
    <div>
      Make a new list for <b>{id}</b>
      <Book
        title={b_data.title}
        id={b_data.bookID}
        pages={b_data.num_pages}
        avg={b_data.average_rating}
      />
      <button onClick={()=>{
        //save in your own api!
      }}>Save</button>
    </div>
  )
}
