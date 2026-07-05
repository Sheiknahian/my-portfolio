'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Details = () => {
    const {slug} = useParams()
    const [project, setProject] = useState(null)
        useEffect(()=>{
            fetch('/projects.json')
                .then(res=>res.json())
                .then(data=>{
                    const found = data.find(d=>d.slug === slug);
                    setProject(found)
                })
        }, [setProject, slug])
        console.log(project);
    return (
        <div className='min-h-screen'>
            
        </div>
    );
};

export default Details;