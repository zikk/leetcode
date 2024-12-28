export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function reverseList(list: ListNode, prev: ListNode | null = null): ListNode {
	if (list.next) {
		const oldNext = list.next;
		list.next = prev;
		return reverseList(oldNext, list);
	}

	list.next = prev;
	return list;
}

export function concatList(list: ListNode): string {
	const values: number[] = [];
	let node: ListNode | null = list;

	while (node) {
		values.push(node.val);
		node = node.next;
	}

	return values.join("");
}

export function makeNode(values: number[]): ListNode {
	let node: ListNode | null = null;
	let firstNode: ListNode | null = null;

	for (const v of values) {
		const newNode = new ListNode(v);

		if (node) {
			node.next = newNode;
		} else {
			firstNode = newNode;
		}

		node = newNode;
	}

	return firstNode as ListNode;
}

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
	const revL1 = reverseList(l1);
	const revL2 = reverseList(l2);

	const sum = BigInt(concatList(revL1)) + BigInt(concatList(revL2));
	const sumSplit = sum
		.toString()
		.split("")
		.map((v) => Number.parseInt(v, 10));

	let node: ListNode | null = null;
	let firstNode: ListNode | null = null;

	for (const v of sumSplit) {
		const newNode = new ListNode(v);

		if (node) {
			node.next = newNode;
		} else {
			firstNode = newNode;
		}

		node = newNode;
	}

	return reverseList(firstNode as ListNode);
}
