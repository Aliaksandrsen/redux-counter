import React from 'react';
import { connect } from 'react-redux';

import {inc, dec, rnd} from '../actions';

const Counter = ({ counter, dec, inc, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id='counter'>{counter}</h2>
            <button id='dec' className='btn btn-primary btn-lg'
                onClick={dec}
            >DEC</button>
            <button id='inc' className='btn btn-primary btn-lg'
                onClick={inc}
            >INC</button>
            <button id='rnd' className='btn btn-primary btn-lg'
                onClick={rnd}
            >RND</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};


const mapDispatchToProps = (dispatch) => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    rnd: () => dispatch(rnd()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
