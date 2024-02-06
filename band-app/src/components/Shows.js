import Hero from './Hero'
import Table from 'react-bootstrap/Table';

function Shows(){
    return(
        <>
        <Hero text = "Come see us live!" />
        <Table striped bordered hover>
      <thead className='text-white'>
        <tr>
          <th>Date</th>
          <th>Place</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody className='text-white'>
        <tr>
          <td>February 3, 2024</td>
          <td>Locavore Beer Works</td>
          <td>6pm - 9pm</td>
        </tr>
        <tr>
          <td>May 4, 2024</td>
          <td>Fraco's Bar and Live Music</td>
          <td>7pm</td>
        </tr>
      </tbody>
    </Table>
        </>

    )
}

export default Shows