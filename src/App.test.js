import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows new AI projects and previous web projects on first load', () => {
  render(<App />);
  expect(screen.getByRole('heading', {name: 'My Projects'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'SafarAI: AI Travel Advisor'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Automated Customer Reviews'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'PokeFight'})).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(12);
  expect(screen.getByRole('link', {name: 'View SafarAI: AI Travel Advisor source code'}))
    .toHaveAttribute('href', 'https://github.com/zinaelnahel/ai_travel_advisor');
});

test('can leave and return to the project gallery', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('tab', {name: 'Contact'}));
  expect(screen.queryByRole('heading', {name: 'My Projects'})).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', {name: 'Projects'}));
  expect(screen.getByRole('heading', {name: 'My Projects'})).toBeInTheDocument();
});
