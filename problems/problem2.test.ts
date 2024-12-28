import { test, expect } from "bun:test";
import { makeNode, concatList, reverseList, ListNode, addTwoNumbers } from "./problem2";

test("concat [2,4,3]", () => {
	const nodes = makeNode([2, 4, 3]);
	const concatinated = concatList(nodes);

	expect(concatinated).toBe("243");
});

test("reverse [2,4,3]", () => {
	const nodes = makeNode([2, 4, 3]);
	const reversedNodes = reverseList(nodes);

	expect(reversedNodes?.val).toBe(3);
	expect(reversedNodes?.next?.val).toBe(4);
	expect(reversedNodes?.next?.next?.val).toBe(2);
});

test("[2,4,3] [5,6,4]", () => {
	const aNodes = makeNode([2, 4, 3]);
	const bNodes = makeNode([5, 6, 4]);
	const result = addTwoNumbers(aNodes, bNodes);

	expect(result?.val).toBe(7);
	expect(result?.next?.val).toBe(0);
	expect(result?.next?.next?.val).toBe(8);
});

test("[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] [5,6,4]", () => {
	const aNodes = makeNode([
		1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	]);
	const bNodes = makeNode([5, 6, 4]);
});
