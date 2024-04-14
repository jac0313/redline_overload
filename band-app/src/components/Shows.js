import Hero from './Hero'
import Table from 'react-bootstrap/Table';

function Shows(){
    return(
        <>
        <Hero text = "Come see us live!" />
        <Table striped bordered hover>
      <thead className='text-black table-light'>
        <tr>
          <th>Date</th>
          <th>Place</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody className='text-danger table-light'>
        <tr>
          <td>February 3, 2024</td>
          <td>Locavore Beer Works - 5950 S Platte Canyon Rd</td>
          <td>6pm - 9pm</td>
        </tr>
        <tr>
          <td>March 3, 2024</td>
          <td>Fraco's Bar and Live Music - 5302 S Federal Cir</td>
          <td>8pm</td>
        </tr>
        <tr>
          <td>April 3, 2024</td>
          <td>Fraco's Bar and Live Music - 5302 S Federal Cir</td>
          <td>7:30pm</td>
        </tr>
        <tr>
          <td>May 4, 2024</td>
          <td>Fraco's Bar and Live Music - 5302 S Federal Cir</td>
          <td>7pm</td>
        </tr>
        <tr>
          <td>June 21, 2024</td>
          <td>Fraco's Bar and Live Music - 5302 S Federal Cir</td>
          <td>7pm</td>
        </tr>
        <tr>
          <td>July 26, 2024</td>
          <td>Bar 404 - 404 N Broadway</td>
          <td>7pm</td>
        </tr>
      </tbody>
    </Table>
    <h3 className='text-danger text-center'>Email us to book!</h3> 
        </>

    )
}


export default Shows