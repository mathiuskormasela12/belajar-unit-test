test("test toBe", () => {
	const name = "Mathius";
	const hello = `Hello ${name}`;

	// You cant use toBe to compare the array or object value
	expect(hello).toBe("Hello Mathius");
});

test("test toEqual", () => {
	const person = {id: "mathiuss"};
	Object.assign(person, { name: "Mathius" });

	// You can use for array and object value only
	expect(person).toEqual({ id: "mathius", name: "Mathius" });
})