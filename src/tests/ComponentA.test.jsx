// src/tests/ComponentA.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // 👈 matchers como toBeInTheDocument
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import exampleReducer from "../store/ExampleSlice";
import appUsersReducer from "../store/GetAllUsersSlice";
import ComponentA from "../components/A_Component";

// Helper para render con Redux + Router
const renderWithRedux = (
  component,
  { 
    preloadedState, 
    store = configureStore({
      reducer: { example: exampleReducer, appUsers: appUsersReducer },
      preloadedState,
    }) 
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>
          {component}
        </MemoryRouter>
      </Provider>
    ),
    store,
  };
};

describe("ComponentA", () => {
  test("renders ComponentA and interacts with redux state", () => {
    const preloadedState = {
      example: { flip: false, numericValue: 0 },
      appUsers: { allUsers: [] },
    };

    renderWithRedux(<ComponentA />, { preloadedState });

    // Títulos y valores iniciales
    expect(screen.getByText("A Component")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();

    // Click en boton "+"
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeInTheDocument();

    // Click en "Change State"
    fireEvent.click(screen.getByText("Change State"));
    // Aquí se podría testear el cambio de flip si tu h1 cambia a "true"

    // Renderizado condicional lista usuarios
    expect(screen.getByText("No users found")).toBeInTheDocument();
  });

  test("renders users list when users are present", () => {
    const storeUsers = [{ id: 1, name: "Juan", email: "juan@mail.com" }];

    renderWithRedux(<ComponentA />, {
      preloadedState: {
        example: { flip: false, numericValue: 0 },
        appUsers: { allUsers: storeUsers },
      },
    });

    // Buscar texto dentro del li
    expect(screen.getByText(/Juan/)).toBeInTheDocument();
    expect(screen.getByText(/juan@mail.com/)).toBeInTheDocument();
  });

  test("Link to B_Component navigates correctly", () => {
    const history = createMemoryHistory();

    render(
      <Provider store={configureStore({ reducer: { example: exampleReducer, appUsers: appUsersReducer } })}>
        <Router location={history.location} navigator={history}>
          <ComponentA />
        </Router>
      </Provider>
    );

    // Link está en el documento
    const link = screen.getByText("Go to B Component");
    expect(link).toBeInTheDocument();

    // Su href es correcto
    expect(link.closest("a")).toHaveAttribute("href", "/b_component");

    // Simular click y verificar cambio de ruta
    fireEvent.click(link);
    expect(history.location.pathname).toBe("/b_component");
  });
});
