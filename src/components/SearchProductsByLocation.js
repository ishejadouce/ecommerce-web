import React, { useState } from 'react'
// import rwanda from '../../node_modules/rwanda'

const SearchProductsByLocation = () => {

    // const rwanda = require({rwanda})
    // const cells = rwanda.Cells();

    const [location, setLocation] = useState("Kigali");
    // const [district, setDistrict] = useState('')

    const handleChange = (event) => {
        setLocation(event.target.value)
    }

    return (
        <>
            <div className='search-container bg-slate-50 w-[50%] p-10  bg-none space-x-12 ml-[6%] mt-[4%] h-[15vh]'>

                {/* <label className='block bg-none pl-[60px]'>Location</label> */}
                <select value={location} onChange={handleChange} className='bg-none rounded-md p-4 bg-slate-80 border-slate-50' >
                    <option value="" className='bg-none'>Location</option>
                    <option value="NYarugenge">Nyarugenge</option>
                    <option value="Kicukiro">Kicukiro</option>
                    <option value="Nyamata">Nyamata</option>
                </select>
                {/* <input className='bg-none ' placeholder={location}></input> */}

                <input type="date" id="date" className='bg-none bg-none rounded-md p-4 bg-slate-80 border-slate-50'></input>

                <select value={location} onChange={handleChange} className='bg-none bg-none rounded-md p-4 border-slate-50'>
                    <option value="">Groceries</option>
                    <option value="Cookies">Cookies</option>
                    <option value="Cakes">Cakes</option>
                    <option value="Ice Cream">Ice cream</option>
                </select>

                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 float-right  bg-none rounded-md w-[170px] mt-2'>Search</button>
            </div>

        </>
    )
}

export default SearchProductsByLocation