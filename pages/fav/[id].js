import Head from 'next/head';
import ax from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Favs() {
    const router = useRouter();
    const {id} = router.query;
  
  return (
    <div>
      Fav - {uuidv4()}
    </div>
  )
}
