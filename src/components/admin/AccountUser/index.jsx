import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DataTableGrid from '../DataTableGrid'


const AccountUser = () => {
    const dataUser = useSelector((state) => state.product.products);


    const [user, setUser] = useState([])
    return (
        <div>cc</div>
    )
}

export default AccountUser