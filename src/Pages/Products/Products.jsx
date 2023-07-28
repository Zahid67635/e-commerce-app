// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Spinner from '../../Components/Spinner';
import useTitle from '../../hooks/useTitle';

const Products = () => {
    const [products, setProducts] = useState([])
    const [active, setActive] = useState(false)
    const [activeAll, setActiveAll] = useState(true)
    const [activeElec, setActiveElec] = useState(false)
    const [activeCloth, setActiveCloth] = useState(false)
    const [loading, setLoading] = useState(true)
    useTitle('Products')
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
        setLoading(true)
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
        setLoading(true)
    }
    const handleClothing = () => {
        setActiveCloth(!activeCloth)
        setActiveElec(false)
        setActiveAll(false)
        setActive(false)
        loadByCategory("men's clothing")
        setLoading(true)
    }
    const handleElectronic = () => {
        setActiveElec(!activeElec)
        setActiveAll(false)
        setActive(false)
        setActiveCloth(false)
        loadByCategory('electronics')
        setLoading(true)
    }
    return (
        <div>
            <div className='md:flex justify-between pb-8'>
                <h1 className='md:text-3xl text-2xl px-2 md:px-0 pb-2 font-bold'>All Products: </h1>
                <div className='px-2 md:px-0 flex items-center'>
                    <h1 className='pr-2 font-bold hidden md:block text-orange-500'>Categories: </h1>
                    <button onClick={handleAll} className={`p-2 px-3 text-sm font-semibold rounded-xl shadow-lg shadow-gray-300 ${activeAll ? 'bg-sky-500 text-white' : ''}`}>All</button>
                    <button onClick={handleJewelery} className={`p-2 text-sm font-semibold rounded-xl shadow-lg shadow-gray-300 mx-2 ${active ? 'bg-sky-500 text-white' : ''}`}>Jewelery</button>
                    <button onClick={handleClothing} className={`p-2 text-sm font-semibold rounded-xl shadow-md shadow-gray-300 mx-2 ${activeCloth ? 'bg-sky-500 text-white' : ''}`}>Clothing</button>
                    <button onClick={handleElectronic} className={`p-2 text-sm font-semibold rounded-xl shadow-md shadow-gray-300 ${activeElec ? 'bg-sky-500 text-white' : ''}`}>Electronics</button>
                </div>
            </div>
            {
                loading ? <Spinner /> :
                    <div className='md:grid grid-cols-3 gap-8 p-3 md:p-0'>
                        {
                            products.map(p => <ProductCard details={p} key={p.id} />)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;