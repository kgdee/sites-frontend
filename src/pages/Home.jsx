import React from 'react'
import AppCard from '../components/AppCard'
import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const apiUrl = `${process.env.REACT_APP_API}/api`;
  const { data, loading, error, fetchData } = useFecth(apiUrl);

  return (
    <div className="container flex flex-col bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">App Gallery</h1>
      <div className='flex flex-wrap gap-4'>
        {data.map((app, i) => <AppCard key={i} app={app} />)}

        <button className="w-[64px]">
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

export default Home