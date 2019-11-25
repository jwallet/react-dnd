import { DragSource, DropTarget, Identifier } from './interfaces'
import invariant from 'invariantx'

export function validateSourceContract(source: DragSource) {
	invariant(
		typeof source.canDrag === 'function',
		'Expected canDrag to be a function.',
	)
	invariant(
		typeof source.beginDrag === 'function',
		'Expected beginDrag to be a function.',
	)
	invariant(
		typeof source.endDrag === 'function',
		'Expected endDrag to be a function.',
	)
}

export function validateTargetContract(target: DropTarget) {
	invariant(
		typeof target.canDrop === 'function',
		'Expected canDrop to be a function.',
	)
	invariant(
		typeof target.hover === 'function',
		'Expected hover to be a function.',
	)
	invariant(
		typeof target.drop === 'function',
		'Expected beginDrag to be a function.',
	)
}

export function validateType(
	type: Identifier | Identifier[],
	allowArray?: boolean,
) {
	if (allowArray && Array.isArray(type)) {
		type.forEach(t => validateType(t, false))
		return
	}

	invariant(
		typeof type === 'string' || typeof type === 'symbol',
		allowArray
			? 'Type can only be a string, a symbol, or an array of either.'
			: 'Type can only be a string or a symbol.',
	)
}
