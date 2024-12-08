import propType from 'prop-types'
import { useState } from 'react'

const Header = ({ onSearch }) => {

    const [textSearch, setTextSearch] = useState('');


    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-red-600 uppercase text-[40px] font-bold">Movie</h1>
                <ul className="flex justify-center gap-5">
                    <li>
                        <a href="#" className="text-white text-[18px]">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-[18px]">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-[18px]">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-4">
                <input type="text" placeholder="Search" className="p-3 text-[18px]" onChange={(e) => setTextSearch(e.target.value)} />
                <button className="bg-red-600 text-white px-3 text-[18px]" onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </div>
    )
}

Header.propTypes = {
    onSearch: propType.func,
}

export default Header