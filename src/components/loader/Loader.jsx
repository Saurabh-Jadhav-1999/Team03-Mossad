import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import { Loader } from 'rsuite'
 
export default function Loader() {
return (
    <div style={{
    display: 'block', width: 700, paddingLeft: 30
    }}>
    {/* <h4>React Suite Loader Component</h4> */}
    {/* <Loader size="xs" content="This is very small size loader" />
    <br/>
    <Loader size="sm" content="This is small size loader" /> */}
    <br/>
    <Loader size="md" content="This is medium size loader" />
    <br/>
    {/* <Loader size="lg" content="This is large size loader" /> */}
    </div>
);
}