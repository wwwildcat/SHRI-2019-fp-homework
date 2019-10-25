/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withLargeSize from '../hocs/withLargeSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import addButtonStyle from '../hocs/addButtonStyle';
import addIncreaseCounter from '../hocs/addIncreaseCounter';
import addRotateStyle from '../hocs/addRotateStyle';
import withOnClickRotate from '../hocs/withOnClickRotate';


export default compose(
	withLargeSize,
	withPrimaryColor,
	addIncreaseCounter,
	addRotateStyle,
	withOnClickRotate,
	addButtonStyle
)(BaseButton);
