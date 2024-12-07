import { useState } from 'react';
import './style.css';

interface ApiFormProps {
	onApiResponse: (data: any) => void;
}

function ApiForm({ onApiResponse }: ApiFormProps) {
	const [type, setType] = useState('GET');
	const [url, setUrl] = useState('');
	const [payload, setPayload] = useState('');

	const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setType(event.target.value);
	};

	const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(event.target.value);
	};

	const handlePayloadChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setPayload(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Set up request options
		const requestOptions: RequestInit = {
			method: type,
			headers: { 'Content-Type': 'application/json' },
		};

		if (type === 'POST') requestOptions.body = JSON.stringify({ payload });

		fetch(url, requestOptions)
			.then((response) => {
				if (!response.ok) throw new Error('Network response was not ok');
				return response;
			})
			.then((data) => {
				console.log('Success:', data);
				onApiResponse(data);
			})
			.catch((error) => {
				console.error('Error:', error);
				onApiResponse(error);
			});
	};

	return (
		<>
			<h1 className="text-center">API Request</h1>
			<form onSubmit={handleSubmit}>
				<select id="type" name="type" value={type} onChange={handleTypeChange}>
					<option value="GET">GET</option>
					<option value="POST">POST</option>
				</select>
				<label htmlFor="nom">url</label>
				<input
					type="text"
					id="url"
					name="url"
					value={url}
					onChange={handleUrlChange}
				/>
				<button type="submit">Request</button>
				{type === 'POST' && (
					<>
						<label htmlFor="payload">Payload</label>
						<textarea
							id="payload"
							name="payload"
							rows="4"
							cols="50"
							value={payload}
							onChange={handlePayloadChange}
						/>
					</>
				)}
			</form>
		</>
	);
}

export default ApiForm;
