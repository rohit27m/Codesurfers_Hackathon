import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './globals.css';
import { StoryProvider } from './contexts/StoryContext.jsx';
import { PersonalizationProvider } from './contexts/PersonalizationContext.jsx';
import { AIProvider } from './contexts/AIProviderContext.jsx';

createRoot(document.getElementById('root')).render(
	<AIProvider>
		<PersonalizationProvider>
			<StoryProvider>
				<App />
			</StoryProvider>
		</PersonalizationProvider>
	</AIProvider>
);
