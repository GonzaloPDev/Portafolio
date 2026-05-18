import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(document.querySelector('.portfolio')).toBeInTheDocument();
  });

  it('has proper navigation items', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('TECNOLOGÍAS')).toBeInTheDocument();
    expect(screen.getByText('PROYECTOS')).toBeInTheDocument();
    expect(screen.getByText('CONTACTO')).toBeInTheDocument();
  });
});