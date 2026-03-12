import React from "react";
import TodoList from "./components/TodoList";
import { Routes, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Like from "./components/Like";
import ExamplePage from "./pages/ExamplePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/ExamplePage" element={<ExamplePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
