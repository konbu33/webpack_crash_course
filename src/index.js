import _ from 'lodash'
//import { NAME, NiJou } from './utilities'
//import * as util from './utilities'
//import { NAME as NAME_OF_HAM } from './utilities'
import Tiger from './utilities'

console.log(Tiger.say())

function component() {
	const element = document.createElement('div')
	const array = ['Hello', 'webpack', '!!!!']
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component())

