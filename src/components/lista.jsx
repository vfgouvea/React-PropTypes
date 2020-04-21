import React from 'react';
import PropTypes from 'prop-types';

class Lista extends React.Component {

    render(){
        return (
            <ul>{this.props.items.map( (item,indice) => {
                    return <li key={indice}>{item}</li>;
            })}</ul>
        );
    }

}

const itemsValidations = function(props,propName,component){

        if(!(propName in props)){
            return new Error('Faltando prop ${propName}');
        }
        if(props[propName].length<5){
            return new Error('Necessario minimo de 5 items na lista');
        }
    }

Lista.propTypes = {

    items: PropTypes.arrayOf(itemsValidations)

}

/*
Lista.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}*/

export default Lista;