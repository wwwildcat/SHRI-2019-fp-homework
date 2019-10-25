/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import addIncreaseCounter from '../hocs/addIncreaseCounter';
import renderCounter from '../hocs/renderCounter';
import withOnClickIncreaseCounter from '../hocs/withOnClickIncreaseCounter';


export default compose(
	withSmallSize,
	withPrimaryColor,
	addIncreaseCounter,
	renderCounter,
	withOnClickIncreaseCounter
)(BaseButton);
