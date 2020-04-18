import React from 'react';
import { connect } from 'react-redux';

import { inc, dec, rnd } from '../actions';


const Counter = ({ counter, dec, inc, rnd }) => {
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={dec}>DEC</button>
            <button onClick={inc}>INC</button>
            <button onClick={rnd}>RND</button>
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
