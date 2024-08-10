



// props = {
//     name:'Jose',
//     secondName:'Mejia',
//     middleName:'Ivan'
// }

import PropTypes from 'prop-types';

function Names({ name }) {
    return (
        <div>
            <h1>Hello, my name is</h1>
            {name}
        </div>
    );
}

Names.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Names;


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// addTwoNumbers(2, 2)
// addTwoNumbers(34, 56)


/*



*/