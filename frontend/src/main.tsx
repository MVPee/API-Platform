import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Api from './pages/Api/Api.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Api />
	</StrictMode>
);
