import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Form, Overlay, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import SearchResult from './SearchResult';

import { actions } from '../slices';

function Search() {
    const dispatch = useDispatch();

    const { results, status } = useSelector(state => state.search);

    const [searchTerm, setSearchTerm] = useState('');

    // To hide search results when an element is selected
    const [closeResult, setCloseResult] = useState(null);

    const target = useRef(null);

    const handleSearchTermChange = (event) => {
        const toFind = event.target.value;
        setSearchTerm(toFind);

        if (toFind.length >= 3) {
            dispatch(actions.search(toFind));
            setCloseResult(false);
        }
        else {
            setCloseResult(true);
        }
    };

    return (<div>
        <Form>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Type more than 3 characters to search..."
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        ref={target}
                    />
                </Col>
                {<Col>
                    <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">
                       Search book's name, <br/>
                       character's name, culture, born-died period, <br/>
                       house's name, region, words
                    </Tooltip>}>
                        <span className="d-inline-block"><Button
                            {...(status === 'loading' && { variant: 'outline-secondary' }
                                || (status === 'failed' && { variant: 'outline-danger' })
                                || { variant: 'outline-success' })}
                            disabled>
                            {status === 'loading' ? 'Search...' : status === 'failed' ? Error : 'Search'}
                        </Button></span>
                    </OverlayTrigger>
                </Col>}
            </Row>
        </Form>
        {!closeResult && results && results.length > 0 &&
            <Overlay target={target.current} show={results.length > 0} placement="bottom">
                {props => (
                    <div {...props} >
                        <SearchResult setCloseResult={setCloseResult} />
                    </div>
                )}
            </Overlay>}
    </div>
    );
}

export default Search;