import React, { Component } from 'react'

/**
 * Heading 3
 */
const H3 = ({ children, className }) => (
    <h3 { ...nb("ft8 pt1 pb2 xmv bc5 uppercase ls1 sans fwsemibold") }>
        { children }
    </h3>
)

export default H3
