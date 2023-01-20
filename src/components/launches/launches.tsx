import React, { useState } from 'react';
import './launches.css'
import { useLaunchesQuery } from '../../generated/graphql'


function Launches({ callBack, id }: { callBack: any, id: string }) {
    const { loading, error, data } = useLaunchesQuery()
    const [search, setSearch] = useState('')
    if (error) {
        return (
            <div className="launches_div error_div">
                <h1>Error</h1>
            </div>
        )
    }
    return (
        <div className='launches_div'>
            <div className='search_div'>
                <input onChange={(e: any) => { setSearch(e.target.value) }} type="text" placeholder='search..' />
            </div>
            {
                loading ?
                    <div className='loader'></div>
                    :
                    <div className='launches_item_div'>
                        {
                            data?.launches?.filter((val) => {
                                if (search === '') {
                                    return val
                                }
                                else if (val?.mission_name?.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                                return
                            }).map((val) => {
                                return (
                                    <div onClick={() => { callBack(val?.id) }} key={val?.id} id={id === val?.id ? 'selected' : ''} className='launches_item'>{val?.mission_name}</div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Launches;