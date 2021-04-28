import countries from "../index";

/** test for getCountry */
it("should get basic data on the country canada", async () => {
	const data = await countries.getCountry('canada');
	expect(data).toEqual({
		capital: 'Ottawa',
		region: 'Americas',
		numericCode: '124'
	});
});

/** test for getRegionCountries */
it("should get region countries", async () => {
	const data = await countries.getRegionCountries('nafta');
	expect(data).toEqual([
		'Canada', 'Mexico', 'United States of America'
	]);
});

/** test for getRegionCapitals */
it("should get capitals of NAFTA countries", async () => {
	const data = await countries.getRegionCapitals('nafta');
	expect(data).toEqual([
		'Ottawa', 'Mexico City', 'Washington, D.C.'
	]);
});