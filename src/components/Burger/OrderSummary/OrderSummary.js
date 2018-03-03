import React from 'react';
import Wrap from '../../../hoc/Wrap';
import  classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys( props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey} :</span> {props.ingredients[igKey]}
                </li>
            );

        });
    return (
        <Wrap>
            <h3>Your Order</h3>
            <p>Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrap>
    );
};
export default orderSummary;