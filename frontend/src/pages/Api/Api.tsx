import { useState } from 'react';
import ApiForm from '../../components/ApiForm/ApiForm';
import ResponseApi from '../../components/ApiResponse/ApiResponse';
import './style.css';

function Api() {
	const [response, setResponse] = useState<any>(null);

	const handleApiResponse = (data: any) => {
		setResponse(data);
	};

	return (
		<>
			<ApiForm onApiResponse={handleApiResponse} />
			<ResponseApi response={response} />
		</>
	);
}

export default Api;
