import React from 'react'

const Table = () => {
  return (
    <table className='border border-blue-400'>
        <tr className='border border-blue-400'>
            <th className='border border-blue-400'>Row Num</th>
            <th>Name</th>
            <th>Location</th>
            <th>CGPA</th>
            <th>Action</th>
        </tr>
        <tr className='border border-blue-400'>
        <td>Saumya</td>
        <td>Borivali</td>
        <td>Rajiv</td>
        <td>8.96</td>
        <td>Add Delete</td>
        </tr>
        
    </table>
  )
}

export default Table