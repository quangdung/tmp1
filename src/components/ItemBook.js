import { Table } from 'react-bootstrap';

function ItemBook({ item }) {
    return (<div>
        <h3>BOOK: {item.name}</h3>
        <Table striped bordered hover>
            <tbody>
                <tr><td>Name</td><td>{item.name}</td></tr>
                <tr><td>ISBN</td><td>{item.isbn}</td></tr>
                <tr><td>Authors</td><td>{item.authors}</td></tr>
                <tr><td>Number of pages</td><td>{item.numberOfPages}</td></tr>
                <tr><td>Publisher</td><td>{item.publisher}</td></tr>
                <tr><td>Country</td><td>{item.country}</td></tr>
                <tr><td>Media type</td><td>{item.mediaType}</td></tr>
                <tr><td>Released</td><td>{item.released}</td></tr>
                <tr><td>Number of characters</td><td>{item.characters.length}</td></tr>
                <tr><td>Number of POV-characters</td><td>{item.povCharacters.length}</td></tr>
                {/* <tr><td></td><td>{item.}</td></tr> */}
            </tbody>
        </Table>
    </div>
    )
}

export default ItemBook;
