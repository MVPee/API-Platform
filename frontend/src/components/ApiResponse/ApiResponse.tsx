import './style.css';

interface ApiResponseProps {
	response: any;
}

const ApiResponse = ({ response }: ApiResponseProps) => {
	return (
		<>
			<h3 className="text-center mt-5 pt-5">Response</h3>
			{/* Always display status, even if response is null */}
			<h4 className="text-center">
				Status: {response ? response.status : 'No Response'}
			</h4>
			<pre>{JSON.stringify(response, null, 2)}</pre>
		</>
	);
};

export default ApiResponse;
