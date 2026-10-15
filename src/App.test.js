import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';
import {projects} from './data/projects';

test('introduces Zina with the CV-based role, portrait and experience', () => {
  render(<App />);
  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Hi, I’m Zina.');
  expect(screen.getByAltText('Zina El Nahel smiling')).toHaveAttribute('src', '/images/zina-el-nahel.jpg');
  expect(screen.getByRole('heading', {name: 'Senior Software Engineer in Test'})).toBeInTheDocument();
  expect(screen.getByText('Jul 2024 — Jun 2026')).toBeInTheDocument();
  expect(screen.getByText('ISTQB CTFL · Certified 2013')).toBeInTheDocument();
});

test('filters the gallery and lets visitors discover every project', () => {
  render(<App />);
  const gallery = document.getElementById('project-gallery');
  expect(within(gallery).getAllByRole('article')).toHaveLength(5);
  fireEvent.click(screen.getByRole('button', {name: 'Show all 12 projects'}));
  expect(within(gallery).getAllByRole('article')).toHaveLength(12);
  fireEvent.click(screen.getByRole('button', {name: /AI engineering/}));
  expect(within(gallery).getAllByRole('article')).toHaveLength(2);
  expect(screen.getByRole('heading', {name: 'SafarAI'})).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'Web development'}));
  expect(within(gallery).getAllByRole('article')).toHaveLength(10);
  expect(screen.queryByRole('heading', {name: 'SafarAI'})).not.toBeInTheDocument();
});

test('every project card opens its own destination and source without nested links', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', {name: 'Show all 12 projects'}));
  projects.forEach(project => {
    const primary = screen.getByRole('link', {name: `Open ${project.title}${project.demo ? ' demo' : ' repository'} (opens in a new tab)`});
    expect(primary).toHaveAttribute('href', project.demo || project.repository);
    expect(primary).toHaveAttribute('target', '_blank');
    expect(primary).toHaveAttribute('rel', 'noopener noreferrer');
    expect(primary.querySelector('a')).toBeNull();
    expect(screen.getByRole('link', {name: `Code: ${project.title} (opens in a new tab)`})).toHaveAttribute('href', project.repository);
  });
  expect(screen.getByRole('link', {name: 'Open SafarAI demo (opens in a new tab)'})).toHaveAttribute('href', 'https://ai-travel-advisor-s51s.vercel.app/');
  expect(document.querySelector('a[href="https://bouquet.netlify.app/"]')).toBeNull();
});

test('mobile navigation expands and closes after choosing a section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', {name: 'Open navigation'});
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', {name: 'Experience'}));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', {name: 'Experience'})).toHaveAttribute('href', '#experience');
  expect(document.activeElement).toBe(document.getElementById('experience'));
});

test('Escape closes navigation and restores focus to its button', () => {
  render(<App />);
  const toggle = screen.getByRole('button', {name: 'Open navigation'});
  fireEvent.click(toggle);
  const link = screen.getByRole('link', {name: 'Experience'});
  link.focus();
  fireEvent.keyDown(link, {key: 'Escape'});
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(document.activeElement).toBe(toggle);
});

test('skip link moves keyboard focus to main content', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', {name: 'Skip to content'}));
  expect(document.activeElement).toBe(screen.getByRole('main'));
});

test('shows the bootcamp dates and separates practice from the wider syllabus', () => {
  render(<App />);
  expect(screen.getByRole('heading', {name: 'AI Engineering at Ironhack'})).toBeInTheDocument();
  expect(screen.getByText('31 August 2026')).toHaveAttribute('datetime', '2026-08-31');
  expect(screen.getByText('13 November 2026')).toHaveAttribute('datetime', '2026-11-13');
  expect(screen.getByRole('heading', {name: 'Data & machine learning'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Also on my learning path'})).toBeInTheDocument();
  expect(screen.getByText('RAG')).toBeInTheDocument();
});
