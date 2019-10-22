const fetchData = async () => {
	const data = await fetch('/make')
		.then(_ => _.json())
		.catch(() => {});
	if (!data || !data.product) throw 'invalid fanta';
	else return data;
};

const fetchLogo = () => fetch('/logo.svg').then(res => res.text());

const makeCssColor = color => `rgba(${color._rgb.map(Math.floor).join()})`;

const buildUpFanta = data => {
	[...document.querySelectorAll('x-word')].forEach(w => {
		w.innerText = data.noun;
	});

	return true;
};

const go = async () => {
	const $fanta = document.querySelector('x-fanta');
	const data = await fetchData();

	await buildUpFanta(data);

	console.log(JSON.stringify(data));
};
go();
