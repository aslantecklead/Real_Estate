const cardData = [
	{ imageSrc: "image1.jpg", price: "$300,000", address: "123 Main St, City, Country", brokerName: "John Smith" },
	{ imageSrc: "image2.jpg", price: "$250,000", address: "456 Elm St, City, Country", brokerName: "Jane Johnson" },
	{ imageSrc: "image3.jpg", price: "$400,000", address: "789 Oak St, City, Country", brokerName: "Michael Davis" },
	{ imageSrc: "image4.jpg", price: "$350,000", address: "101 Pine St, City, Country", brokerName: "Sarah Wilson" },
];


const cardContainer = document.getElementById("cardContainer");

function generateCard(data) {
	const cardTemplate = `
			<div class="col-md-4">
					<div class="card mx-auto">
							<div class='card-image'>
									<img src="${data.imageSrc}" class="card-img" alt="Image">
							</div>
							<div class="card-body">
									<h5 class="price">${data.price}</h5>
									<div class="details">
											<p class="name">${data.address}</p>
											<p class='slash'> | </p>
											<p class="broker_name">${data.brokerName}</p>
									</div>
							</div>
					</div>
			</div>
	`;

	return cardTemplate;
}

cardData.forEach((data) => {
	const cardTemplate = generateCard(data);
	cardContainer.innerHTML += cardTemplate;
});
