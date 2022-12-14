import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import './launches.css'

function Indlaunches({ id }: { id: string }) {
    const { data, loading, error } = useLaunchInfoQuery(
        {
            variables: {
                id: id
            }
        }
    )
    if (loading) {
        return (
            <div className="indlaunch_div">
                <div className='loader loader2'></div>
            </div>
        )
    }
    if (error || !data) {
        return (
            <div className="indlaunch_div">
                <h1>Error</h1>
            </div>
        )
    }
    return (
        
        <div className='indlaunch_div'>
            
            <div className='indlaunch_head'>
                <div className='indlaunch_head_name'>{data?.launch?.mission_name}</div>
                <div className='indlaunch_head_status'>Launch Status: <span className={data?.launch?.launch_success ? 'launch_success_true' : 'launch_success_false'}>{data?.launch?.launch_success === true ? " True" : " False"}</span></div>
            </div>
            <p className='launch_year'>{data?.launch?.mission_name} was launched in {data?.launch?.launch_year}.</p>
            <p className='details'>{data?.launch?.details === null ? "No details available" : data?.launch?.details}</p>
            <div className='links_div'>
                {
                    data?.launch?.links?.video_link !== null ?
                        <a href={data?.launch?.links?.video_link} rel="noreferrer" target="_blank">
                            Youtube
                        </a>
                        : false
                }
                {
                    data?.launch?.links?.wikipedia !== null ?
                        <a href={data?.launch?.links?.wikipedia} rel="noreferrer" target="_blank">
                            Wiki Pedia
                        </a>
                        : false
                }
            </div>
        </div>

    );
}

export default Indlaunches;