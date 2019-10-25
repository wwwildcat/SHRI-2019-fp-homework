/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withDefaultColor from '../hocs/withDefaultColor';
import withSmallSize from '../hocs/withSmallSize';
import addDecreaseCounter from '../hocs/addDecreaseCounter';
import renderCounter from '../hocs/renderCounter';
import withOnClickDecreaseCounter from '../hocs/withOnClickDecreaseCounter';


export default compose(
	withDefaultColor,
	withSmallSize,
	addDecreaseCounter,
	renderCounter,
	withOnClickDecreaseCounter
)(BaseButton);
