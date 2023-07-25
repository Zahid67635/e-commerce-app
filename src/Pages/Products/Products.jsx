// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Spinner from '../../Components/Spinner';

const Products = () => {
    const [products, setProducts] = useState([])
    const [active, setActive] = useState(false)
    const [activeAll, setActiveAll] = useState(false)
    const [activeElec, setActiveElec] = useState(false)
    const [activeCloth, setActiveCloth] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }, [])
    const loadByCategory = (name) => {
        if (name) {
            fetch(`https://fakestoreapi.com/products/category/${name}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                })
                .catch(er => console.log(er))
        }
    }
    const handleAll = () => {
        setActiveAll(!activeAll)
        setActive(false)
        setActiveCloth(false)
        setActiveElec(false)
        if (!activeAll) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                })
                .catch(er => console.log(er))
        }
    }
    const handleJewelery = () => {
        setActive(!active)
        setActiveCloth(false)
        setActiveElec(false)
        setActiveAll(false)
        loadByCategory('jewelery')
    }
    const handleClothing = () => {
        setActiveCloth(!activeCloth)
        setActiveElec(false)
        setActiveAll(false)
        setActive(false)
        loadByCategory("men's clothing")
    }
    const handleElectronic = () => {
        setActiveElec(!activeElec)
        setActiveAll(false)
        setActive(false)
        setActiveCloth(false)
        loadByCategory('electronics')
    }
    return (
        <div>
            <div className='flex justify-between pb-8'>
                <h1 className='text-3xl font-bold'>All Products: </h1>
                <div className=''>
                    <span className='pr-2 font-semibold'>Categories: </span>
                    <button onClick={handleAll} className={`p-2 px-3 text-sm font-semibold rounded-xl shadow-lg shadow-gray-300 ${activeAll ? 'bg-sky-500 text-white' : ''}`}>All</button>
                    <button onClick={handleJewelery} className={`p-2 text-sm font-semibold rounded-xl shadow-lg shadow-gray-300 mx-2 ${active ? 'bg-sky-500 text-white' : ''}`}>Jewelery</button>
                    <button onClick={handleClothing} className={`p-2 text-sm font-semibold rounded-xl shadow-md shadow-gray-300 mx-2 ${activeCloth ? 'bg-sky-500 text-white' : ''}`}>Clothing</button>
                    <button onClick={handleElectronic} className={`p-2 text-sm font-semibold rounded-xl shadow-md shadow-gray-300 ${activeElec ? 'bg-sky-500 text-white' : ''}`}>Electronics</button>
                </div>
            </div>
            {
                loading ? <Spinner /> :
                    <div className='md:grid grid-cols-3 gap-8'>
                        {
                            products.map(p => <ProductCard details={p} key={p.id} />)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;